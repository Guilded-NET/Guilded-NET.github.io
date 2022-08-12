---
title: ICreatableContent
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created."
---

## ICreatableContent Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created.

```csharp
public interface ICreatableContent
```

Derived  
&#8627; [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')  
&#8627; [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')  
&#8627; [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')  
&#8627; [Me](Me 'Guilded.Base.Users.Me')

| Properties | |
| :--- | :--- |
| [CreatedAt](ICreatableContent.CreatedAt 'Guilded.Base.Content.ICreatableContent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') was created. |
| [CreatedBy](ICreatableContent.CreatedBy 'Guilded.Base.Content.ICreatableContent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') creator of the content. |

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')
- [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')
- [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')
- [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')