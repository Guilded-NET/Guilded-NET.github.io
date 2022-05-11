---
title: ConnectedSubject
layout: references
section: references
tags:
  - references
  - field
description: "

An event when the client gets connected."
---

## BaseGuildedClient.ConnectedSubject Field
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

An event when the client gets connected.

```csharp
protected Subject<BaseGuildedClient> ConnectedSubject;
```

### Remarks
  
An event that occurs once Guilded client connects to Guilded.  
  
This usually occurs once [ConnectAsync()](BaseGuildedClient.ConnectAsync().md 'Guilded.Base.BaseGuildedClient.ConnectAsync()') is called and no errors get thrown.

### See Also
- [ConnectAsync()](BaseGuildedClient.ConnectAsync().md 'Guilded.Base.BaseGuildedClient.ConnectAsync()')
- [Disconnected](BaseGuildedClient.Disconnected.md 'Guilded.Base.BaseGuildedClient.Disconnected')