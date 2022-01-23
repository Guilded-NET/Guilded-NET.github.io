---
title: DisconnectedEvent
layout: references
section: references
tags:
  - references
  - field
description: "

An event when client gets disconnected

```csharp
protected EventHandler? DisconnectedEvent;
```"
---

## BaseGuildedClient.DisconnectedEvent Field
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

An event when client gets disconnected

```csharp
protected EventHandler? DisconnectedEvent;
```

### Remarks
  
An event that occurs once Guilded client disconnects from Guilded.  
  
This usually occurs once [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') is called and no errors get thrown.

### See Also
- [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()')
- [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')