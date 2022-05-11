---
title: HashId
layout: references
section: references
tags:
  - references
  - struct
description: "

Represents an identifier for Guilded servers, users, etc."
---

## HashId Struct
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

Represents an identifier for Guilded servers, users, etc.

```csharp
public readonly struct HashId
```

### Remarks
  
Guilded hash identifier is 8 characters or more in length and consists of digits, uppercase letters and lowercase letters.  
  
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
| [HashId(string)](HashId.HashId(string).md 'Guilded.Base.HashId.HashId(string)') | Initializes a new instance of [HashId](HashId.md 'Guilded.Base.HashId'). |

| Methods | |
| :--- | :--- |
| [Check(string)](HashId.Check(string).md 'Guilded.Base.HashId.Check(string)') | Returns whether [str](HashId.Check(string).md#Guilded.Base.HashId.Check(string).str 'Guilded.Base.HashId.Check(string).str') is in the correct [HashId](HashId.md 'Guilded.Base.HashId') format. |
| [Equals(HashId)](HashId.Equals(HashId).md 'Guilded.Base.HashId.Equals(Guilded.Base.HashId)') | Returns whether this [HashId](HashId.md 'Guilded.Base.HashId') instance and [other](HashId.Equals(HashId).md#Guilded.Base.HashId.Equals(Guilded.Base.HashId).other 'Guilded.Base.HashId.Equals(Guilded.Base.HashId).other') are equal. |
| [Equals(object)](HashId.Equals(object).md 'Guilded.Base.HashId.Equals(object)') | Returns whether this [HashId](HashId.md 'Guilded.Base.HashId') instance and [obj](HashId.Equals(object).md#Guilded.Base.HashId.Equals(object).obj 'Guilded.Base.HashId.Equals(object).obj') are equal. |
| [GetHashCode()](HashId.GetHashCode().md 'Guilded.Base.HashId.GetHashCode()') | Gets a hashcode of this object. |
| [ToString()](HashId.ToString().md 'Guilded.Base.HashId.ToString()') | Returns the string representation of [HashId](HashId.md 'Guilded.Base.HashId') instance. |

| Operators | |
| :--- | :--- |
| [operator ==(HashId, HashId)](HashId.operator(HashId,HashId).md 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, Guilded.Base.HashId)') | Returns whether [id0](HashId.operator(HashId,HashId).md#Guilded.Base.HashId.op_Equality(Guilded.Base.HashId,Guilded.Base.HashId).id0 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, Guilded.Base.HashId).id0') and [id1](HashId.operator(HashId,HashId).md#Guilded.Base.HashId.op_Equality(Guilded.Base.HashId,Guilded.Base.HashId).id1 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, Guilded.Base.HashId).id1') are equal. |
| [operator !=(HashId, HashId)](HashId.operator!(HashId,HashId).md 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, Guilded.Base.HashId)') | Returns whether [id0](HashId.operator!(HashId,HashId).md#Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId,Guilded.Base.HashId).id0 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, Guilded.Base.HashId).id0') and [id1](HashId.operator!(HashId,HashId).md#Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId,Guilded.Base.HashId).id1 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, Guilded.Base.HashId).id1') are not equal. |

### See Also
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')
- [FormId](FormId.md 'Guilded.Base.FormId')