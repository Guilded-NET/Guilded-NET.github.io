---
title: XpAddedEvent(ISet<HashId>, long)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent'). This is currently only used in deserialization.

```csharp
public XpAddedEvent(System.Collections.Generic.ISet<Guilded.NET.Base.HashId> userIds, long amount);
```"
---

## XpAddedEvent(ISet<HashId>, long) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')

Creates a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent'). This is currently only used in deserialization.

```csharp
public XpAddedEvent(System.Collections.Generic.ISet<Guilded.NET.Base.HashId> userIds, long amount);
```
#### Parameters

<a name='Guilded.NET.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.ISet_Guilded.NET.Base.HashId_,long).userIds'></a>

`userIds` [System.Collections.Generic.ISet&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')

The identifiers of users who received XP

<a name='Guilded.NET.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.ISet_Guilded.NET.Base.HashId_,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP given to the users