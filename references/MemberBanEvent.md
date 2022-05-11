---
title: MemberBanEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned."
---

## MemberBanEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.

```csharp
public class MemberBanEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberBanEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberBanEvent(HashId, MemberBan)](MemberBanEvent.MemberBanEvent(HashId,MemberBan).md 'Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId, Guilded.Base.Servers.MemberBan)') | Initializes a new instance of [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedAt](MemberBanEvent.CreatedAt.md 'Guilded.Base.Events.MemberBanEvent.CreatedAt') | Gets the date of when the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') was banned |
| [CreatedBy](MemberBanEvent.CreatedBy.md 'Guilded.Base.Events.MemberBanEvent.CreatedBy') | Gets the identifier of the staff who banned. |
| [MemberBan](MemberBanEvent.MemberBan.md 'Guilded.Base.Events.MemberBanEvent.MemberBan') | Gets the information about the member's ban. |
| [Reason](MemberBanEvent.Reason.md 'Guilded.Base.Events.MemberBanEvent.Reason') | Gets the reason why the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified. |
| [ServerId](MemberBanEvent.ServerId.md 'Guilded.Base.Events.MemberBanEvent.ServerId') | Gets the identifier of the server where member has been banned/unbanned. |
| [User](MemberBanEvent.User.md 'Guilded.Base.Events.MemberBanEvent.User') | Gets the banned user. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')