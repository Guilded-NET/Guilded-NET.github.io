---
title: ConnectAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Connects this client to Guilded.

```csharp
public override System.Threading.Tasks.Task ConnectAsync();
```"
---

## AbstractGuildedClient.ConnectAsync() Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Connects this client to Guilded.

```csharp
public override System.Threading.Tasks.Task ConnectAsync();
```

### Remarks
  
Connects to Guilded and starts Guilded's WebSocket.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')

### See Also
- [DisconnectAsync()](AbstractGuildedClient.DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()')
- [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')