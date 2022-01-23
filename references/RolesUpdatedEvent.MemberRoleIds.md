---
title: MemberRoleIds
layout: references
section: references
tags:
  - references
  - property
description: "

The list of receiving/losing member and current roles.

```csharp
public System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated> MemberRoleIds { get; }
```"
---

## RolesUpdatedEvent.MemberRoleIds Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')

The list of receiving/losing member and current roles.

```csharp
public System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated> MemberRoleIds { get; }
```

### Remarks
  
The list of user and their current role list in IDs.  
  
This returns users that lost roles, received roles or both.  
  
If only updated users are needed, use [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.NET.Base.Events.RolesUpdatedEvent.UpdatedUsers') property.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
Member and role definition