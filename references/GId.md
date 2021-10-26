
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GId Struct

An identifier for Guilded teams, users, etc.
```csharp
public readonly struct GId :
System.IEquatable<Guilded.NET.Base.GId>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[GId](GId 'Guilded.NET.Base.GId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')

### Example
  
The list of random Guilded identifiers:  
```none  
R40Mp0Wd  
Ann6LewA  
```

### Remarks
  
The identifier of various Guilded objects. Guilded identifier is 8 characters in length and consists of digits, uppercase letters and lowercase letters.  
  
This can be found in:  
- Users, members, friends  
- Servers/teams  
- Groups, tournaments  
- Invites, invite links  
- Announcements

### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [FormId](FormId 'Guilded.NET.Base.FormId')

| Constructors | |
| :--- | :--- |
| [GId(string)](GId_GId(string) 'Guilded.NET.Base.GId.GId(string)') | The identifier for Guilded teams, users, etc. |

| Methods | |
| :--- | :--- |
| [Check(string)](GId_Check(string) 'Guilded.NET.Base.GId.Check(string)') | Checks if [str](GId_Check(string)#Guilded_NET_Base_GId_Check(string)_str 'Guilded.NET.Base.GId.Check(string).str') is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format. |
| [Equals(GId)](GId_Equals(GId) 'Guilded.NET.Base.GId.Equals(Guilded.NET.Base.GId)') | Returns whether this [GId](GId 'Guilded.NET.Base.GId') instance and [other](GId_Equals(GId)#Guilded_NET_Base_GId_Equals(Guilded_NET_Base_GId)_other 'Guilded.NET.Base.GId.Equals(Guilded.NET.Base.GId).other') are equal. |
| [Equals(object)](GId_Equals(object) 'Guilded.NET.Base.GId.Equals(object)') | Returns whether this [GId](GId 'Guilded.NET.Base.GId') instance and [obj](GId_Equals(object)#Guilded_NET_Base_GId_Equals(object)_obj 'Guilded.NET.Base.GId.Equals(object).obj') are equal. |
| [GetHashCode()](GId_GetHashCode() 'Guilded.NET.Base.GId.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](GId_ToString() 'Guilded.NET.Base.GId.ToString()') | Returns the string representation of this [GId](GId 'Guilded.NET.Base.GId') instance. |

| Operators | |
| :--- | :--- |
| [operator ==(GId, GId)](GId_operator(GId_GId) 'Guilded.NET.Base.GId.op_Equality(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Returns whether [id0](GId_operator(GId_GId)#Guilded_NET_Base_GId_op_Equality(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_id0 'Guilded.NET.Base.GId.op_Equality(Guilded.NET.Base.GId, Guilded.NET.Base.GId).id0') and [id1](GId_operator(GId_GId)#Guilded_NET_Base_GId_op_Equality(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_id1 'Guilded.NET.Base.GId.op_Equality(Guilded.NET.Base.GId, Guilded.NET.Base.GId).id1') are equal. |
| [operator !=(GId, GId)](GId_operator!(GId_GId) 'Guilded.NET.Base.GId.op_Inequality(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Returns whether [id0](GId_operator!(GId_GId)#Guilded_NET_Base_GId_op_Inequality(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_id0 'Guilded.NET.Base.GId.op_Inequality(Guilded.NET.Base.GId, Guilded.NET.Base.GId).id0') and [id1](GId_operator!(GId_GId)#Guilded_NET_Base_GId_op_Inequality(Guilded_NET_Base_GId_Guilded_NET_Base_GId)_id1 'Guilded.NET.Base.GId.op_Inequality(Guilded.NET.Base.GId, Guilded.NET.Base.GId).id1') are not equal. |
