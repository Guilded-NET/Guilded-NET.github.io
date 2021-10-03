---
title: Giving bot functions
layout: docs
---

# Giving bot functions

Well, to no surprise, Guilded bots can do more than connect to Guilded. They can create, update, delete messages, forum threads, etc. and receive various events that Guilded API exposes. Guilded.NET tries to implement every standard Guilded API event and API endpoint, so anything that can be done with Guilded API, should also be in Guilded.NET(although some features might take longer to develop).

## Creating commands

First thing we want to do is implement commands in our bot. This can only be currently done by receiving messages and checking if they are commands, then do anything we want with it. No such thing as slash commands exists as of yet. Guilded clients expose [MessageCreated observable](/references/AbstractGuildedClient_MessageCreated) that can be subscribed to with an observer and receive all message creation events:

```csharp
// ... Where we subscribe to Connected and Prepared events
client.MessageCreated
    .Subscribe(msgCreated => Console.WriteLine("Received message with content: {0}", msgCreated.Content));
```
{: data-filename="Program.cs"}

Now anytime any user, bot or webhook posts a message, our client will write <q>Received message with content: message here</q> in the console. We can now use [`ReplyAsync(string)`{: .language-csharp}](/references/MessageEvent_ReplyAsync(string)) to reply to the received message:

```csharp
client.MessageCreated
    .Subscribe(async msgCreated => await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false));
```

Now write <q>Hi!</q> and... the bot replies with <q>Pong!</q> and then spams it while replying to itself. This means we need a condition to check if it's a ping command. You can add an `if` condition in the observer, but we can also use <c>.Where</c> to check it:

```csharp
// Make sure to import this at the top of the file:
using System.Reactive.Linq;

// ... Where we subscribed to Connected and Prepared events
client.MessageCreated
    .Where(msgCreated => msgCreated.Content == "!ping")
    .Subscribe(async msgCreated => await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false));
```

Now write <q>Hi!</q>. You should receive no response. Now write <q>!ping</q> and the bot should respond with <q>Pong!</q>. We have now set up the most basic command we could make. The problem is, we can't create other commands. Well, we should check if it starts with the prefix instead:

```csharp
client.MessageCreated
    // Make sure `prefix` variable is already defined
    // If you were following the previous tutorial or are using Guilded.NET template,
    // it's already defined
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        Console.WriteLine("Received command: {0}", msgCreated.Content)
    });
```

Now writing anything that starts with the defined prefix(Guilded.NET documentation will always assume your prefix is `!`, but it can be different in your bot) will make the client write <q>Received command: !command_here</q> in the console. Of course, we could use `.Select` method to fetch [Content](/references/MessageEvent_Content) property for instance:

```csharp
// Please don't do this in your code, it's an example
client.MessageCreated
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Select(msgCreated => msgCreated.Content)
    .Subscribe(content =>
    {
        Console.WriteLine("Received command: {0}", content);
    });
```

But the problem is with this code is that `msgCreated` is only defined locally for `.Where` and `.Select`, but we can't fetch it in `.Subscribe`, since we already gave the observer `msgCreated.Content` property through `.Select` method. So at least for this guide, we will be writing everything in `.Subscribe`.

But just remember that `.Select` and `.Where` exist.

So let's get started with fetching the command:

```csharp
client.MessageCreated
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        // To remove the prefix in the command
        // !command_name arg0 arg1 -> { "command_name", "arg0", "arg1" }
        string afterPrefix = msgCreated.Content.Substring(prefix.Length);
        string[] split = afterPrefix.Split(' ');

        // Get first part, since it's going to be the name of the command
        string commandName = split.First();

        string[] args = split.Skip(1).ToArray();
    });
```

Now we fetched both the name of the command and its arguments. We can verify if it works by logging it:

```csharp
client.MessageCreated
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        // To remove the prefix in the command
        string afterPrefix = msgCreated.Content.Substring(prefix.Length);
        string[] split = afterPrefix.Split(' ');

        // Get first part, since it's going to be the name of the command
        string commandName = split.First();

        string[] args = split.Skip(1).ToArray();

        Console.WriteLine("Received command {0} with args [{1}]", commandName, string.Join(", ", args));
    });
```

Write <q>!ping arg0 arg1</q> and it should output <q>Received command ping with args [arg0, arg1]</q> in the console.

We can now use `switch` statement to check what command it is and respond to it:

```csharp
client.MessageCreated
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        // To remove the prefix in the command
        string afterPrefix = msgCreated.Content.Substring(prefix.Length);
        string[] split = afterPrefix.Split(' ');

        // Get first part, since it's going to be the name of the command
        string commandName = split.First();

        string[] args = split.Skip(1).ToArray();

        switch(commandName)
        {
            case "ping":
                await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false);
                break;
        }
    });
```

Write <q>!ping test test</q> and it should write <q>Pong!</q> even if we provide arguments to it.

We can also add a command that replies privately:

```csharp
// ...
switch(commandName)
{
    case "ping":
        await msgCreated.ReplyAsync("Pong!");
        break;
    case "say":
        await msgCreated.ReplyAsync($"You said: `{args.FirstOrDefault()}`", isPrivate: true).ConfigureAwait(false);
        break;
}
```

Writing <q>!say test</q> should make bot create a private reply saying <q>You said: `test`</q>. That's it! You can now try creating more commands and extend the functionality of your bot.

## Other functionalities

[MessageCreated](AbstractGuildedClient_MessageCreated) isn't the only observable that can be subscribed to. You can also use [MessageUpdated](AbstractGuildedClient_MessageUpdated) that is very similar to message creation and other observables, such as [MessageDeleted](AbstractGuildedClient_MessageDeleted), [XpAdded](AbstractGuildedClient_XpAdded) and more.