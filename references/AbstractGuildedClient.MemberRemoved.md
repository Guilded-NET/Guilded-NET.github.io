---
title: MemberRemoved
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick')."
---

## AbstractGuildedClient.MemberRemoved Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick').

```csharp
public IObservable<Guilded.Base.Events.MemberRemovedEvent> MemberRemoved { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent')
- [Member](Member 'Guilded.Base.Servers.Member')