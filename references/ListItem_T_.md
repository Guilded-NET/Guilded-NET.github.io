---
title: ListItem<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an item in a list channel."
---

## ListItem<T> Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content.md 'Guilded.Base.Content')

Represents an item in a list channel.

```csharp
public class ListItem<T> : Guilded.Base.Content.ChannelContent<Guid, Guilded.Base.HashId>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IWebhookCreatable
    where T : Guilded.Base.Content.ListItemNoteSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; ListItem<T>

Implements [IUpdatableContent](IUpdatableContent.md 'Guilded.Base.Content.IUpdatableContent'), [IWebhookCreatable](IWebhookCreatable.md 'Guilded.Base.Content.IWebhookCreatable')

### Remarks
  
Either an existing or a cached list item. It can only be found in list items and may sometimes be found in list threads (officially unsupported).
#### Type parameters

<a name='Guilded.Base.Content.ListItem_T_.T'></a>

`T`

The type of the list item's note

| Constructors | |
| :--- | :--- |
| [ListItem(Guid, Guid, HashId, string, T, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItem_T_.ListItem(Guid,Guid,HashId,string,T,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_).md 'Guilded.Base.Content.ListItem<T>.ListItem(Guid, Guid, Guilded.Base.HashId, string, T, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)') | Initializes a new instance of [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>') with provided details. |

| Properties | |
| :--- | :--- |
| [CompletedAt](ListItem_T_.CompletedAt.md 'Guilded.Base.Content.ListItem<T>.CompletedAt') | Gets the date of when the list item was completed. |
| [CompletedBy](ListItem_T_.CompletedBy.md 'Guilded.Base.Content.ListItem<T>.CompletedBy') | Gets the identifier of [user](User.md 'Guilded.Base.Users.User') who ticked off this list item. |
| [CreatedByWebhook](ListItem_T_.CreatedByWebhook.md 'Guilded.Base.Content.ListItem<T>.CreatedByWebhook') | Gets the identifier of the webhook that created the list item. |
| [IsCompleted](ListItem_T_.IsCompleted.md 'Guilded.Base.Content.ListItem<T>.IsCompleted') | Gets whether the list item was ticked off |
| [Message](ListItem_T_.Message.md 'Guilded.Base.Content.ListItem<T>.Message') | Gets the text contents of the message in the item. |
| [Note](ListItem_T_.Note.md 'Guilded.Base.Content.ListItem<T>.Note') | Gets the note of the list item. |
| [ParentListItemId](ListItem_T_.ParentListItemId.md 'Guilded.Base.Content.ListItem<T>.ParentListItemId') | Gets the identifier of the parent list item of this list item. |
| [UpdatedAt](ListItem_T_.UpdatedAt.md 'Guilded.Base.Content.ListItem<T>.UpdatedAt') | Gets the date of when the list item was edited. |
| [UpdatedBy](ListItem_T_.UpdatedBy.md 'Guilded.Base.Content.ListItem<T>.UpdatedBy') | Gets the identifier of [user](User.md 'Guilded.Base.Users.User') who updated this list item. |

| Methods | |
| :--- | :--- |
| [DeleteAsync()](ListItem_T_.DeleteAsync().md 'Guilded.Base.Content.ListItem<T>.DeleteAsync()') | Deletes an listItem from a channel. |
| [UpdateAsync(string, string)](ListItem_T_.UpdateAsync(string,string).md 'Guilded.Base.Content.ListItem<T>.UpdateAsync(string, string)') | Edits the content of a [message](ListItem_T_.UpdateAsync(string,string).md#Guilded.Base.Content.ListItem_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItem<T>.UpdateAsync(string, string).message') in a channel. |

### See Also
- [ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')
- [ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary')
- [Message](Message.md 'Guilded.Base.Content.Message')
- [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')
- [Doc](Doc.md 'Guilded.Base.Content.Doc')