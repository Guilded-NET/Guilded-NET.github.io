---
title: MemberRoleIds
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of receiving/losing member and current roles."
---

## RolesUpdatedEvent.MemberRoleIds Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')

Gets the list of receiving/losing member and current roles.

```csharp
public System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated> MemberRoleIds { get; }
```

### Remarks
  
If only updated users are needed, use [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers') property.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
Member and role definition

### See Also
- [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')
- [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers')
- [ServerId](RolesUpdatedEvent.ServerId 'Guilded.Base.Events.RolesUpdatedEvent.ServerId')