---
title: ConnectAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Connects to Guilded using defined auth."
---

## GuildedBotClient.ConnectAsync() Method
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient.md 'Guilded.GuildedBotClient')

Connects to Guilded using defined auth.

```csharp
public override System.Threading.Tasks.Task ConnectAsync();
```

### Remarks
  
Creates a new connection to Guilded using set property [AuthToken](GuildedBotClient.AuthToken.md 'Guilded.GuildedBotClient.AuthToken') as an authentication token.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')

### See Also
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string).md 'Guilded.GuildedBotClient.ConnectAsync(string)')
- [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string).md 'Guilded.GuildedBotClient.GuildedBotClient(string)')
- [DisconnectAsync()](AbstractGuildedClient.DisconnectAsync().md 'Guilded.AbstractGuildedClient.DisconnectAsync()')