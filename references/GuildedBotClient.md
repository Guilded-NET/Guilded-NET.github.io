---
title: GuildedBotClient
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the client type for Guilded bots."
---

## GuildedBotClient Class
##### **Assembly:** `Guilded`<br/>**Namespace:** [`Guilded`](Guilded 'Guilded')

Represents the client type for Guilded bots.

```csharp
public class GuildedBotClient : Guilded.AbstractGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') &#129106; [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient') &#129106; GuildedBotClient

### Remarks
  
Use this to initiate and log into Guilded bot.  
  
If you want to connect, set [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.GuildedBotClient.ConnectAsync()').  
  
You can also use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken') set.

### Example
  
This showcases a Guilded bot client that connects to Guilded, listens for prepared event and only listens to messages:  
  
```csharp  
using GuildedBotClient client = new GuildedBotClient("...auth...");  
client.Prepared += _ => Console.WriteLine("I am prepared!");  
client.MessageCreated.Subscribe(msg => Console.WriteLine("Received message with content:\n{0}", msg.Content));  
await client.ConnectAsync();  
```  
  
An example of a Guilded bot client with `!ping` command  
  
```csharp  
await using var client = new GuildedBotClient("...auth...");  
  
client.Prepared  
      .Subscribe(me =>  
          Console.WriteLine("I am prepared! Logged in as '{0}'", me.Name)  
      );  
client.MessageCreated  
    .Where(msg => msg.Content == "!ping")  
    .Subscribe(msg => await msg.RespondAsync("Pong!"));  
  
await client.ConnectAsync();  
```

| Constructors | |
| :--- | :--- |
| [GuildedBotClient()](GuildedBotClient.GuildedBotClient() 'Guilded.GuildedBotClient.GuildedBotClient()') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance without authentication token. |
| [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string) 'Guilded.GuildedBotClient.GuildedBotClient(string)') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.GuildedBotClient.GuildedBotClient(string).auth'). |

| Properties | |
| :--- | :--- |
| [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken') | An authentication token used to log into a bot in Guilded. |

| Methods | |
| :--- | :--- |
| [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.GuildedBotClient.ConnectAsync()') | Connects to Guilded using defined auth. |
| [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)') | Connects to Guilded bot using parameter as an auth. |

### See Also
- [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')
- [Prepared](AbstractGuildedClient.Prepared 'Guilded.AbstractGuildedClient.Prepared')
- [Connected](BaseGuildedClient.Connected 'Guilded.Base.BaseGuildedClient.Connected')
- [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)')
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')