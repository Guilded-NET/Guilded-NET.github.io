---
title: XpAddedEvent(IList<HashId>, long)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent') from the specified JSON properties."
---

## XpAddedEvent(IList<HashId>, long) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')

Initializes a new instance of [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent') from the specified JSON properties.

```csharp
public XpAddedEvent(System.Collections.Generic.IList<Guilded.Base.HashId> userIds, long amount);
```
#### Parameters

<a name='Guilded.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.IList_Guilded.Base.HashId_,long).userIds'></a>

`userIds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The identifiers of the users who received [XP](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount')

<a name='Guilded.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.IList_Guilded.Base.HashId_,long).amount'></a>

`amount` [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')

The amount of XP given to the [users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users')