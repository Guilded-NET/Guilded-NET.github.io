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
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')

Represents the properties that have been updated in the member.

```csharp
public class MemberUpdatedEvent.MemberUpdate : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; MemberUpdate

| Constructors | |
| :--- | :--- |
| [MemberUpdate(HashId, string)](MemberUpdatedEvent.MemberUpdate.MemberUpdate(HashId,string).md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.MemberUpdate(Guilded.Base.HashId, string)') | Initializes a new instance of [MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [Id](MemberUpdatedEvent.MemberUpdate.Id.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Id') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User'). |
| [Nickname](MemberUpdatedEvent.MemberUpdate.Nickname.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Nickname') | Gets the set nickname of the user in the server. |

### See Also
- [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')
- [MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')
- [User](User.md 'Guilded.Base.Users.User')
- [Member](Member.md 'Guilded.Base.Servers.Member')