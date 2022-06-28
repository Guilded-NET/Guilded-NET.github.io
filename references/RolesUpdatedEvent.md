---
title: RolesUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives a role or loses it."
---

## RolesUpdatedEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives a role or loses it.

```csharp
public class RolesUpdatedEvent : Guilded.Base.BaseModel,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; RolesUpdatedEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

### Remarks
  
This event does not give a list of lost/received events or give a previous role list, so previous role list must be cached, if necessary.

| Constructors | |
| :--- | :--- |
| [RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_) 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId, System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated>)') | Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds') | Gets the list of receiving/losing member and current roles. |
| [ServerId](RolesUpdatedEvent.ServerId 'Guilded.Base.Events.RolesUpdatedEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where user's roles were given or removed. |
| [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers') | Gets the array of updated users that either lost or received roles. |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [Member](Member 'Guilded.Base.Servers.Member')