---
title: MemberUnbanned
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [user](User 'Guilded.Base.Users.User') gets unbanned in [a server](Server 'Guilded.Base.Servers.Server')."
---

## AbstractGuildedClient.MemberUnbanned Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [user](User 'Guilded.Base.Users.User') gets unbanned in [a server](Server 'Guilded.Base.Servers.Server').

```csharp
public IObservable<Guilded.Base.Events.MemberBanEvent> MemberUnbanned { get; }
```

### Remarks
  
An event with the name `TeamMemberUnbanned` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')
- [MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.AbstractGuildedClient.MemberUpdated')
- [RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')
- [XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')
- [MemberRemoved](AbstractGuildedClient.MemberRemoved 'Guilded.AbstractGuildedClient.MemberRemoved')
- [MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')