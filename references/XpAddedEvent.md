---
title: XpAddedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount')."
---

## XpAddedEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').

```csharp
public class XpAddedEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; XpAddedEvent

| Constructors | |
| :--- | :--- |
| [XpAddedEvent(IList&lt;HashId&gt;, long)](XpAddedEvent.XpAddedEvent(IList_HashId_,long) 'Guilded.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.IList<Guilded.Base.HashId>, long)') | Initializes a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Amount](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount') | Gets the amount of XP given to the [users](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users'). |
| [FirstUser](XpAddedEvent.FirstUser 'Guilded.Base.Events.XpAddedEvent.FirstUser') | Gets the first XP receiving [user](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users'). |
| [LastUser](XpAddedEvent.LastUser 'Guilded.Base.Events.XpAddedEvent.LastUser') | Gets the last XP receiving [user](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users'). |
| [Users](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users') | Gets the identifiers of [the users](User 'Guilded.Base.Users.User') who received [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount'). |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [Member](Member 'Guilded.Base.Servers.Member')