
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')
## RolesUpdatedEvent.MemberRoleIds Property
The list of receiving/losing member and current roles.  
```csharp
public System.Collections.Generic.IList<Guilded.NET.Base.Teams.MemberRoles> MemberRoleIds { get; set; }
```

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[MemberRoles](MemberRoles 'Guilded.NET.Base.Teams.MemberRoles')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')
Member and role definition
### Remarks
The list of user and their current role list in IDs.



This returns users that lost roles, received roles or both.



If only updated users are needed, use [UpdatedUsers](RolesUpdatedEvent_UpdatedUsers 'Guilded.NET.Base.Events.RolesUpdatedEvent.UpdatedUsers') property.
