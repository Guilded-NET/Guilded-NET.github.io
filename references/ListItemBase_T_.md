---
title: ListItemBase<T>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an item in [a list channel](ChannelType#Guilded.Base.Servers.ChannelType.List 'Guilded.Base.Servers.ChannelType.List')."
---

## ListItemBase<T> Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents an item in [a list channel](ChannelType#Guilded.Base.Servers.ChannelType.List 'Guilded.Base.Servers.ChannelType.List').

```csharp
public abstract class ListItemBase<T> : Guilded.Base.Content.ChannelContent<Guid, Guilded.Base.HashId>,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.Content.IWebhookCreatable
    where T : Guilded.Base.Content.ListItemNoteSummary
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.Base.ClientObject') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; ListItemBase<T>

Implements [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent'), [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')

Derived  
&#8627; [ListItem](ListItem 'Guilded.Base.Content.ListItem')  
&#8627; [ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary')

### Remarks
  
Either an existing or a cached list item.
#### Type parameters

<a name='Guilded.Base.Content.ListItemBase_T_.T'></a>

`T`

The type of the list item's note

| Constructors | |
| :--- | :--- |
| [ListItemBase(Guid, Guid, HashId, string, HashId, DateTime, Nullable&lt;Guid&gt;, T, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItemBase_T_.ListItemBase(Guid,Guid,HashId,string,HashId,DateTime,Nullable_Guid_,T,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.ListItemBase<T>.ListItemBase(Guid, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, T, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)') | Initializes a new instance of [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CompletedAt](ListItemBase_T_.CompletedAt 'Guilded.Base.Content.ListItemBase<T>.CompletedAt') | Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was completed. |
| [CompletedBy](ListItemBase_T_.CompletedBy 'Guilded.Base.Content.ListItemBase<T>.CompletedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') who ticked off [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [CreatedByWebhook](ListItemBase_T_.CreatedByWebhook 'Guilded.Base.Content.ListItemBase<T>.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the list item. |
| [IsCompleted](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted') | Gets whether the list item was ticked off |
| [Message](ListItemBase_T_.Message 'Guilded.Base.Content.ListItemBase<T>.Message') | Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [Note](ListItemBase_T_.Note 'Guilded.Base.Content.ListItemBase<T>.Note') | Gets the note of [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [ParentId](ListItemBase_T_.ParentId 'Guilded.Base.Content.ListItemBase<T>.ParentId') | Gets the identifier of [the parent item](ListItem 'Guilded.Base.Content.ListItem') of [the item](ListItem 'Guilded.Base.Content.ListItem'). |
| [UpdatedAt](ListItemBase_T_.UpdatedAt 'Guilded.Base.Content.ListItemBase<T>.UpdatedAt') | Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was edited. |
| [UpdatedBy](ListItemBase_T_.UpdatedBy 'Guilded.Base.Content.ListItemBase<T>.UpdatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') who updated [the list item](ListItem 'Guilded.Base.Content.ListItem'). |

| Methods | |
| :--- | :--- |
| [CompleteAsync()](ListItemBase_T_.CompleteAsync() 'Guilded.Base.Content.ListItemBase<T>.CompleteAsync()') | Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted'). |
| [DeleteAsync()](ListItemBase_T_.DeleteAsync() 'Guilded.Base.Content.ListItemBase<T>.DeleteAsync()') | Deletes the listItem. |
| [UncompleteAsync()](ListItemBase_T_.UncompleteAsync() 'Guilded.Base.Content.ListItemBase<T>.UncompleteAsync()') | Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted'). |
| [UpdateAsync(string, string)](ListItemBase_T_.UpdateAsync(string,string) 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string)') | Edits the content of a [message](ListItemBase_T_.UpdateAsync(string,string)#Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string).message'). |

### See Also
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary')
- [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')
- [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')
- [Message](Message 'Guilded.Base.Content.Message')
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')
- [Doc](Doc 'Guilded.Base.Content.Doc')