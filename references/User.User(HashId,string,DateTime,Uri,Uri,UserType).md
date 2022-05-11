---
title: User(HashId, string, DateTime, Uri, Uri, UserType)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') from the specified JSON properties."
---

## User(HashId, string, DateTime, Uri, Uri, UserType) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`User`](User 'Guilded.Base.Users.User')

Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') from the specified JSON properties.

```csharp
public User(Guilded.Base.HashId id, string name, System.DateTime createdAt, Uri? avatar=null, Uri? banner=null, Guilded.Base.Users.UserType type=Guilded.Base.Users.UserType.User);
```
#### Parameters

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).id'></a>

`id` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User')

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The global username of [the user](User 'Guilded.Base.Users.User')

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when [the user](User 'Guilded.Base.Users.User') was created

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).avatar'></a>

`avatar` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The global avatar of [the user](User 'Guilded.Base.Users.User')

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).banner'></a>

`banner` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The global banner of [the user](User 'Guilded.Base.Users.User')

<a name='Guilded.Base.Users.User.User(Guilded.Base.HashId,string,System.DateTime,Uri,Uri,Guilded.Base.Users.UserType).type'></a>

`type` [UserType](UserType 'Guilded.Base.Users.UserType')

The type of [the user](User 'Guilded.Base.Users.User') they are

### See Also
- [User](User 'Guilded.Base.Users.User')