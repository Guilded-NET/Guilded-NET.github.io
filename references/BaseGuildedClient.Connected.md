---
title: Connected
layout: references
section: references
tags:
  - references
  - event
description: "

An event when client is connected

```csharp
public event EventHandler Connected;
```"
---

## BaseGuildedClient.Connected Event
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

An event when client is connected

```csharp
public event EventHandler Connected;
```

### Remarks
  
An event that occurs once Guilded client connects to Guilded.  
  
This usually occurs once [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') is called and no errors get thrown.

#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')

### See Also
- [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()')
- [Disconnected](BaseGuildedClient.Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected')