---
title: RolesUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once someone receives or loses a role.

```csharp
public class RolesUpdatedEvent : Guilded.NET.Base.BaseObject
```"
---

## RolesUpdatedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once someone receives or loses a role.

```csharp
public class RolesUpdatedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; RolesUpdatedEvent

### Remarks
  
An event of the name `teamRolesUpdated` and opcode `0` that occurs once role holder either loses a role or receives it. This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

| Constructors | |
| :--- | :--- |
| [RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_) 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.NET.Base.HashId, System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated>)') | Creates a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.MemberRoleIds') | The list of receiving/losing member and current roles. |
| [ServerId](RolesUpdatedEvent.ServerId 'Guilded.NET.Base.Events.RolesUpdatedEvent.ServerId') | The identifier of the server where roles were updated. |
| [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.NET.Base.Events.RolesUpdatedEvent.UpdatedUsers') | The array of updated users. |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')