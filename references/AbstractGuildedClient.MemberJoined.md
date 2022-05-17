---
title: MemberJoined
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId 'Guilded.Base.Events.MemberJoinedEvent.ServerId')."
---

## AbstractGuildedClient.MemberJoined Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId 'Guilded.Base.Events.MemberJoinedEvent.ServerId').

```csharp
public IObservable<Guilded.Base.Events.MemberJoinedEvent> MemberJoined { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')
- [Member](Member 'Guilded.Base.Servers.Member')