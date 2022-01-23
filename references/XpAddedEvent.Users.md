---
title: Users
layout: references
section: references
tags:
  - references
  - property
description: "

The identifiers of users who received XP.

```csharp
public System.Collections.Generic.ISet<Guilded.NET.Base.HashId> Users { get; }
```"
---

## XpAddedEvent.Users Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')

The identifiers of users who received XP.

```csharp
public System.Collections.Generic.ISet<Guilded.NET.Base.HashId> Users { get; }
```

### Remarks
  
This contains a set of users that were given [Amount](XpAddedEvent.Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') amount of XP.  
  
The set can contain more than one member.

#### Property Value
[System.Collections.Generic.ISet&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.ISet-1 'System.Collections.Generic.ISet`1')  
List of user IDs