---
title: MemberUpdatedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')."
---

## MemberUpdatedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent').

```csharp
public class MemberUpdatedEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberUpdatedEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberUpdatedEvent(HashId, MemberUpdate)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,MemberUpdate).md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId, Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate)') | Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ServerId](MemberUpdatedEvent.ServerId.md 'Guilded.Base.Events.MemberUpdatedEvent.ServerId') | The identifier of the server where the [member](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') has been updated. |
| [UserId](MemberUpdatedEvent.UserId.md 'Guilded.Base.Events.MemberUpdatedEvent.UserId') | Gets the identifier of the [member](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo'). |
| [UserInfo](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') | Gets the properties that have been updated in the member. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')