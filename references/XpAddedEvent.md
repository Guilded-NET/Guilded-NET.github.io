---
title: XpAddedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once XP is given to a set of users.

```csharp
public class XpAddedEvent : Guilded.NET.Base.BaseObject
```"
---

## XpAddedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once XP is given to a set of users.

```csharp
public class XpAddedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; XpAddedEvent

### Remarks
  
An event of the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users 'Guilded.NET.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user. [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') can only occur in teams and tournaments.

| Constructors | |
| :--- | :--- |
| [XpAddedEvent(ISet&lt;HashId&gt;, long)](XpAddedEvent.XpAddedEvent(ISet_HashId_,long) 'Guilded.NET.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.ISet<Guilded.NET.Base.HashId>, long)') | Creates a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [Amount](XpAddedEvent.Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') | The amount of XP given to the users. |
| [FirstUser](XpAddedEvent.FirstUser 'Guilded.NET.Base.Events.XpAddedEvent.FirstUser') | Gets the first XP receiving user. |
| [LastUser](XpAddedEvent.LastUser 'Guilded.NET.Base.Events.XpAddedEvent.LastUser') | Gets the last XP receiving user. |
| [Users](XpAddedEvent.Users 'Guilded.NET.Base.Events.XpAddedEvent.Users') | The identifiers of users who received XP. |

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')