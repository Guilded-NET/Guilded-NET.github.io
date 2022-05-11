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
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

An event when client gets reconnected.

```csharp
public IObservable<Websocket.Client.Models.ReconnectionInfo> Reconnected { get; }
```

### Remarks
  
An event that occurs once Guilded client reconnects to Guilded.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [Disconnected](BaseGuildedClient.Disconnected.md 'Guilded.Base.BaseGuildedClient.Disconnected')
- [Connected](BaseGuildedClient.Connected.md 'Guilded.Base.BaseGuildedClient.Connected')