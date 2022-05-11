---
title: MemberJoined
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId')."
---

## AbstractGuildedClient.MemberJoined Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId').

```csharp
public IObservable<Guilded.Base.Events.MemberJoinedEvent> MemberJoined { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')