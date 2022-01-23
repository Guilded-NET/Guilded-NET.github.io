---
title: Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [Doc](Doc 'Guilded.NET.Base.Content.Doc') with provided details.

```csharp
public Doc(uint id, System.Guid channelId, Guilded.NET.Base.HashId serverId, string title, string content, Guilded.NET.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.NET.Base.HashId> updatedBy, System.Nullable<System.DateTime> updatedAt);
```"
---

## Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.NET.Base.Content.Doc')

Creates a new instance of [Doc](Doc 'Guilded.NET.Base.Content.Doc') with provided details.

```csharp
public Doc(uint id, System.Guid channelId, Guilded.NET.Base.HashId serverId, string title, string content, Guilded.NET.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.NET.Base.HashId> updatedBy, System.Nullable<System.DateTime> updatedAt);
```
#### Parameters

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the content

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the document is

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the server where the document is

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the document

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the document

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user creator of the document

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the document was created

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the user who recently updated the document

<a name='Guilded.NET.Base.Content.Doc.Doc(uint,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.DateTime,System.Nullable_Guilded.NET.Base.HashId_,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the document was recently updated