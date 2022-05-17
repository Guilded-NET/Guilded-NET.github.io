---
title: Connected
layout: references
section: references
tags:
  - references
  - property
description: "

An event when the client gets connected."
---

## BaseGuildedClient.Connected Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

An event when the client gets connected.

```csharp
public IObservable<Guilded.Base.BaseGuildedClient> Connected { get; }
```

### Remarks
  
An event that occurs once Guilded client connects to Guilded.  
  
This usually occurs once [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.Base.BaseGuildedClient.ConnectAsync()') is called and no errors get thrown.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.Base.BaseGuildedClient.ConnectAsync()')
- [Disconnected](BaseGuildedClient.Disconnected 'Guilded.Base.BaseGuildedClient.Disconnected')