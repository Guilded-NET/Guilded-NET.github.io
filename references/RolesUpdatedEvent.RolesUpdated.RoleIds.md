---
title: RoleIds
layout: references
section: references
tags:
  - references
  - property
description: "

The list of roles [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds.

```csharp
public System.Collections.Generic.IList<uint> RoleIds { get; }
```"
---

## RolesUpdatedEvent.RolesUpdated.RoleIds Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdated`](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')

The list of roles [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds.

```csharp
public System.Collections.Generic.IList<uint> RoleIds { get; }
```

### Remarks
  
The list of roles that [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding.  
  
Received or removed roles are not provided, so caching of previou role list is necessary if previous role list is needed.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of role IDs