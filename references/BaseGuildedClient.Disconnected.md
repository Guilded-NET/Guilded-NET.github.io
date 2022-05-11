---
title: Disconnected
layout: references
section: references
tags:
  - references
  - property
description: "

An event when the client gets disconnected."
---

## BaseGuildedClient.Disconnected Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

An event when the client gets disconnected.

```csharp
public IObservable<Websocket.Client.DisconnectionInfo> Disconnected { get; }
```

### Remarks
  
An event that occurs once Guilded client disconnects from Guilded.  
  
This usually occurs once [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.Base.BaseGuildedClient.DisconnectAsync()') is called and no errors get thrown, or once an error occurs.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.Base.BaseGuildedClient.DisconnectAsync()')
- [Connected](BaseGuildedClient.Connected 'Guilded.Base.BaseGuildedClient.Connected')