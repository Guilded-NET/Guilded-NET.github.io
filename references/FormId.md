
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## FormId Struct
The identifier for forms and media uploads.  
```csharp
public struct FormId :
System.IEquatable<Guilded.NET.Base.FormId>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[FormId](FormId 'Guilded.NET.Base.FormId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')  
### Example
The list of different form identifiers:

```none
  
r-1000000-1000000  
r-2849201-1832734  
r-7289920-2930323  
r-4598392-4859302  
```
### Remarks
The form identifier.



This can only be found in forms(form fields specifically) and media upload progress tracking.

| Constructors | |
| :--- | :--- |
| [FormId(string)](FormId_FormId(string) 'Guilded.NET.Base.FormId.FormId(string)') | The identifier for forms and media uploads.<br/> |

| Properties | |
| :--- | :--- |
| [Random](FormId_Random 'Guilded.NET.Base.FormId.Random') | Creates a random value of [FormId](FormId 'Guilded.NET.Base.FormId').<br/> |

| Methods | |
| :--- | :--- |
| [Check(string)](FormId_Check(string) 'Guilded.NET.Base.FormId.Check(string)') | Checks if [str](FormId_Check(string)#Guilded_NET_Base_FormId_Check(string)_str 'Guilded.NET.Base.FormId.Check(string).str') is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format.<br/> |
| [Equals(FormId)](FormId_Equals(FormId) 'Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId)') | Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and [other](FormId_Equals(FormId)#Guilded_NET_Base_FormId_Equals(Guilded_NET_Base_FormId)_other 'Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId).other') are equal.<br/> |
| [Equals(object)](FormId_Equals(object) 'Guilded.NET.Base.FormId.Equals(object)') | Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and [obj](FormId_Equals(object)#Guilded_NET_Base_FormId_Equals(object)_obj 'Guilded.NET.Base.FormId.Equals(object).obj') are equal.<br/> |
| [GetHashCode()](FormId_GetHashCode() 'Guilded.NET.Base.FormId.GetHashCode()') | Gets a hashcode of this object.<br/> |
| [ToString()](FormId_ToString() 'Guilded.NET.Base.FormId.ToString()') | Returns the string representation of this [FormId](FormId 'Guilded.NET.Base.FormId') instance.<br/> |

| Operators | |
| :--- | :--- |
| [operator ==(FormId, FormId)](FormId_operator(FormId_FormId) 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)') | Returns whether [id0](FormId_operator(FormId_FormId)#Guilded_NET_Base_FormId_op_Equality(Guilded_NET_Base_FormId_Guilded_NET_Base_FormId)_id0 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id0') and [id1](FormId_operator(FormId_FormId)#Guilded_NET_Base_FormId_op_Equality(Guilded_NET_Base_FormId_Guilded_NET_Base_FormId)_id1 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id1') are equal.<br/> |
| [operator !=(FormId, FormId)](FormId_operator!(FormId_FormId) 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)') | Returns whether [id0](FormId_operator!(FormId_FormId)#Guilded_NET_Base_FormId_op_Inequality(Guilded_NET_Base_FormId_Guilded_NET_Base_FormId)_id0 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id0') and [id1](FormId_operator!(FormId_FormId)#Guilded_NET_Base_FormId_op_Inequality(Guilded_NET_Base_FormId_Guilded_NET_Base_FormId)_id1 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id1') are not equal.<br/> |

#### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [GId](GId 'Guilded.NET.Base.GId')
