
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams').[MemberRoles](MemberRoles 'Guilded.NET.Base.Teams.MemberRoles')
## MemberRoles.RoleIds Property
The list of roles [UserId](MemberRoles_UserId 'Guilded.NET.Base.Teams.MemberRoles.UserId') holds.  
```csharp
public System.Collections.Generic.IList<uint> RoleIds { get; set; }
```

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')
List of role IDs
### Remarks
The list of roles that [UserId](MemberRoles_UserId 'Guilded.NET.Base.Teams.MemberRoles.UserId') is currently holding.



Received or removed roles are not provided, so caching of previous  
role list is necessary if previous role list is needed.
