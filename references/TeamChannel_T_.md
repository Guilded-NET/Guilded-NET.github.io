
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Teams](index#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams')
## TeamChannel&lt;T&gt; Class
Interface for team channels and categories.  
```csharp
public abstract class TeamChannel<T> : Guilded.NET.Base.BaseChannel<T>
```

#### Type parameters
<a name='Guilded_NET_Base_Teams_TeamChannel_T__T'></a>
`T`  
Type of channel's ID
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [BaseChannel](BaseChannel 'Guilded.NET.Base.BaseChannel') &#129106; [Guilded.NET.Base.BaseChannel&lt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;')[T](TeamChannel_T_#Guilded_NET_Base_Teams_TeamChannel_T__T 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.T')[&gt;](BaseChannel_T_ 'Guilded.NET.Base.BaseChannel&lt;T&gt;') &#129106; TeamChannel&lt;T&gt;  

Derived  
&#8627; [Category](Category 'Guilded.NET.Base.Teams.Category')  
&#8627; [TeamChannel](TeamChannel 'Guilded.NET.Base.Teams.TeamChannel')  

| Properties | |
| :--- | :--- |
| [CategoryId](TeamChannel_T__CategoryId 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.CategoryId') | ID of the category this channel is in.<br/> |
| [GroupId](TeamChannel_T__GroupId 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.GroupId') | ID of the group this channel is in.<br/> |
| [Name](TeamChannel_T__Name 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.Name') | Name of this channel.<br/> |
| [Priority](TeamChannel_T__Priority 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.Priority') | Priority/sort index of this channel.<br/> |
| [RolePermissions](TeamChannel_T__RolePermissions 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.RolePermissions') | Permissions of the roles in this channel.<br/> |
| [TeamId](TeamChannel_T__TeamId 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.TeamId') | ID of team this channel is in.<br/> |
| [UserPermissions](TeamChannel_T__UserPermissions 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.UserPermissions') | Permissions of the users in this channel.<br/> |

| Methods | |
| :--- | :--- |
| [Equals(object)](TeamChannel_T__Equals(object) 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.Equals(object)') | Whether objects are equal.<br/> |
| [GetHashCode()](TeamChannel_T__GetHashCode() 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.GetHashCode()') | Gets channel hashcode.<br/> |

| Operators | |
| :--- | :--- |
| [operator ==(TeamChannel&lt;T&gt;, TeamChannel&lt;T&gt;)](TeamChannel_T__operator(TeamChannel_T__TeamChannel_T_) 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.op_Equality(Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;, Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;)') | Whether channels are equal.<br/> |
| [operator !=(TeamChannel&lt;T&gt;, TeamChannel&lt;T&gt;)](TeamChannel_T__operator!(TeamChannel_T__TeamChannel_T_) 'Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;.op_Inequality(Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;, Guilded.NET.Base.Teams.TeamChannel&lt;T&gt;)') | Whether channels are not equal.<br/> |
