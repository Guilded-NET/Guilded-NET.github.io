---
title: ListItem
layout: references
section: references
tags:
  - references
  - class
description: "

A list item in a list channel.

```csharp
public class ListItem : Guilded.NET.Base.Content.ChannelContent<System.Guid, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IWebhookCreatable
```"
---

## ListItem Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

A list item in a list channel.

```csharp
public class ListItem : Guilded.NET.Base.Content.ChannelContent<System.Guid, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IWebhookCreatable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[,](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') &#129106; ListItem

Implements [IWebhookCreatable](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable')

### Remarks
  
A list item in a list channel with an optional [Note](ListItem.Note 'Guilded.NET.Base.Content.ListItem.Note').  
  
It can only be found as a return value when creating a list item.

| Constructors | |
| :--- | :--- |
| [ListItem(Guid, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime)](ListItem.ListItem(Guid,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.ListItem.ListItem(System.Guid, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)') | Creates a new instance of [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem') with provided details. |

| Properties | |
| :--- | :--- |
| [CreatedByWebhook](ListItem.CreatedByWebhook 'Guilded.NET.Base.Content.ListItem.CreatedByWebhook') | The identifier of the webhook creator of the list item. |
| [Message](ListItem.Message 'Guilded.NET.Base.Content.ListItem.Message') | The contents of the message in the item. |
| [Note](ListItem.Note 'Guilded.NET.Base.Content.ListItem.Note') | The contents of the note in the item. |

### See Also
- [Message](ListItem.Message 'Guilded.NET.Base.Content.ListItem.Message')
- [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')