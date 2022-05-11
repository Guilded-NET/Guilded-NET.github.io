---
title: Users
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifiers of [the users](User 'Guilded.Base.Users.User') who received [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount')."
---

## XpAddedEvent.Users Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`XpAddedEvent`](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')

Gets the identifiers of [the users](User 'Guilded.Base.Users.User') who received [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').

```csharp
public System.Collections.Generic.IList<Guilded.Base.HashId> Users { get; }
```

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of user IDs

### See Also
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [Amount](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount')
- [FirstUser](XpAddedEvent.FirstUser 'Guilded.Base.Events.XpAddedEvent.FirstUser')
- [LastUser](XpAddedEvent.LastUser 'Guilded.Base.Events.XpAddedEvent.LastUser')