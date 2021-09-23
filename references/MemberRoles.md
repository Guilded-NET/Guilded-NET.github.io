
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams')
## MemberRoles Class
Defines a role list holder and their role list.  
```csharp
public class MemberRoles
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; MemberRoles  
### Remarks
Defines a receiving a role holder [UserId](MemberRoles_UserId 'Guilded.NET.Base.Teams.MemberRoles.UserId') and their current role list [RoleIds](MemberRoles_RoleIds 'Guilded.NET.Base.Teams.MemberRoles.RoleIds').  
Roles that were added or removed, or previous role list are not provided. If necessary, previous  
role list should be cached before-hand.

| Properties | |
| :--- | :--- |
| [RoleIds](MemberRoles_RoleIds 'Guilded.NET.Base.Teams.MemberRoles.RoleIds') | The list of roles [UserId](MemberRoles_UserId 'Guilded.NET.Base.Teams.MemberRoles.UserId') holds.<br/> |
| [UserId](MemberRoles_UserId 'Guilded.NET.Base.Teams.MemberRoles.UserId') | The identifier of the role holder.<br/> |
