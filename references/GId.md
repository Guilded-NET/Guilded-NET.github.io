#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base')
## GId Struct
The identifier for Guilded teams, users, etc.  
```csharp
public struct GId :
System.IEquatable<Guilded.NET.Base.GId>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[GId](GId.md 'Guilded.NET.Base.GId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')  

| Constructors | |
| :--- | :--- |
| [GId(string)](GId_GId(string).md 'Guilded.NET.Base.GId.GId(string)') | The identifier for Guilded teams, users, etc.<br/> |

| Methods | |
| :--- | :--- |
| [Check(string)](GId_Check(string).md 'Guilded.NET.Base.GId.Check(string)') | Checks if given string is in correct format.<br/> |
| [Equals(GId)](GId_Equals(GId).md 'Guilded.NET.Base.GId.Equals(Guilded.NET.Base.GId)') | Checks if given ID is equal to this ID.<br/> |
| [Equals(object)](GId_Equals(object).md 'Guilded.NET.Base.GId.Equals(object)') | Checks if given object is equal to this ID.<br/> |
| [GetHashCode()](GId_GetHashCode().md 'Guilded.NET.Base.GId.GetHashCode()') | Gets identifier's hashcode.<br/> |
| [ToString()](GId_ToString().md 'Guilded.NET.Base.GId.ToString()') | Returns string representation of [GId](GId.md 'Guilded.NET.Base.GId') instance.<br/> |

| Operators | |
| :--- | :--- |
| [operator ==(GId, GId)](GId_operator(GId_GId).md 'Guilded.NET.Base.GId.op_Equality(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Checks if given [GId](GId.md 'Guilded.NET.Base.GId')s are the same.<br/> |
| [operator !=(GId, GId)](GId_operator!(GId_GId).md 'Guilded.NET.Base.GId.op_Inequality(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Checks if given [GId](GId.md 'Guilded.NET.Base.GId')s are the same.<br/> |
#### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [FormId](FormId.md 'Guilded.NET.Base.FormId')
