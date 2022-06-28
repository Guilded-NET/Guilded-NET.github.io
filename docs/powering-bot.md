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

At this time, there is no way to detect whether the author of the message is a bot. You can, however, it's possible to check if they are a webhook by checking if [CreatedByWebhook](/references/Message_CreatedByWebhook).

This only allows us to use ping command though, but we definitely want to have more than a ping command. Time to make more commands.

## Commands

While you can build your own, it's recommended to use Guilded.NET's command system. This will be covered [in this document](./commands.md).

## Other events

There is more events than message created event. The list includes [MessageUpdated](/references/AbstractGuildedClient_MessageUpdated), [MessageDeleted](/references/AbstractGuildedClient_MessageDeleted) and other events. It is recommend to check them out and see what you can do.