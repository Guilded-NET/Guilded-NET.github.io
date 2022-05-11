---
title: MemberRoleIds
layout: references
section: references
tags:
  - references
  - property
description: "

The list of receiving/losing member and current roles."
---

## RolesUpdatedEvent.MemberRoleIds Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`RolesUpdatedEvent`](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')

The list of receiving/losing member and current roles.

```csharp
public System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated> MemberRoleIds { get; }
```

### Remarks
  
The list of user and their current role list in IDs.  
  
This returns users that lost roles, received roles or both.  
  
If only updated users are needed, use [UpdatedUsers](RolesUpdatedEvent.UpdatedUsers.md 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers') property.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[RolesUpdated](RolesUpdatedEvent.RolesUpdated.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
Member and role definition