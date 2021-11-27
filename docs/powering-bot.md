---
layout: docs
description: "Well, to no surprise, Guilded bots scan do more than connect to Guilded. They can update, delete messages, forum threads, etc. and receive various events that Guilded API exposes."
tags:
    - Functions
    - Guilded.NET
    - C#
---

# Getting Started: Powering up the bot

Well, to no surprise, Guilded bots can do more than connect to Guilded. They can create, update, delete messages, forum threads, etc. and receive various events that Guilded API exposes. Guilded.NET should have majority of these features implemented, but if you want to check out which indeed are supported, go over to the [Quick Overview: Supported features](/docs/supported) document.

## Message creation event

One of the supported events in Guilded API and Guilded.NET is message creation event. It can have plenty of uses, but most notable one is text commands. But to understand text commands, we need to start with a simple response bot.

```csharp
// ... Where we subscribe to Connected and Prepared events
client.MessageCreated
    .Subscribe(msgCreated => Console.WriteLine("Received message with content: {0}", msgCreated.Content));
```
{: data-filename="Program.cs"}

Now anytime any user, bot or webhook posts a message, our client will write <q>Received message with content: message here</q> in the console. We can now reply to the message using [`ReplyAsync(string)`{: .language-csharp}](/references/MessageEvent_ReplyAsync(string)) method:

```csharp
client.MessageCreated
    .Subscribe(async msgCreated => await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false));
```

Write <q>Hi!</q> in your server and... the bot replies with <q>Pong!</q> and then spams it while replying to itself.

## Text Commands

**So, what went wrong?**

The bot saw a message with <q>Hi!</q> which we wrote and replied to it with <q>Pong!</q>, but then it saw a message it itself created <q>Pong!</q>, so it replied to itself and started spamming. It can be seen in the reply to which message it reacted this way.

As such, we should check whether it is <q>!ping</q> and not any other message:

```csharp
using System.Reactive.Linq;

// ... Where we subscribed to Connected and Prepared events
client.MessageCreated
    .Where(msgCreated => msgCreated.Content == "!ping")
    .Subscribe(async msgCreated => await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false));
```

Writing <q>Hi!</q> should give you no response from your bot. Now write <q>!ping</q> and the bot should respond with <q>Pong!</q>. We have now set up the most basic command we could make.

We can also use `msgCreated.CreatedAuto` property to check whether the message was created automatically (created by a bot or a webhook) to prevent bots from using the command as well. You can do this by adding `.Where(msgCreated => !msgCreated.CreatedAuto)`{: .language-csharp} to our code, but this is optional.

This only allows us to use ping command though, but we definitely want to have more than a ping command. Time to make more commands.

First, we need to remove checking whether it's a message with content <q>!ping</q> and check if it starts with <q>!</q> instead (Guilded.NET documentation will always assume that your prefix is <q>!</q>, but it can be any other prefix):

```csharp
client.MessageCreated
    // Make sure `prefix` variable is already defined
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        Console.WriteLine("Received command: {0}", msgCreated.Content)
    });
```

Right now, it doesn't know what is the name of the command, nor its argument, so we need to read both of those:

```csharp
client.MessageCreated
    .Where(msgCreated => msgCreated.Content.StartsWith(prefix))
    .Subscribe(async msgCreated =>
    {
        // To remove the prefix in the command
        // !command_name arg0 arg1 -> new string[] { "command_name", "arg0", "arg1" }
        string afterPrefix = msgCreated.Content.Substring(prefix.Length);
        string[] split = afterPrefix.Split(' ');

        // Get first part. This is going to be the name
        string commandName = split.First();

        string[] args = split.Skip(1).ToArray();
    });
```

Then we can use `switch` statement to check which command is being used:

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

        switch (commandName)
        {
            case "ping":
                await msgCreated.ReplyAsync("Pong!").ConfigureAwait(false);
                break;
        }
    });
```

Like before, writing <q>!ping</q> should respond with <q>Pong!</q>, but the bot can also take apart commands and arguments, so <q>!ping arg0 arg1</q> should make the bot respond as well.

Let's use arguments in our other command:

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

Now type <q>!say Hello</q> and it replies with <q>You said: `Hello`</q>.

**But hey, what's this? Why is the reply purple?**

Checking out our code, we added this little piece:

`, isPrivate: true`{: .language-csharp}

This makes the reply private, which as it says, is only visible to us. This can be really useful for making our commands less spammy or secretive.

That's about it. The commands are done.

The command feature isn't built into Guilded API, nor Guilded.NET, but this will most likely change in the future. Stay tuned!

## Other events

There is more events than message created event. The list includes [MessageUpdated](/references/AbstractGuildedClient_MessageUpdated), [MessageDeleted](/references/AbstractGuildedClient_MessageDeleted) and other events. It is recommend to check them out and see what you can do.