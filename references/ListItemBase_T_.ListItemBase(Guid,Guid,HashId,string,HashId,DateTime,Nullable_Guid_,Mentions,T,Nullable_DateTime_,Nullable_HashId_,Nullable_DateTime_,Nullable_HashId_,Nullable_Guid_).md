---
title: ListItemBase(Guid, Guid, HashId, string, HashId, DateTime, Nullable<Guid>, Mentions, T, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, Nullable<HashId>, Nullable<Guid>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>') from the specified JSON properties."
---

## ListItemBase(Guid, Guid, HashId, string, HashId, DateTime, Nullable<Guid>, Mentions, T, Nullable<DateTime>, Nullable<HashId>, Nullable<DateTime>, Nullable<HashId>, Nullable<Guid>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemBase<T>`](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')

Initializes a new instance of [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>') from the specified JSON properties.

```csharp
protected ListItemBase(Guid id, Guid channelId, Guilded.Base.HashId serverId, string message, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.Nullable<Guid> createdByWebhookId=null, Guilded.Base.Content.Mentions? mentions=null, T? note=null, System.Nullable<System.DateTime> updatedAt=null, System.Nullable<Guilded.Base.HashId> updatedBy=null, System.Nullable<System.DateTime> completedAt=null, System.Nullable<Guilded.Base.HashId> completedBy=null, System.Nullable<Guid> parentListItemId=null);
```
#### Parameters

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).id'></a>

`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the list item is

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the list item is

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message in list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') creator of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

the date when the list item was created

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).createdByWebhookId'></a>

`createdByWebhookId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') creator of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

[The mentions](ListItemBase_T_.Mentions 'Guilded.Base.Content.ListItemBase<T>.Mentions') found in [the content](ListItemBase_T_.Message 'Guilded.Base.Content.ListItemBase<T>.Message')

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).note'></a>

`note` [T](ListItemBase_T_#Guilded.Base.Content.ListItemBase_T_.T 'Guilded.Base.Content.ListItemBase<T>.T')

The note of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).updatedAt'></a>

`updatedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the list item was edited

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).updatedBy'></a>

`updatedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') updater of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).completedAt'></a>

`completedAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

the date when the list item was completed

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).completedBy'></a>

`completedBy` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [user](User 'Guilded.Base.Users.User') completer of the list item

<a name='Guilded.Base.Content.ListItemBase_T_.ListItemBase(Guid,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.Nullable_Guid_,Guilded.Base.Content.Mentions,T,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_System.DateTime_,System.Nullable_Guilded.Base.HashId_,System.Nullable_Guid_).parentListItemId'></a>

`parentListItemId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the parent list item of this list item

### See Also
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')