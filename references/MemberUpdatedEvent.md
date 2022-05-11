---
title: MemberUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')."
---

## MemberUpdatedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent').

```csharp
public class MemberUpdatedEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; MemberUpdatedEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberUpdatedEvent(HashId, MemberUpdate)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,MemberUpdate) 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId, Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate)') | Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ServerId](MemberUpdatedEvent.ServerId 'Guilded.Base.Events.MemberUpdatedEvent.ServerId') | The identifier of the server where the [member](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') has been updated. |
| [UserId](MemberUpdatedEvent.UserId 'Guilded.Base.Events.MemberUpdatedEvent.UserId') | Gets the identifier of the [member](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo'). |
| [UserInfo](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') | Gets the properties that have been updated in the member. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')
- [Member](Member 'Guilded.Base.Servers.Member')