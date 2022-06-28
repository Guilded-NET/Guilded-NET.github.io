---
title: MemberRemoved
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server'), gets kicked or gets banned from [a server](Server 'Guilded.Base.Servers.Server')."
---

## AbstractGuildedClient.MemberRemoved Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server'), gets kicked or gets banned from [a server](Server 'Guilded.Base.Servers.Server').

```csharp
public IObservable<Guilded.Base.Events.MemberRemovedEvent> MemberRemoved { get; }
```

### Remarks
  
An event with the name `TeamMemberRemoved` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')
- [MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.AbstractGuildedClient.MemberUpdated')
- [RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')
- [XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')
- [MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')
- [MemberUnbanned](AbstractGuildedClient.MemberUnbanned 'Guilded.AbstractGuildedClient.MemberUnbanned')
- [WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')