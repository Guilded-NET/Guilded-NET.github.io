---
title: GuildedBotClient(string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.GuildedBotClient.GuildedBotClient(string).auth')."
---

## GuildedBotClient(string) Constructor
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient 'Guilded.GuildedBotClient')

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance with given [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.GuildedBotClient.GuildedBotClient(string).auth').

```csharp
public GuildedBotClient(string auth);
```

### Remarks
  
This creates a new client and only initiates it. It does not connect to Guilded.  
  
If you want to connect, set [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken') and then use [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.GuildedBotClient.ConnectAsync()').  
  
You can also use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)'), which doesn't require [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken') set.
#### Parameters

<a name='Guilded.GuildedBotClient.GuildedBotClient(string).auth'></a>

`auth` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Authentication token used to log into the bot in Guilded

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When passed argument [auth](GuildedBotClient.GuildedBotClient(string)#Guilded.GuildedBotClient.GuildedBotClient(string).auth 'Guilded.GuildedBotClient.GuildedBotClient(string).auth') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient')
- [GuildedBotClient()](GuildedBotClient.GuildedBotClient() 'Guilded.GuildedBotClient.GuildedBotClient()')
- [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken')