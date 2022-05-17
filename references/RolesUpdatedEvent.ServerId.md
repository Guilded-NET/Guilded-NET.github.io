---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the server where user's roles were given or removed."
---

## RolesUpdatedEvent.ServerId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')

Gets the identifier of the server where user's roles were given or removed.

```csharp
public Guilded.Base.HashId ServerId { get; }
```

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
Server ID

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds')
- [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers')