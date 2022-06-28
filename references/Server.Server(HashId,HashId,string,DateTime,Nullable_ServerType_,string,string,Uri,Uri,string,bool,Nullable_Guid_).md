---
title: Server(HashId, HashId, string, DateTime, Nullable<ServerType>, string, string, Uri, Uri, string, bool, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Server](Server 'Guilded.Base.Servers.Server') from specified JSON properties."
---

## Server(HashId, HashId, string, DateTime, Nullable<ServerType>, string, string, Uri, Uri, string, bool, Nullable<Guid>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Server`](Server 'Guilded.Base.Servers.Server')

Initializes a new instance of [Server](Server 'Guilded.Base.Servers.Server') from specified JSON properties.

```csharp
public Server(Guilded.Base.HashId id, Guilded.Base.HashId ownerId, string name, System.DateTime createdAt, System.Nullable<Guilded.Base.Servers.ServerType> type=null, string? url=null, string? about=null, Uri? avatar=null, Uri? banner=null, string? timezone=null, bool isVerified=false, System.Nullable<Guid> defaultChannelId=null);
```
#### Parameters

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).id'></a>

`id` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).ownerId'></a>

`ownerId` [HashId](HashId 'Guilded.Base.HashId')

[The user](User 'Guilded.Base.Users.User') that created [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The displayed name of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when [the server](Server 'Guilded.Base.Servers.Server') was created

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).type'></a>

`type` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[ServerType](ServerType 'Guilded.Base.Servers.ServerType')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The selected [type](ServerType 'Guilded.Base.Servers.ServerType') of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The part of URL to the [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).about'></a>

`about` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).avatar'></a>

`avatar` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

[The URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the icon image of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).banner'></a>

`banner` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

[The URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the banner image of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).timezone'></a>

`timezone` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The set timezone of [the server](Server 'Guilded.Base.Servers.Server')

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).isVerified'></a>

`isVerified` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the server](Server 'Guilded.Base.Servers.Server') is verified by the Guilded staff team

<a name='Guilded.Base.Servers.Server.Server(Guilded.Base.HashId,Guilded.Base.HashId,string,System.DateTime,System.Nullable_Guilded.Base.Servers.ServerType_,string,string,Uri,Uri,string,bool,System.Nullable_Guid_).defaultChannelId'></a>

`defaultChannelId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

[The channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') of [the server](Server 'Guilded.Base.Servers.Server') that is the main channel