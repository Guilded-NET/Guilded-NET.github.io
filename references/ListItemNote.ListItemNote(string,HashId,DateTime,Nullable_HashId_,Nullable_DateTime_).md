---
title: ListItemNote(string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote') with provided details."
---

## ListItemNote(string, HashId, DateTime, Nullable<HashId>, Nullable<DateTime>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemNote`](ListItemNote.md 'Guilded.Base.Content.ListItemNote')

Initializes a new instance of [ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote') with provided details.

```csharp
public ListItemNote(string content, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guilded.Base.HashId> updatedBy, System.Nullable<System.DateTime> updatedAt);
```
#### Parameters

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).createdBy'></a>

`createdBy` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the list item's note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the list item's note was created

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User.md 'Guilded.Base.Users.User') that updated the note

<a name='Guilded.Base.Content.ListItemNote.ListItemNote(string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the note was edited