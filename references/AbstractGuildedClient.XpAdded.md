---
title: XpAdded
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once XP is given to a set of users.

```csharp
public System.IObservable<Guilded.NET.Base.Events.XpAddedEvent> XpAdded { get; }
```"
---

## AbstractGuildedClient.XpAdded Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once XP is given to a set of users.

```csharp
public System.IObservable<Guilded.NET.Base.Events.XpAddedEvent> XpAdded { get; }
```

### Remarks
  
An event of the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users 'Guilded.NET.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user. [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') can only occur in teams and tournaments.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')