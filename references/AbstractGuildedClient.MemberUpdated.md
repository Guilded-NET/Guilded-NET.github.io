---
title: MemberUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')."
---

## AbstractGuildedClient.MemberUpdated Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent').

```csharp
public IObservable<Guilded.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')