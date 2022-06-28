---
title: WebhookCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new webhook](Webhook 'Guilded.Base.Servers.Webhook') is created."
---

## AbstractGuildedClient.WebhookCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new webhook](Webhook 'Guilded.Base.Servers.Webhook') is created.

```csharp
public IObservable<Guilded.Base.Events.WebhookEvent> WebhookCreated { get; }
```

### Remarks
  
An event with the name `TeamWebhookCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')
- [MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.AbstractGuildedClient.MemberUpdated')
- [RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')
- [XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')
- [MemberRemoved](AbstractGuildedClient.MemberRemoved 'Guilded.AbstractGuildedClient.MemberRemoved')
- [MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')
- [MemberUnbanned](AbstractGuildedClient.MemberUnbanned 'Guilded.AbstractGuildedClient.MemberUnbanned')
- [WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')