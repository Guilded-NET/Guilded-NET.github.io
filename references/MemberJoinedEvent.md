---
title: MemberJoinedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs once [a member](Member 'Guilded.Base.Servers.Member') joins [a server](Server 'Guilded.Base.Servers.Server')."
---

## MemberJoinedEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs once [a member](Member 'Guilded.Base.Servers.Member') joins [a server](Server 'Guilded.Base.Servers.Server').

```csharp
public class MemberJoinedEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MemberJoinedEvent

| Constructors | |
| :--- | :--- |
| [MemberJoinedEvent(HashId, Member)](MemberJoinedEvent.MemberJoinedEvent(HashId,Member) 'Guilded.Base.Events.MemberJoinedEvent.MemberJoinedEvent(Guilded.Base.HashId, Guilded.Base.Servers.Member)') | Initializes a new instance of [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [IsBot](MemberJoinedEvent.IsBot 'Guilded.Base.Events.MemberJoinedEvent.IsBot') | Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [JoinedAt](MemberJoinedEvent.JoinedAt 'Guilded.Base.Events.MemberJoinedEvent.JoinedAt') | Gets the date when [the member](Member 'Guilded.Base.Servers.Member') joined. |
| [Member](MemberJoinedEvent.Member 'Guilded.Base.Events.MemberJoinedEvent.Member') | Gets the member who has joined. |
| [Name](MemberJoinedEvent.Name 'Guilded.Base.Events.MemberJoinedEvent.Name') | Gets the global username of [the user](User 'Guilded.Base.Users.User'). |
| [ServerId](MemberJoinedEvent.ServerId 'Guilded.Base.Events.MemberJoinedEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the member has joined. |
| [Type](MemberJoinedEvent.Type 'Guilded.Base.Events.MemberJoinedEvent.Type') | Gets the type of [the user](User 'Guilded.Base.Users.User') they are. |
| [UserId](MemberJoinedEvent.UserId 'Guilded.Base.Events.MemberJoinedEvent.UserId') | Gets the identifier of [user](User 'Guilded.Base.Users.User'). |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')
- [Member](Member 'Guilded.Base.Servers.Member')