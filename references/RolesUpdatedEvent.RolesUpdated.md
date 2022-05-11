---
title: RolesUpdated
layout: references
section: references
tags:
  - references
  - class
description: "

Defines a role list holder and their role list."
---

## RolesUpdatedEvent.RolesUpdated Class
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')

Defines a role list holder and their role list.

```csharp
public class RolesUpdatedEvent.RolesUpdated
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; RolesUpdated

### Remarks
  
Defines a receiving a role holder [UserId](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') and their current role list [RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds'). Roles that were added or removed, or previous role list are not provided. If necessary, previous role list should be cached before-hand.

| Constructors | |
| :--- | :--- |
| [RolesUpdated(HashId, IList&lt;uint&gt;)](RolesUpdatedEvent.RolesUpdated.RolesUpdated(HashId,IList_uint_).md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.Base.HashId, System.Collections.Generic.IList<uint>)') | Initializes a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') | Gets the list of roles that [member](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding. |
| [UserId](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that lost or received [roles](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds'). |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')
- [Member](Member.md 'Guilded.Base.Servers.Member')