---
title: Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties."
---

## Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.Base.Content.Doc')

Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties.

```csharp
public Doc(uint id, Guid channelId, Guilded.Base.HashId serverId, string title, string content, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.Base.HashId> updatedBy=null, System.Nullable<System.DateTime> updatedAt=null);
```
#### Parameters

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the document is

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the server where the document is

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the document was created

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') who recently updated the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the document was recently updated

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')