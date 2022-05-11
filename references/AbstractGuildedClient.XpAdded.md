---
title: XpAdded
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user."
---

## AbstractGuildedClient.XpAdded Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user.

```csharp
public IObservable<Guilded.Base.Events.XpAddedEvent> XpAdded { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')