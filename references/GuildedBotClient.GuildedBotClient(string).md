---
title: GuildedBotClient(string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth').

```csharp
public GuildedBotClient(string auth);
```"
---

## GuildedBotClient(string) Constructor
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient 'Guilded.NET.GuildedBotClient')

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth').

```csharp
public GuildedBotClient(string auth);
```

### Remarks
  
This creates a new client and only initiates it. It does not connect to Guilded.  
  
If you want to connect, set [AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()').  
  
You can also use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken') set.
#### Parameters

<a name='Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth'></a>

`auth` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Authentication token used to log into the bot in Guilded

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When passed argument [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.NET.GuildedBotClient.GuildedBotClient(string).auth') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace