---
title: MemberUpdate
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the properties that have been updated in the member."
---

## MemberUpdatedEvent.MemberUpdate Class
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')

Represents the properties that have been updated in the member.

```csharp
public class MemberUpdatedEvent.MemberUpdate : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; MemberUpdate

| Constructors | |
| :--- | :--- |
| [MemberUpdate(HashId, string)](MemberUpdatedEvent.MemberUpdate.MemberUpdate(HashId,string) 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.MemberUpdate(Guilded.Base.HashId, string)') | Initializes a new instance of [MemberUpdate](MemberUpdatedEvent.MemberUpdate 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Id](MemberUpdatedEvent.MemberUpdate.Id 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Id') | Gets the identifier of [user](User 'Guilded.Base.Users.User'). |
| [Nickname](MemberUpdatedEvent.MemberUpdate.Nickname 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Nickname') | Gets the set nickname of [the user](User 'Guilded.Base.Users.User') in the server. |

### See Also
- [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')
- [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')
- [User](User 'Guilded.Base.Users.User')
- [Member](Member 'Guilded.Base.Servers.Member')