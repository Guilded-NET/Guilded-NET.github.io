---
title: MemberBanEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned."
---

## MemberBanEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.

```csharp
public class MemberBanEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; MemberBanEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberBanEvent(HashId, MemberBan)](MemberBanEvent.MemberBanEvent(HashId,MemberBan) 'Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId, Guilded.Base.Servers.MemberBan)') | Initializes a new instance of [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedAt](MemberBanEvent.CreatedAt 'Guilded.Base.Events.MemberBanEvent.CreatedAt') | Gets the date when the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') was banned |
| [CreatedBy](MemberBanEvent.CreatedBy 'Guilded.Base.Events.MemberBanEvent.CreatedBy') | Gets the identifier of the staff who banned. |
| [MemberBan](MemberBanEvent.MemberBan 'Guilded.Base.Events.MemberBanEvent.MemberBan') | Gets the information about the member's ban. |
| [Reason](MemberBanEvent.Reason 'Guilded.Base.Events.MemberBanEvent.Reason') | Gets the reason why the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified. |
| [ServerId](MemberBanEvent.ServerId 'Guilded.Base.Events.MemberBanEvent.ServerId') | Gets the identifier of the server where member has been banned/unbanned. |
| [User](MemberBanEvent.User 'Guilded.Base.Events.MemberBanEvent.User') | Gets the banned user. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')
- [Member](Member 'Guilded.Base.Servers.Member')