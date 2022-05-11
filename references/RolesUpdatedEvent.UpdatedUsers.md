---
title: UpdatedUsers
layout: references
section: references
tags:
  - references
  - property
description: "

The array of updated users."
---

## RolesUpdatedEvent.UpdatedUsers Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')

The array of updated users.

```csharp
public Guilded.Base.HashId[] UpdatedUsers { get; }
```

### Remarks
  
Returns the array of members that had their role list updated either by losing or receiving roles.  
  
This property goes through [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds') and selects user IDs.

#### Property Value
[HashId](HashId.md 'Guilded.Base.HashId')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')