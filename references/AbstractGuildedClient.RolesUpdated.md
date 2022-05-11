---
title: RolesUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it."
---

## AbstractGuildedClient.RolesUpdated Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it.

```csharp
public IObservable<Guilded.Base.Events.RolesUpdatedEvent> RolesUpdated { get; }
```

### Remarks
  
This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')