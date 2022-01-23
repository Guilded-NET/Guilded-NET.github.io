---
title: GuildedBotClient
layout: references
section: references
tags:
  - references
  - class
description: "

A client type for Guilded bots.

```csharp
public class GuildedBotClient : Guilded.NET.AbstractGuildedClient
```"
---

## GuildedBotClient Class
###### **Assembly:** `Guilded.NET`<br/>**Namespace:** [`Guilded.NET`](Guilded.NET 'Guilded.NET')

A client type for Guilded bots.

```csharp
public class GuildedBotClient : Guilded.NET.AbstractGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#129106; [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') &#129106; GuildedBotClient

### Remarks
  
Use this to initiate and log into Guilded bot.  
  
If you want to connect, set [AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()').  
  
You can also use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') set.

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
using GuildedBotClient client = new GuildedBotClient("...auth...");  
  
client.Prepared += _ => Console.WriteLine("I am prepared!");  
client.MessageCreated  
    .Where(msg => msg.Content == "!ping")  
    .Subscribe(msg => await msg.RespondAsync("Pong!"));  
  
await client.ConnectAsync();  
```

| Constructors | |
| :--- | :--- |
| [GuildedBotClient()](GuildedBotClient.GuildedBotClient() 'Guilded.NET.GuildedBotClient.GuildedBotClient()') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance without authentication token. |
| [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string) 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)') | Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth'). |

| Properties | |
| :--- | :--- |
| [AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') | An authentication token used to log into a bot in Guilded. |

| Methods | |
| :--- | :--- |
| [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()') | Connects to Guilded using defined auth. |
| [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)') | Connects to Guilded bot using parameter as an auth. |

### See Also
- [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
- [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
- [Prepared](AbstractGuildedClient.Prepared 'Guilded.NET.AbstractGuildedClient.Prepared')
- [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')
- [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated')