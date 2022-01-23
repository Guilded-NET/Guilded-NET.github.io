---
title: RolesUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once someone receives or loses a role.

```csharp
public System.IObservable<Guilded.NET.Base.Events.RolesUpdatedEvent> RolesUpdated { get; }
```"
---

## AbstractGuildedClient.RolesUpdated Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once someone receives or loses a role.

```csharp
public System.IObservable<Guilded.NET.Base.Events.RolesUpdatedEvent> RolesUpdated { get; }
```

### Remarks
  
An event of the name `teamRolesUpdated` and opcode `0` that occurs once role holder either loses a role or receives it. This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')