---
title: Reconnected
layout: references
section: references
tags:
  - references
  - property
description: "

An event when client gets reconnected."
---

## BaseGuildedClient.Reconnected Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

An event when client gets reconnected.

```csharp
public IObservable<Websocket.Client.Models.ReconnectionInfo> Reconnected { get; }
```

### Remarks
  
An event that occurs once Guilded client reconnects to Guilded.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Disconnected](BaseGuildedClient.Disconnected 'Guilded.Base.BaseGuildedClient.Disconnected')
- [Connected](BaseGuildedClient.Connected 'Guilded.Base.BaseGuildedClient.Connected')