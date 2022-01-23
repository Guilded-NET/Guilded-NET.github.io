---
title: ForumThread
layout: references
section: references
tags:
  - references
  - class
description: "

A forum thread in a forum channel.

```csharp
public class ForumThread : Guilded.NET.Base.Content.ChannelContent<uint, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IReactibleContent,
Guilded.NET.Base.Content.IWebhookCreatable
```"
---

## ForumThread Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

A forum thread in a forum channel.

```csharp
public class ForumThread : Guilded.NET.Base.Content.ChannelContent<uint, Guilded.NET.Base.HashId>,
Guilded.NET.Base.Content.IReactibleContent,
Guilded.NET.Base.Content.IWebhookCreatable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; [Guilded.NET.Base.Content.ChannelContent&lt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')[HashId](HashId 'Guilded.NET.Base.HashId')[&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') &#129106; ForumThread

Implements [IReactibleContent](IReactibleContent 'Guilded.NET.Base.Content.IReactibleContent'), [IWebhookCreatable](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable')

### Remarks
  
A forum post/thread with a [Title](ForumThread.Title 'Guilded.NET.Base.Content.ForumThread.Title') and [Content](ForumThread.Content 'Guilded.NET.Base.Content.ForumThread.Content'), similarly to [Doc](Doc 'Guilded.NET.Base.Content.Doc').  
  
Currently can only be found as a return value from forum thread creation methods.

| Constructors | |
| :--- | :--- |
| [ForumThread(uint, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.ForumThread.ForumThread(uint, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)') | Creates a new instance of [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread') with provided details. |

| Properties | |
| :--- | :--- |
| [Content](ForumThread.Content 'Guilded.NET.Base.Content.ForumThread.Content') | The contents of the forum thread. |
| [CreatedByWebhook](ForumThread.CreatedByWebhook 'Guilded.NET.Base.Content.ForumThread.CreatedByWebhook') | The identifier of the webhook creator of the forum thread. |
| [Title](ForumThread.Title 'Guilded.NET.Base.Content.ForumThread.Title') | The title of the forum thread. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](ForumThread.AddReactionAsync(uint) 'Guilded.NET.Base.Content.ForumThread.AddReactionAsync(uint)') | Adds a reaction to the content. |
| [RemoveReactionAsync(uint)](ForumThread.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.ForumThread.RemoveReactionAsync(uint)') | Removes a reaction from the content. |

### See Also
- [Message](Message 'Guilded.NET.Base.Content.Message')
- [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')