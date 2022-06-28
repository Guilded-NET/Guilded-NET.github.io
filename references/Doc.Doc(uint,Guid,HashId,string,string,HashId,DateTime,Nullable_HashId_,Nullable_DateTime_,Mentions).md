---
title: Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>, Mentions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties."
---

## Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>, Mentions) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.Base.Content.Doc')

Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties.

```csharp
public Doc(uint id, Guid channelId, Guilded.Base.HashId serverId, string title, string content, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.Base.HashId> updatedBy=null, System.Nullable<System.DateTime> updatedAt=null, Guilded.Base.Content.Mentions? mentions=null);
```
#### Parameters

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the document is

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the document is

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the document was created

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') who recently updated the document

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the document was recently updated

<a name='Guilded.Base.Content.Doc.Doc(uint,Guid,Guilded.Base.HashId,string,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

[The mentions](Doc.Mentions 'Guilded.Base.Content.Doc.Mentions') found in [the content](TitledContent.Content 'Guilded.Base.Content.TitledContent.Content')

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')