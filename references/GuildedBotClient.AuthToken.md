---
title: AuthToken
layout: references
section: references
tags:
  - references
  - property
description: "

An authentication token used to log into a bot in Guilded."
---

## GuildedBotClient.AuthToken Property
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient.md 'Guilded.GuildedBotClient')

An authentication token used to log into a bot in Guilded.

```csharp
protected string? AuthToken { get; }
```

### Remarks
  
An authentication token that will be used to connect to Guilded using [ConnectAsync()](GuildedBotClient.ConnectAsync().md 'Guilded.GuildedBotClient.ConnectAsync()') method.  
  
This token can be set through [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string).md 'Guilded.GuildedBotClient.GuildedBotClient(string)') constructor. This is optional and [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string).md 'Guilded.GuildedBotClient.ConnectAsync(string)') can be used instead with authentication token as an argument.  
  
[AuthToken](GuildedBotClient.AuthToken.md 'Guilded.GuildedBotClient.AuthToken') will be passed as a header `Authorization` with bearer prefix.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Authentication token

### See Also
- [ConnectAsync()](GuildedBotClient.ConnectAsync().md 'Guilded.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string).md 'Guilded.GuildedBotClient.ConnectAsync(string)')
- [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string).md 'Guilded.GuildedBotClient.GuildedBotClient(string)')