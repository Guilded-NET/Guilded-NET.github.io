---
title: Disconnected
layout: references
section: references
tags:
  - references
  - event
description: "

An event when client gets disconnected

```csharp
public event EventHandler Disconnected;
```"
---

## BaseGuildedClient.Disconnected Event
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

An event when client gets disconnected

```csharp
public event EventHandler Disconnected;
```

### Remarks
  
An event that occurs once Guilded client disconnects from Guilded.  
  
This usually occurs once [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') is called and no errors get thrown.

#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')

### See Also
- [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()')
- [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')