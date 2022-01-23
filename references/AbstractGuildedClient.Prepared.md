---
title: Prepared
layout: references
section: references
tags:
  - references
  - event
description: "

An event when the client is prepared.

```csharp
public event EventHandler Prepared;
```"
---

## AbstractGuildedClient.Prepared Event
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event when the client is prepared.

```csharp
public event EventHandler Prepared;
```

### Remarks
  
An event that occurs once Guilded client has added finishing touches. You can use this as a signal [Prepared](AbstractGuildedClient.Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') ensures all client functions are properly working and can be used.  
  
As of now, this is called at the same time as [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') event.

#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')