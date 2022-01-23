---
title: FormId
layout: references
section: references
tags:
  - references
  - struct
description: "

An identifier for forms and media uploads.

```csharp
public readonly struct FormId :
System.IEquatable<Guilded.NET.Base.FormId>
```"
---

## FormId Struct
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An identifier for forms and media uploads.

```csharp
public readonly struct FormId :
System.IEquatable<Guilded.NET.Base.FormId>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[FormId](FormId 'Guilded.NET.Base.FormId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')

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
| [FormId(string)](FormId.FormId(string) 'Guilded.NET.Base.FormId.FormId(string)') | The identifier for forms and media uploads. |

| Properties | |
| :--- | :--- |
| [Random](FormId.Random 'Guilded.NET.Base.FormId.Random') | Creates a random value of [FormId](FormId 'Guilded.NET.Base.FormId'). |

| Methods | |
| :--- | :--- |
| [Check(string)](FormId.Check(string) 'Guilded.NET.Base.FormId.Check(string)') | Checks if [str](FormId.Check(string)#Guilded.NET.Base.FormId.Check(string).str 'Guilded.NET.Base.FormId.Check(string).str') is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format. |
| [Equals(FormId)](FormId.Equals(FormId) 'Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId)') | Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and [other](FormId.Equals(FormId)#Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId).other 'Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId).other') are equal. |
| [Equals(object)](FormId.Equals(object) 'Guilded.NET.Base.FormId.Equals(object)') | Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and [obj](FormId.Equals(object)#Guilded.NET.Base.FormId.Equals(object).obj 'Guilded.NET.Base.FormId.Equals(object).obj') are equal. |
| [GetHashCode()](FormId.GetHashCode() 'Guilded.NET.Base.FormId.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](FormId.ToString() 'Guilded.NET.Base.FormId.ToString()') | Returns the string representation of this [FormId](FormId 'Guilded.NET.Base.FormId') instance. |

| Operators | |
| :--- | :--- |
| [operator ==(FormId, FormId)](FormId.operator(FormId,FormId) 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)') | Returns whether [id0](FormId.operator(FormId,FormId)#Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId,Guilded.NET.Base.FormId).id0 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id0') and [id1](FormId.operator(FormId,FormId)#Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId,Guilded.NET.Base.FormId).id1 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id1') are equal. |
| [operator !=(FormId, FormId)](FormId.operator!(FormId,FormId) 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)') | Returns whether [id0](FormId.operator!(FormId,FormId)#Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId,Guilded.NET.Base.FormId).id0 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id0') and [id1](FormId.operator!(FormId,FormId)#Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId,Guilded.NET.Base.FormId).id1 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId).id1') are not equal. |

### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [HashId](HashId 'Guilded.NET.Base.HashId')