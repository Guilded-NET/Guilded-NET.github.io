---
title: User(HashId, UserType, string, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') from the specified JSON properties."
---

## User(HashId, UserType, string, DateTime) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`User`](User.md 'Guilded.Base.Users.User')

Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') from the specified JSON properties.

```csharp
public User(Guilded.Base.HashId id, Guilded.Base.Users.UserType type, string name, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,Guilded.Base.Users.UserType,string,System.DateTime).id'></a>

`id` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User')

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,Guilded.Base.Users.UserType,string,System.DateTime).type'></a>

`type` [UserType](UserType.md 'Guilded.Base.Users.UserType')

The type of the user they are

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,Guilded.Base.Users.UserType,string,System.DateTime).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The global username of the user

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,Guilded.Base.Users.UserType,string,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the user was created