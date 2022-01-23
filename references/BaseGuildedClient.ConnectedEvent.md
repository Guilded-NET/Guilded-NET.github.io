---
title: ConnectedEvent
layout: references
section: references
tags:
  - references
  - field
description: "

An event when client is connected

```csharp
protected EventHandler? ConnectedEvent;
```"
---

## BaseGuildedClient.ConnectedEvent Field
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

An event when client is connected

```csharp
protected EventHandler? ConnectedEvent;
```

### Remarks
  
An event that occurs once Guilded client connects to Guilded.  
  
This usually occurs once [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') is called and no errors get thrown.

### See Also
- [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()')
- [Disconnected](BaseGuildedClient.Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected')