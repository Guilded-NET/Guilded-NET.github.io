---
title: ServerChannel
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a navigatable item that contains content."
---

## ServerChannel Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Servers`](Guilded.Base.Servers 'Guilded.Base.Servers')

Represents a navigatable item that contains content.

```csharp
public class ServerChannel : Guilded.Base.ClientObject,
Guilded.Base.Content.ICreatableContent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; ServerChannel

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

| Constructors | |
| :--- | :--- |
| [ServerChannel(Guid, HashId, HashId, ChannelType, string, HashId, DateTime, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, string, Nullable&lt;Guid&gt;, Nullable&lt;uint&gt;)](ServerChannel.ServerChannel(Guid,HashId,HashId,ChannelType,string,HashId,DateTime,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,string,Nullable_Guid_,Nullable_uint_) 'Guilded.Base.Servers.ServerChannel.ServerChannel(Guid, Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Servers.ChannelType, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, string, System.Nullable<Guid>, System.Nullable<uint>)') | Initializes a new instance of [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel') from the specified JSON properties. |

| Fields | |
| :--- | :--- |
| [NameLimit](ServerChannel.NameLimit 'Guilded.Base.Servers.ServerChannel.NameLimit') | The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [channel's name](ServerChannel.Name 'Guilded.Base.Servers.ServerChannel.Name'). |
| [TopicLimit](ServerChannel.TopicLimit 'Guilded.Base.Servers.ServerChannel.TopicLimit') | The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [channel's topic](ServerChannel.Topic 'Guilded.Base.Servers.ServerChannel.Topic'). |

| Properties | |
| :--- | :--- |
| [ArchivedAt](ServerChannel.ArchivedAt 'Guilded.Base.Servers.ServerChannel.ArchivedAt') | Gets the date when the channel was archived. |
| [ArchivedBy](ServerChannel.ArchivedBy 'Guilded.Base.Servers.ServerChannel.ArchivedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that archived the channel. |
| [CategoryId](ServerChannel.CategoryId 'Guilded.Base.Servers.ServerChannel.CategoryId') | Gets the identifier of the parent category of this channel. |
| [CreatedAt](ServerChannel.CreatedAt 'Guilded.Base.Servers.ServerChannel.CreatedAt') | Gets the date when the channel was created. |
| [CreatedBy](ServerChannel.CreatedBy 'Guilded.Base.Servers.ServerChannel.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created the channel. |
| [GroupId](ServerChannel.GroupId 'Guilded.Base.Servers.ServerChannel.GroupId') | Gets the identifier of the parent group of this channel. |
| [Id](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id') | Gets the identifier of the channel. |
| [IsArchived](ServerChannel.IsArchived 'Guilded.Base.Servers.ServerChannel.IsArchived') | Gets whether the channel has been archived. |
| [IsCategorized](ServerChannel.IsCategorized 'Guilded.Base.Servers.ServerChannel.IsCategorized') | Gets whether the channel is in a category. |
| [IsPublic](ServerChannel.IsPublic 'Guilded.Base.Servers.ServerChannel.IsPublic') | Gets whether the channel is globally viewable. |
| [IsThread](ServerChannel.IsThread 'Guilded.Base.Servers.ServerChannel.IsThread') | Gets whether the channel is a thread of [a channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Name](ServerChannel.Name 'Guilded.Base.Servers.ServerChannel.Name') | Gets the name of the channel. |
| [ParentId](ServerChannel.ParentId 'Guilded.Base.Servers.ServerChannel.ParentId') | Gets the identifier of the parent channel of this channel. |
| [ServerId](ServerChannel.ServerId 'Guilded.Base.Servers.ServerChannel.ServerId') | Gets the identifier of the parent server of this channel. |
| [Topic](ServerChannel.Topic 'Guilded.Base.Servers.ServerChannel.Topic') | Gets the topic describing what the channel is about. |
| [Type](ServerChannel.Type 'Guilded.Base.Servers.ServerChannel.Type') | Gets the type of content the channel holds. |
| [UpdatedAt](ServerChannel.UpdatedAt 'Guilded.Base.Servers.ServerChannel.UpdatedAt') | Gets the date when the channel was edited. |

| Methods | |
| :--- | :--- |
| [CreateWebhookAsync(string)](ServerChannel.CreateWebhookAsync(string) 'Guilded.Base.Servers.ServerChannel.CreateWebhookAsync(string)') | Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel. |
| [DeleteAsync()](ServerChannel.DeleteAsync() 'Guilded.Base.Servers.ServerChannel.DeleteAsync()') | Deletes the channel. |
| [UpdateAsync(string, string, Nullable&lt;bool&gt;)](ServerChannel.UpdateAsync(string,string,Nullable_bool_) 'Guilded.Base.Servers.ServerChannel.UpdateAsync(string, string, System.Nullable<bool>)') | Deletes the channel. |

### See Also
- [ChannelType](ChannelType 'Guilded.Base.Servers.ChannelType')
- [Member](Member 'Guilded.Base.Servers.Member')
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')