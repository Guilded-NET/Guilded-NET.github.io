---
title: ListItemNote(string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>, Mentions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote') from the specified JSON properties."
---

## ListItemNote(string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>, Mentions) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemNote`](ListItemNote 'Guilded.Base.Content.ListItemNote')

Initializes a new instance of [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote') from the specified JSON properties.

```csharp
public ListItemNote(string content, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.Base.HashId> updatedBy=null, System.Nullable<System.DateTime> updatedAt=null, Guilded.Base.Content.Mentions? mentions=null);
```
#### Parameters

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') creator of the list item's note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the list item's note was created

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') that updated the note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the note was edited

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,Guilded.Base.Content.Mentions).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

[The mentions](ListItemNote.Mentions 'Guilded.Base.Content.ListItemNote.Mentions') found in [the content](Message 'Guilded.Base.Content.Message')

### See Also
- [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')