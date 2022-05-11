---
title: ChannelEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel')."
---

## ChannelEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').

```csharp
public class ChannelEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; ChannelEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [ChannelEvent(ServerChannel, HashId)](ChannelEvent.ChannelEvent(ServerChannel,HashId) 'Guilded.Base.Events.ChannelEvent.ChannelEvent(Guilded.Base.Servers.ServerChannel, Guilded.Base.HashId)') | Initializes a new instance of [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ArchivedAt](ChannelEvent.ArchivedAt 'Guilded.Base.Events.ChannelEvent.ArchivedAt') | Gets the date when the channel was archived. |
| [ArchivedBy](ChannelEvent.ArchivedBy 'Guilded.Base.Events.ChannelEvent.ArchivedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that archived the channel. |
| [CategoryId](ChannelEvent.CategoryId 'Guilded.Base.Events.ChannelEvent.CategoryId') | Gets the identifier of the parent category of this channel. |
| [Channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel') | Gets [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') received from the event. |
| [CreatedAt](ChannelEvent.CreatedAt 'Guilded.Base.Events.ChannelEvent.CreatedAt') | Gets the date when the channel was created. |
| [CreatedBy](ChannelEvent.CreatedBy 'Guilded.Base.Events.ChannelEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created the channel. |
| [GroupId](ChannelEvent.GroupId 'Guilded.Base.Events.ChannelEvent.GroupId') | Gets the identifier of the parent group of this channel. |
| [IsArchived](ChannelEvent.IsArchived 'Guilded.Base.Events.ChannelEvent.IsArchived') | Gets whether the channel has been archived. |
| [IsCategorized](ChannelEvent.IsCategorized 'Guilded.Base.Events.ChannelEvent.IsCategorized') | Gets whether the channel is in a category. |
| [IsPublic](ChannelEvent.IsPublic 'Guilded.Base.Events.ChannelEvent.IsPublic') | Gets whether the channel is globally viewable. |
| [IsThread](ChannelEvent.IsThread 'Guilded.Base.Events.ChannelEvent.IsThread') | Gets whether the channel is a thread of [a channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Name](ChannelEvent.Name 'Guilded.Base.Events.ChannelEvent.Name') | Gets the name of the channel. |
| [ParentId](ChannelEvent.ParentId 'Guilded.Base.Events.ChannelEvent.ParentId') | Gets the identifier of the parent channel of this channel. |
| [ServerId](ChannelEvent.ServerId 'Guilded.Base.Events.ChannelEvent.ServerId') | Gets the identifier of the server where the event occurred. |
| [Topic](ChannelEvent.Topic 'Guilded.Base.Events.ChannelEvent.Topic') | Gets the topic describing what the channel is about. |
| [Type](ChannelEvent.Type 'Guilded.Base.Events.ChannelEvent.Type') | Gets the identifier of the parent channel of this channel. |
| [UpdatedAt](ChannelEvent.UpdatedAt 'Guilded.Base.Events.ChannelEvent.UpdatedAt') | Gets the date when the channel was edited. |

| Methods | |
| :--- | :--- |
| [CreateWebhookAsync(string)](ChannelEvent.CreateWebhookAsync(string) 'Guilded.Base.Events.ChannelEvent.CreateWebhookAsync(string)') | Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel. |
| [DeleteAsync()](ChannelEvent.DeleteAsync() 'Guilded.Base.Events.ChannelEvent.DeleteAsync()') | Deletes the channel. |

### See Also
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')