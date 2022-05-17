---
title: IWebhookCreatable
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created by [a webhook](Webhook 'Guilded.Base.Servers.Webhook')."
---

## IWebhookCreatable Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created by [a webhook](Webhook 'Guilded.Base.Servers.Webhook').

```csharp
public interface IWebhookCreatable
```

Derived  
&#8627; [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')

| Properties | |
| :--- | :--- |
| [CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook') | Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')
- [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')
- [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')
- [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')