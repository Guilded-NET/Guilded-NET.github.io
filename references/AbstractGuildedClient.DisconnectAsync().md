---
title: DisconnectAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Disconnects this client from Guilded.

```csharp
public override System.Threading.Tasks.Task DisconnectAsync();
```"
---

## AbstractGuildedClient.DisconnectAsync() Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Disconnects this client from Guilded.

```csharp
public override System.Threading.Tasks.Task DisconnectAsync();
```

### Remarks
  
The method that stops Guilded WebSocket.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')

### See Also
- [ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.NET.AbstractGuildedClient.ConnectAsync()')
- [Dispose()](AbstractGuildedClient.Dispose() 'Guilded.NET.AbstractGuildedClient.Dispose()')
- [ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')
- [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')