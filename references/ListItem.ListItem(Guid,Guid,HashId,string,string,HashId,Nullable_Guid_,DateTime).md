---
title: ListItem(Guid, Guid, HashId, string, string, HashId, Nullable<Guid>, DateTime)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem') with provided details.

```csharp
public ListItem(System.Guid id, System.Guid channelId, Guilded.NET.Base.HashId serverId, string message, string? note, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt);
```"
---

## ListItem(Guid, Guid, HashId, string, string, HashId, Nullable<Guid>, DateTime) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ListItem`](ListItem 'Guilded.NET.Base.Content.ListItem')

Creates a new instance of [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem') with provided details.

```csharp
public ListItem(System.Guid id, System.Guid channelId, Guilded.NET.Base.HashId serverId, string message, string? note, Guilded.NET.Base.HashId createdBy, System.Nullable<System.Guid> createdByWebhookId, System.DateTime createdAt);
```
#### Parameters

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the list item is

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the server where the list item is

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in list item

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the note in list item

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user creator of the list item

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook creator of the list item

<a name='Guilded.NET.Base.Content.ListItem.ListItem(System.Guid,System.Guid,Guilded.NET.Base.HashId,string,string,Guilded.NET.Base.HashId,System.Nullable_System.Guid_,System.DateTime).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the list item was created