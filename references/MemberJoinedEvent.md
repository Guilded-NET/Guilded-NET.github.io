---
title: MemberJoinedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId')."
---

## MemberJoinedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId').

```csharp
public class MemberJoinedEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberJoinedEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberJoinedEvent(HashId, Member)](MemberJoinedEvent.MemberJoinedEvent(HashId,Member).md 'Guilded.Base.Events.MemberJoinedEvent.MemberJoinedEvent(Guilded.Base.HashId, Guilded.Base.Servers.Member)') | Initializes a new instance of [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [IsBot](MemberJoinedEvent.IsBot.md 'Guilded.Base.Events.MemberJoinedEvent.IsBot') | Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [JoinedAt](MemberJoinedEvent.JoinedAt.md 'Guilded.Base.Events.MemberJoinedEvent.JoinedAt') | Gets the date of when the member joined. |
| [Member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') | Gets the member who has joined. |
| [Name](MemberJoinedEvent.Name.md 'Guilded.Base.Events.MemberJoinedEvent.Name') | Gets the global username of the user. |
| [ServerId](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId') | Gets the identifier of the server where the member has joined. |
| [Type](MemberJoinedEvent.Type.md 'Guilded.Base.Events.MemberJoinedEvent.Type') | Gets the type of the user they are. |
| [UserId](MemberJoinedEvent.UserId.md 'Guilded.Base.Events.MemberJoinedEvent.UserId') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User'). |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')