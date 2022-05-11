---
title: RoleIds
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of roles that [member](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding."
---

## RolesUpdatedEvent.RolesUpdated.RoleIds Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdated`](RolesUpdatedEvent.RolesUpdated.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')

Gets the list of roles that [member](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding.

```csharp
public System.Collections.Generic.IList<uint> RoleIds { get; }
```

### Remarks
  
Received or removed roles are not provided, so caching of previous role list is necessary if previous role list is needed.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of role IDs