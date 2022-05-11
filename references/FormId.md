---
title: FormId
layout: references
section: references
tags:
  - references
  - struct
description: "

An identifier for forms and media uploads."
---

## FormId Struct
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

An identifier for forms and media uploads.

```csharp
public readonly struct FormId
```

### Remarks
  
The form identifier. This can only be found in forms(form fields specifically) and media upload progress tracking.

### Example
  
The list of different form identifiers:  
  
```none  
r-1000000-1000000  
r-2849201-1832734  
r-7289920-2930323  
r-4598392-4859302  
```

| Constructors | |
| :--- | :--- |
| [FormId(string)](FormId.FormId(string) 'Guilded.Base.FormId.FormId(string)') | The identifier for forms and media uploads. |

| Properties | |
| :--- | :--- |
| [Random](FormId.Random 'Guilded.Base.FormId.Random') | Creates a random value of [FormId](FormId 'Guilded.Base.FormId'). |

| Methods | |
| :--- | :--- |
| [Check(string)](FormId.Check(string) 'Guilded.Base.FormId.Check(string)') | Returns whether [str](FormId.Check(string)#Guilded.Base.FormId.Check(string).str 'Guilded.Base.FormId.Check(string).str') is in the correct [FormId](FormId 'Guilded.Base.FormId') format. |
| [Equals(FormId)](FormId.Equals(FormId) 'Guilded.Base.FormId.Equals(Guilded.Base.FormId)') | Returns whether this [FormId](FormId 'Guilded.Base.FormId') instance and [other](FormId.Equals(FormId)#Guilded.Base.FormId.Equals(Guilded.Base.FormId).other 'Guilded.Base.FormId.Equals(Guilded.Base.FormId).other') are equal. |
| [Equals(object)](FormId.Equals(object) 'Guilded.Base.FormId.Equals(object)') | Returns whether this [FormId](FormId 'Guilded.Base.FormId') instance and [obj](FormId.Equals(object)#Guilded.Base.FormId.Equals(object).obj 'Guilded.Base.FormId.Equals(object).obj') are equal. |
| [GetHashCode()](FormId.GetHashCode() 'Guilded.Base.FormId.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](FormId.ToString() 'Guilded.Base.FormId.ToString()') | Returns the string representation of this [FormId](FormId 'Guilded.Base.FormId') instance. |

| Operators | |
| :--- | :--- |
| [operator ==(FormId, FormId)](FormId.operator(FormId,FormId) 'Guilded.Base.FormId.op_Equality(Guilded.Base.FormId, Guilded.Base.FormId)') | Returns whether [id0](FormId.operator(FormId,FormId)#Guilded.Base.FormId.op_Equality(Guilded.Base.FormId,Guilded.Base.FormId).id0 'Guilded.Base.FormId.op_Equality(Guilded.Base.FormId, Guilded.Base.FormId).id0') and [id1](FormId.operator(FormId,FormId)#Guilded.Base.FormId.op_Equality(Guilded.Base.FormId,Guilded.Base.FormId).id1 'Guilded.Base.FormId.op_Equality(Guilded.Base.FormId, Guilded.Base.FormId).id1') are equal. |
| [operator !=(FormId, FormId)](FormId.operator!(FormId,FormId) 'Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId, Guilded.Base.FormId)') | Returns whether [id0](FormId.operator!(FormId,FormId)#Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId,Guilded.Base.FormId).id0 'Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId, Guilded.Base.FormId).id0') and [id1](FormId.operator!(FormId,FormId)#Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId,Guilded.Base.FormId).id1 'Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId, Guilded.Base.FormId).id1') are not equal. |

### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [HashId](HashId 'Guilded.Base.HashId')