---
title: MemberUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

An event that occurs once a member gets updated.

```csharp
public class MemberUpdatedEvent : Guilded.NET.Base.BaseObject
```"
---

## MemberUpdatedEvent Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Events`](Guilded.NET.Base.Events 'Guilded.NET.Base.Events')

An event that occurs once a member gets updated.

```csharp
public class MemberUpdatedEvent : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; MemberUpdatedEvent

### Remarks
  
An event of the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from role update(see [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')).

| Constructors | |
| :--- | :--- |
| [MemberUpdatedEvent(HashId, Member)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,Member) 'Guilded.NET.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.NET.Base.HashId, Guilded.NET.Base.Servers.Member)') | Creates a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [MemberId](MemberUpdatedEvent.MemberId 'Guilded.NET.Base.Events.MemberUpdatedEvent.MemberId') | The identifier of the member. |
| [ServerId](MemberUpdatedEvent.ServerId 'Guilded.NET.Base.Events.MemberUpdatedEvent.ServerId') | The identifier of the server where member was updated. |
| [UserInfo](MemberUpdatedEvent.UserInfo 'Guilded.NET.Base.Events.MemberUpdatedEvent.UserInfo') | The info about updated member. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')