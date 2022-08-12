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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the base for channel content.

```csharp
public abstract class ChannelContent<TId,TServer> : Guilded.Base.ContentModel,
Guilded.Base.IModelHasId<TId>,
Guilded.Base.Content.ICreatableContent,
Guilded.Base.IChannelBased,
Guilded.Base.IHasParentClient
    where TId : notnull
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; ChannelContent<TId,TServer>

Implements [Guilded.Base.IModelHasId&lt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')[TId](ChannelContent_TId,TServer_#Guilded.Base.Content.ChannelContent_TId,TServer_.TId 'Guilded.Base.Content.ChannelContent<TId,TServer>.TId')[&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>'), [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent'), [IChannelBased](IChannelBased 'Guilded.Base.IChannelBased'), [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')  
&#8627; [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')
#### Type parameters

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.TId'></a>

`TId`

The type of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') identifier (property [Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id'))

<a name='Guilded.Base.Content.ChannelContent_TId,TServer_.TServer'></a>

`TServer`

The type of [the server](Server 'Guilded.Base.Servers.Server') identifier (property [ServerId](ChannelContent_TId,TServer_.ServerId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId'))

### Remarks
  
This does not include deleted content.

| Constructors | |
| :--- | :--- |
| [ChannelContent(TId, Guid, TServer, HashId, DateTime)](ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,HashId,DateTime) 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelContent(TId, Guid, TServer, Guilded.Base.HashId, System.DateTime)') | Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') | Gets the identifier of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [ServerId](ChannelContent_TId,TServer_.ServerId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |

| Methods | |
| :--- | :--- |
| [Equals(object)](ChannelContent_TId,TServer_.Equals(object) 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object)') | Returns whether this instance and the [other](ChannelContent_TId,TServer_.Equals(object)#Guilded.Base.Content.ChannelContent_TId,TServer_.Equals(object).other 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object).other') are equal to each other. |
| [GetHashCode()](ChannelContent_TId,TServer_.GetHashCode() 'Guilded.Base.Content.ChannelContent<TId,TServer>.GetHashCode()') | Returns a hashcode of this instance. |
| [ToString()](ChannelContent_TId,TServer_.ToString() 'Guilded.Base.Content.ChannelContent<TId,TServer>.ToString()') | Returns string equivalent to this instance. |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [Doc](Doc 'Guilded.Base.Content.Doc')