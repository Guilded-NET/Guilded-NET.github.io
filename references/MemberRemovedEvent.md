---
title: MemberRemovedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server') or gets removed from it."
---

## MemberRemovedEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server') or gets removed from it.

```csharp
public class MemberRemovedEvent : Guilded.Base.BaseModel,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MemberRemovedEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberRemovedEvent(HashId, HashId, bool, bool)](MemberRemovedEvent.MemberRemovedEvent(HashId,HashId,bool,bool) 'Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId, Guilded.Base.HashId, bool, bool)') | Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [IsBan](MemberRemovedEvent.IsBan 'Guilded.Base.Events.MemberRemovedEvent.IsBan') | Gets whether [the user](User 'Guilded.Base.Users.User') has been banned. |
| [IsKick](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick') | Gets whether [the user](User 'Guilded.Base.Users.User') has been kicked. |
| [ServerId](MemberRemovedEvent.ServerId 'Guilded.Base.Events.MemberRemovedEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the member has been kicked or has left. |
| [UserId](MemberRemovedEvent.UserId 'Guilded.Base.Events.MemberRemovedEvent.UserId') | Gets the identifier of the member who has been kicked or has left. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent')
- [Member](Member 'Guilded.Base.Servers.Member')