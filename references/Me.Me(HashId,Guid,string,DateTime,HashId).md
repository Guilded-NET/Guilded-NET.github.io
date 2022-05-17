---
title: Me(HashId, Guid, string, DateTime, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Me](Me 'Guilded.Base.Users.Me') from the specified JSON properties."
---

## Me(HashId, Guid, string, DateTime, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Me`](Me 'Guilded.Base.Users.Me')

Initializes a new instance of [Me](Me 'Guilded.Base.Users.Me') from the specified JSON properties.

```csharp
public Me(Guilded.Base.HashId id, Guid botId, string name, System.DateTime createdAt, Guilded.Base.HashId createdBy);
```
#### Parameters

<a name='Guilded.Base.Users.Me.Me(Guilded.Base.HashId,Guid,string,System.DateTime,Guilded.Base.HashId).id'></a>

`id` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User')[this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into

<a name='Guilded.Base.Users.Me.Me(Guilded.Base.HashId,Guid,string,System.DateTime,Guilded.Base.HashId).botId'></a>

`botId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the bot [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into

<a name='Guilded.Base.Users.Me.Me(Guilded.Base.HashId,Guid,string,System.DateTime,Guilded.Base.HashId).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

<a name='Guilded.Base.Users.Me.Me(Guilded.Base.HashId,Guid,string,System.DateTime,Guilded.Base.HashId).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The creation date of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

<a name='Guilded.Base.Users.Me.Me(Guilded.Base.HashId,Guid,string,System.DateTime,Guilded.Base.HashId).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

### See Also
- [Me](Me 'Guilded.Base.Users.Me')