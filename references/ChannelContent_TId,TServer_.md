---
title: ChannelContent<TId,TServer>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for channel content."
---

## ChannelContent<TId,TServer> Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents the base for channel content.

```csharp
public abstract class ChannelContent<TId,TServer> : Guilded.Base.ClientObject,
Guilded.Base.Content.ICreatableContent
    where TId : notnull
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; ChannelContent<TId,TServer>

Implements [ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')

Derived  
&#8627; [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')  
&#8627; [Message](Message.md 'Guilded.Base.Content.Message')  
&#8627; [TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent')

### Remarks
  
This does not include deleted content.
#### Type parameters

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.TId'></a>

`TId`

The type of the content identifier (property [Id](ChannelContent_TId,TServer_.Id.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id'))

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.TServer'></a>

`TServer`

The type of the server identifier (property [ServerId](ChannelContent_TId,TServer_.ServerId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId'))

| Constructors | |
| :--- | :--- |
| [ChannelContent(TId, Guid, TServer, HashId, DateTime)](ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,HashId,DateTime).md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelContent(TId, Guid, TServer, Guilded.Base.HashId, System.DateTime)') | Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId') | Gets the identifier of the channel where the content is. |
| [CreatedAt](ChannelContent_TId,TServer_.CreatedAt.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt') | Gets the date of when the content was created. |
| [CreatedBy](ChannelContent_TId,TServer_.CreatedBy.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content. |
| [Id](ChannelContent_TId,TServer_.Id.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') | Gets the identifier of the content. |
| [ServerId](ChannelContent_TId,TServer_.ServerId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId') | Gets the identifier of the server where the content is. |

| Methods | |
| :--- | :--- |
| [Equals(object)](ChannelContent_TId,TServer_.Equals(object).md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object)') | Returns whether this instance and the [other](ChannelContent_TId,TServer_.Equals(object).md#Guilded.Base.Content.ChannelContent_TId,TServer_.Equals(object).other 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object).other') are equal to each other. |
| [GetHashCode()](ChannelContent_TId,TServer_.GetHashCode().md 'Guilded.Base.Content.ChannelContent<TId,TServer>.GetHashCode()') | Returns a hashcode of this instance. |
| [ToString()](ChannelContent_TId,TServer_.ToString().md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ToString()') | Returns string equivalent to this instance. |
