---
title: RolesUpdated
layout: references
section: references
tags:
  - references
  - class
description: "

Defines a role list holder and their role list.

```csharp
public class RolesUpdatedEvent.RolesUpdated
```"
---

## RolesUpdatedEvent.RolesUpdated Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')

Defines a role list holder and their role list.

```csharp
public class RolesUpdatedEvent.RolesUpdated
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; RolesUpdated

### Remarks
  
Defines a receiving a role holder [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') and their current role list [RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds'). Roles that were added or removed, or previous role list are not provided. If necessary, previous role list should be cached before-hand.

| Constructors | |
| :--- | :--- |
| [RolesUpdated(HashId, IList&lt;uint&gt;)](RolesUpdatedEvent.RolesUpdated.RolesUpdated(HashId,IList_uint_) 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.NET.Base.HashId, System.Collections.Generic.IList<uint>)') | Creates a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated'). This is currently only used in deserialization. |

| Properties | |
| :--- | :--- |
| [RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') | The list of roles [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds. |
| [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') | The identifier of the role holder. |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')
- [Member](Member 'Guilded.NET.Base.Servers.Member')