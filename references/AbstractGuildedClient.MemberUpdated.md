---
title: MemberUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when server-wide profile of [a member](Member 'Guilded.Base.Servers.Member') gets changed."
---

## AbstractGuildedClient.MemberUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when server-wide profile of [a member](Member 'Guilded.Base.Servers.Member') gets changed.

```csharp
public IObservable<Guilded.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```

### Remarks
  
An event with the name `TeamMemberUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')
- [RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')
- [XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')
- [MemberRemoved](AbstractGuildedClient.MemberRemoved 'Guilded.AbstractGuildedClient.MemberRemoved')
- [MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')
- [MemberUnbanned](AbstractGuildedClient.MemberUnbanned 'Guilded.AbstractGuildedClient.MemberUnbanned')
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')