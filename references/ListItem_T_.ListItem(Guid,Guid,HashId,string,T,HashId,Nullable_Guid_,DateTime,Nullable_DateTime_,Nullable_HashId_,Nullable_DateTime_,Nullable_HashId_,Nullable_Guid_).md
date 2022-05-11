---
title: ListItem(Guid, Guid, HashId, string, T, HashId, Nullable<Guid>, DateTime, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, Nullable<HashId>, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>') with provided details."
---

## ListItem(Guid, Guid, HashId, string, T, HashId, Nullable<Guid>, DateTime, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, Nullable<HashId>, Nullable<Guid>) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItem<T>`](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')

Initializes a new instance of [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>') with provided details.

```csharp
public ListItem(Guid id, Guid channelId, Guilded.Base.HashId serverId, string message, T? note, Guilded.Base.HashId createdBy, System.Nullable<Guid> createdByWebhookId, System.DateTime createdAt, System.Nullable<System.DateTime> updatedAt, System.Nullable<Guilded.Base.HashId> updatedBy, System.Nullable<System.DateTime> completedAt, System.Nullable<Guilded.Base.HashId> completedBy, System.Nullable<Guid> parentListItemId);
```
#### Parameters

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the list item is

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).serverId'></a>

`serverId` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where the list item is

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message in list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).note'></a>

`note` [T](ListItem_T_.md#Guilded.Base.Content.ListItem_T_.T 'Guilded.Base.Content.ListItem<T>.T')

The note of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdBy'></a>

`createdBy` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the webhook creator of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date of when the list item was created

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the list item was edited

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User.md 'Guilded.Base.Users.User') updater of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).completedAt'></a>

`completedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date of when the list item was completed

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).completedBy'></a>

`completedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User.md 'Guilded.Base.Users.User') completer of the list item

<a name='Guilded.Base.Content.ListItem_T_.ListItem(Guid,Guid,Guilded.Base.HashId,string,T,Guilded.Base.HashId,System.Nullable_Guid_,System.DateTime,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).parentListItemId'></a>

`parentListItemId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the parent list item of this list item