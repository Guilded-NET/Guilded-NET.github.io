---
title: RolesUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it."
---

## RolesUpdatedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it.

```csharp
public class RolesUpdatedEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; RolesUpdatedEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

### Remarks
  
This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

| Constructors | |
| :--- | :--- |
| [RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_).md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId, System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated>)') | Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds') | The list of receiving/losing member and current roles. |
| [ServerId](RolesUpdatedEvent.ServerId.md 'Guilded.Base.Events.RolesUpdatedEvent.ServerId') | The identifier of the server where roles were updated. |
| [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers.md 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers') | The array of updated users. |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')