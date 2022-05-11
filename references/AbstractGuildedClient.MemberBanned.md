---
title: MemberBanned
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned."
---

## AbstractGuildedClient.MemberBanned Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.

```csharp
public IObservable<Guilded.Base.Events.MemberBanEvent> MemberBanned { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')