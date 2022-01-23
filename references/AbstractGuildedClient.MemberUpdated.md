---
title: MemberUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once a member gets updated.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```"
---

## AbstractGuildedClient.MemberUpdated Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once a member gets updated.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MemberUpdatedEvent> MemberUpdated { get; }
```

### Remarks
  
An event of the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from role update(see [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')).

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')