---
title: MemberRemoved
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick')."
---

## AbstractGuildedClient.MemberRemoved Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick').

```csharp
public IObservable<Guilded.Base.Events.MemberRemovedEvent> MemberRemoved { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')