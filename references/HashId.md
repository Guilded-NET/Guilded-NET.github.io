---
title: HashId
layout: references
section: references
tags:
  - references
  - struct
description: "

An identifier for Guilded teams, users, etc.

```csharp
public readonly struct HashId :
System.IEquatable<Guilded.NET.Base.HashId>
```"
---

## HashId Struct
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An identifier for Guilded teams, users, etc.

```csharp
public readonly struct HashId :
System.IEquatable<Guilded.NET.Base.HashId>
```

Implements [System.IEquatable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IEquatable-1 'System.IEquatable`1')

### Remarks
  
The identifier of various Guilded objects. Guilded hash identifier is 8 characters in length and consists of digits, uppercase letters and lowercase letters.  
  
This can be found in:  
- Users, members, friends  
- Servers/teams  
- Groups, tournaments  
- Invites, invite links  
- Announcements

### Example
  
The list of random Guilded hash identifiers:  
  
```none  
R40Mp0Wd  
Ann6LewA  
```

| Constructors | |
| :--- | :--- |
| [HashId(string)](HashId.HashId(string) 'Guilded.NET.Base.HashId.HashId(string)') | The identifier for Guilded teams, users, etc. |

| Methods | |
| :--- | :--- |
| [Check(string)](HashId.Check(string) 'Guilded.NET.Base.HashId.Check(string)') | Checks if [str](HashId.Check(string)#Guilded.NET.Base.HashId.Check(string).str 'Guilded.NET.Base.HashId.Check(string).str') is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format. |
| [Equals(HashId)](HashId.Equals(HashId) 'Guilded.NET.Base.HashId.Equals(Guilded.NET.Base.HashId)') | Returns whether this [HashId](HashId 'Guilded.NET.Base.HashId') instance and [other](HashId.Equals(HashId)#Guilded.NET.Base.HashId.Equals(Guilded.NET.Base.HashId).other 'Guilded.NET.Base.HashId.Equals(Guilded.NET.Base.HashId).other') are equal. |
| [Equals(object)](HashId.Equals(object) 'Guilded.NET.Base.HashId.Equals(object)') | Returns whether this [HashId](HashId 'Guilded.NET.Base.HashId') instance and [obj](HashId.Equals(object)#Guilded.NET.Base.HashId.Equals(object).obj 'Guilded.NET.Base.HashId.Equals(object).obj') are equal. |
| [GetHashCode()](HashId.GetHashCode() 'Guilded.NET.Base.HashId.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](HashId.ToString() 'Guilded.NET.Base.HashId.ToString()') | Returns the string representation of this [HashId](HashId 'Guilded.NET.Base.HashId') instance. |

| Operators | |
| :--- | :--- |
| [operator ==(HashId, HashId)](HashId.operator(HashId,HashId) 'Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Returns whether [id0](HashId.operator(HashId,HashId)#Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).id0 'Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId).id0') and [id1](HashId.operator(HashId,HashId)#Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).id1 'Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId).id1') are equal. |
| [operator !=(HashId, HashId)](HashId.operator!(HashId,HashId) 'Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Returns whether [id0](HashId.operator!(HashId,HashId)#Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).id0 'Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId).id0') and [id1](HashId.operator!(HashId,HashId)#Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId).id1 'Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId).id1') are not equal. |

### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [FormId](FormId 'Guilded.NET.Base.FormId')