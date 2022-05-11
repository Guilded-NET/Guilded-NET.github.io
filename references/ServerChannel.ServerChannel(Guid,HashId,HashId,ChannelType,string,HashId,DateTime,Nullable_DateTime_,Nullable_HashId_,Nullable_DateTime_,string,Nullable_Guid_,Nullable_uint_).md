---
title: ServerChannel(Guid, HashId, HashId, ChannelType, string, HashId, DateTime, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, string, Nullable<Guid>, Nullable<uint>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel') from the specified JSON properties."
---

## ServerChannel(Guid, HashId, HashId, ChannelType, string, HashId, DateTime, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, string, Nullable<Guid>, Nullable<uint>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ServerChannel`](ServerChannel 'Guilded.Base.Servers.ServerChannel')

Initializes a new instance of [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel') from the specified JSON properties.

```csharp
public ServerChannel(Guid id, Guilded.Base.HashId groupId, Guilded.Base.HashId serverId, Guilded.Base.Servers.ChannelType type, string name, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<System.DateTime> updatedAt=null, System.Nullable<Guilded.Base.HashId> archivedBy=null, System.Nullable<System.DateTime> archivedAt=null, string? topic=null, System.Nullable<Guid> parentId=null, System.Nullable<uint> categoryId=null);
```
#### Parameters

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).groupId'></a>

`groupId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the parent group of the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the parentserver of the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).type'></a>

`type` [ChannelType](ChannelType 'Guilded.Base.Servers.ChannelType')

The type of content channel holds

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when the channel was created

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date when the channel was edited

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).archivedBy'></a>

`archivedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') that archived the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).archivedAt'></a>

`archivedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date when the channel was archived

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).topic'></a>

`topic` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The topic describing what the channel is about

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).parentId'></a>

`parentId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the parent channel of the channel

<a name='Guilded.Base.Servers.ServerChannel.ServerChannel(Guid,Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Servers.ChannelType,string,Guilded.Base.HashId,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,string,System.Nullable_Guid_,System.Nullable_uint_).categoryId'></a>

`categoryId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the parent category of the channel

### See Also
- [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')