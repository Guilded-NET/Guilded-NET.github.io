---
title: MemberRemovedEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick')."
---

## MemberRemovedEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick').

```csharp
public class MemberRemovedEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberRemovedEvent

Implements [IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [MemberRemovedEvent(HashId, HashId, bool, bool)](MemberRemovedEvent.MemberRemovedEvent(HashId,HashId,bool,bool).md 'Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId, Guilded.Base.HashId, bool, bool)') | Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [IsBan](MemberRemovedEvent.IsBan.md 'Guilded.Base.Events.MemberRemovedEvent.IsBan') | Gets whether the user has been banned. |
| [IsKick](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick') | Gets whether the user has been kicked. |
| [ServerId](MemberRemovedEvent.ServerId.md 'Guilded.Base.Events.MemberRemovedEvent.ServerId') | Gets the identifier of the server where the member has been kicked or has left. |
| [UserId](MemberRemovedEvent.UserId.md 'Guilded.Base.Events.MemberRemovedEvent.UserId') | Gets the identifier of the member who has been kicked or has left. |

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')
- [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')
- [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')