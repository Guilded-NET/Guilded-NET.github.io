---
title: PreparedEvent
layout: references
section: references
tags:
  - references
  - field
description: "

An event when the client is prepared.

```csharp
protected EventHandler? PreparedEvent;
```"
---

## AbstractGuildedClient.PreparedEvent Field
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event when the client is prepared.

```csharp
protected EventHandler? PreparedEvent;
```

### Remarks
  
An event that occurs once Guilded client has added finishing touches. You can use this as a signal [Prepared](AbstractGuildedClient.Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') ensures all client functions are properly working and can be used.  
  
As of now, this is called at the same time as [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') event.