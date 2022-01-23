---
title: UpdatedUsers
layout: references
section: references
tags:
  - references
  - property
description: "

The array of updated users.

```csharp
public Guilded.NET.Base.HashId[] UpdatedUsers { get; }
```"
---

## RolesUpdatedEvent.UpdatedUsers Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')

The array of updated users.

```csharp
public Guilded.NET.Base.HashId[] UpdatedUsers { get; }
```

### Remarks
  
Returns the array of members that had their role list updated either by losing or receiving roles.  
  
This property goes through [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.MemberRoleIds') and selects user IDs.

#### Property Value
[HashId](HashId 'Guilded.NET.Base.HashId')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')