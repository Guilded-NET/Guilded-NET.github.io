---
title: ListItemEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId')."
---

## ListItemEvent Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').

```csharp
public class ListItemEvent : Guilded.Base.BaseObject,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; ListItemEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [ListItemEvent(ListItem, HashId)](ListItemEvent.ListItemEvent(ListItem,HashId) 'Guilded.Base.Events.ListItemEvent.ListItemEvent(Guilded.Base.Content.ListItem, Guilded.Base.HashId)') | Initializes a new instance of [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [CompletedAt](ListItemEvent.CompletedAt 'Guilded.Base.Events.ListItemEvent.CompletedAt') | Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was completed. |
| [CompletedBy](ListItemEvent.CompletedBy 'Guilded.Base.Events.ListItemEvent.CompletedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') who ticked off [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [CreatedAt](ListItemEvent.CreatedAt 'Guilded.Base.Events.ListItemEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](ListItemEvent.CreatedBy 'Guilded.Base.Events.ListItemEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [CreatedByWebhook](ListItemEvent.CreatedByWebhook 'Guilded.Base.Events.ListItemEvent.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the list item. |
| [IsCompleted](ListItemEvent.IsCompleted 'Guilded.Base.Events.ListItemEvent.IsCompleted') | Gets whether the list item was ticked off |
| [ListItem](ListItemEvent.ListItem 'Guilded.Base.Events.ListItemEvent.ListItem') | Gets the list item received from the event. |
| [Message](ListItemEvent.Message 'Guilded.Base.Events.ListItemEvent.Message') | Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [Note](ListItemEvent.Note 'Guilded.Base.Events.ListItemEvent.Note') | Gets the note of [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [ParentId](ListItemEvent.ParentId 'Guilded.Base.Events.ListItemEvent.ParentId') | Gets the identifier of [the parent item](ListItem 'Guilded.Base.Content.ListItem') of [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [ServerId](ListItemEvent.ServerId 'Guilded.Base.Events.ListItemEvent.ServerId') | Gets the identifier of the server where the event occurred. |
| [UpdatedAt](ListItemEvent.UpdatedAt 'Guilded.Base.Events.ListItemEvent.UpdatedAt') | Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was edited. |

| Methods | |
| :--- | :--- |
| [CompleteAsync()](ListItemEvent.CompleteAsync() 'Guilded.Base.Events.ListItemEvent.CompleteAsync()') | Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted'). |
| [DeleteAsync()](ListItemEvent.DeleteAsync() 'Guilded.Base.Events.ListItemEvent.DeleteAsync()') | Deletes the listItem. |
| [UncompleteAsync()](ListItemEvent.UncompleteAsync() 'Guilded.Base.Events.ListItemEvent.UncompleteAsync()') | Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted'). |
| [UpdateAsync(string, string)](ListItemEvent.UpdateAsync(string,string) 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string)') | Edits the content of a [message](ListItemEvent.UpdateAsync(string,string)#Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).message 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string).message'). |

### See Also
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')