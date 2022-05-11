---
title: ConnectAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Connects to Guilded bot using parameter as an auth."
---

## GuildedBotClient.ConnectAsync(string) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient.md 'Guilded.GuildedBotClient')

Connects to Guilded bot using parameter as an auth.

```csharp
public System.Threading.Tasks.Task ConnectAsync(string auth);
```

### Remarks
  
Creates a new connection to Guilded using argument [auth](GuildedBotClient.ConnectAsync(string).md#Guilded.GuildedBotClient.ConnectAsync(string).auth 'Guilded.GuildedBotClient.ConnectAsync(string).auth'). This does not use [AuthToken](GuildedBotClient.AuthToken.md 'Guilded.GuildedBotClient.AuthToken').  
  
To disconnect from Guilded, use [DisconnectAsync()](AbstractGuildedClient.DisconnectAsync().md 'Guilded.AbstractGuildedClient.DisconnectAsync()')
#### Parameters

<a name='Guilded.GuildedBotClient.ConnectAsync(string).auth'></a>

`auth` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token to be used for authorization

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When passed argument [auth](GuildedBotClient.ConnectAsync(string).md#Guilded.GuildedBotClient.ConnectAsync(string).auth 'Guilded.GuildedBotClient.ConnectAsync(string).auth') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')

### See Also
- [ConnectAsync()](GuildedBotClient.ConnectAsync().md 'Guilded.GuildedBotClient.ConnectAsync()')
- [GuildedBotClient()](GuildedBotClient.GuildedBotClient().md 'Guilded.GuildedBotClient.GuildedBotClient()')
- [DisconnectAsync()](AbstractGuildedClient.DisconnectAsync().md 'Guilded.AbstractGuildedClient.DisconnectAsync()')