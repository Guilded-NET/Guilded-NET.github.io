
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Teams](index#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams')
## Group Class
Represents Guilded team group/subserver.  
```csharp
public class Group : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; Group  

Derived  
&#8627; [Tournament](Tournament 'Guilded.NET.Base.Teams.Tournament')  

| Properties | |
| :--- | :--- |
| [AdditionalMembershipRoles](Group_AdditionalMembershipRoles 'Guilded.NET.Base.Teams.Group.AdditionalMembershipRoles') | Additional roles which have a membership to this group.<br/> |
| [AdditionalVisibilityRoles](Group_AdditionalVisibilityRoles 'Guilded.NET.Base.Teams.Group.AdditionalVisibilityRoles') | Additional roles which can see this group.<br/> |
| [ArchivedAt](Group_ArchivedAt 'Guilded.NET.Base.Teams.Group.ArchivedAt') | When the group was archived.<br/> |
| [ArchivedBy](Group_ArchivedBy 'Guilded.NET.Base.Teams.Group.ArchivedBy') | ID of the user who archived this group.<br/> |
| [Avatar](Group_Avatar 'Guilded.NET.Base.Teams.Group.Avatar') | Icon of this group.<br/> |
| [Banner](Group_Banner 'Guilded.NET.Base.Teams.Group.Banner') | Banner of this group. Currently unused by Guilded. Potential feature?<br/> |
| [CreatedAt](Group_CreatedAt 'Guilded.NET.Base.Teams.Group.CreatedAt') | When the group was created.<br/> |
| [CreatedBy](Group_CreatedBy 'Guilded.NET.Base.Teams.Group.CreatedBy') | ID of the user who created this group.<br/> |
| [DeletedAt](Group_DeletedAt 'Guilded.NET.Base.Teams.Group.DeletedAt') | When the group was deleted.<br/> |
| [Description](Group_Description 'Guilded.NET.Base.Teams.Group.Description') | A description of a team.<br/> |
| [GameId](Group_GameId 'Guilded.NET.Base.Teams.Group.GameId') | ID of the game in this group.<br/> |
| [Id](Group_Id 'Guilded.NET.Base.Teams.Group.Id') | ID of this group.<br/> |
| [IsArchived](Group_IsArchived 'Guilded.NET.Base.Teams.Group.IsArchived') | If this group is archived.<br/> |
| [IsBase](Group_IsBase 'Guilded.NET.Base.Teams.Group.IsBase') | If this group is a main group in a team.<br/> |
| [IsDeleted](Group_IsDeleted 'Guilded.NET.Base.Teams.Group.IsDeleted') | If this group is deleted.<br/> |
| [MembershipRole](Group_MembershipRole 'Guilded.NET.Base.Teams.Group.MembershipRole') | A role that has a membership to this group.<br/> |
| [MembershipUpdates](Group_MembershipUpdates 'Guilded.NET.Base.Teams.Group.MembershipUpdates') | User membership updates in this group.<br/> |
| [MembershipUpdatesByUserId](Group_MembershipUpdatesByUserId 'Guilded.NET.Base.Teams.Group.MembershipUpdatesByUserId') | User membership updates in this group by user ID.<br/> |
| [Name](Group_Name 'Guilded.NET.Base.Teams.Group.Name') | Name of the group.<br/> |
| [Priority](Group_Priority 'Guilded.NET.Base.Teams.Group.Priority') | Priority of the group.<br/> |
| [TeamId](Group_TeamId 'Guilded.NET.Base.Teams.Group.TeamId') | ID of the team this group is in.<br/> |
| [Type](Group_Type 'Guilded.NET.Base.Teams.Group.Type') | A type of this group.<br/> |
| [UpdatedAt](Group_UpdatedAt 'Guilded.NET.Base.Teams.Group.UpdatedAt') | When the group was updated/edited.<br/> |
| [UpdatedBy](Group_UpdatedBy 'Guilded.NET.Base.Teams.Group.UpdatedBy') | ID of the user who edited/updated this group.<br/> |
| [UserPriority](Group_UserPriority 'Guilded.NET.Base.Teams.Group.UserPriority') | Priority of this group current user has set to.<br/> |
| [VisibilityRole](Group_VisibilityRole 'Guilded.NET.Base.Teams.Group.VisibilityRole') | A role to which this group is visible.<br/> |
| [WasUpdated](Group_WasUpdated 'Guilded.NET.Base.Teams.Group.WasUpdated') | If this group was updated<br/> |

| Methods | |
| :--- | :--- |
| [Equals(object)](Group_Equals(object) 'Guilded.NET.Base.Teams.Group.Equals(object)') | Whether objects are equal.<br/> |
| [GetHashCode()](Group_GetHashCode() 'Guilded.NET.Base.Teams.Group.GetHashCode()') | Gets group hashcode.<br/> |

| Operators | |
| :--- | :--- |
| [operator ==(Group, Group)](Group_operator(Group_Group) 'Guilded.NET.Base.Teams.Group.op_Equality(Guilded.NET.Base.Teams.Group, Guilded.NET.Base.Teams.Group)') | Whether category are equal.<br/> |
| [operator !=(Group, Group)](Group_operator!(Group_Group) 'Guilded.NET.Base.Teams.Group.op_Inequality(Guilded.NET.Base.Teams.Group, Guilded.NET.Base.Teams.Group)') | Whether category are not equal.<br/> |
