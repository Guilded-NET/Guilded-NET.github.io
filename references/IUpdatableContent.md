---
title: IUpdatableContent
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be edited."
---

## IUpdatableContent Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be edited.

```csharp
public interface IUpdatableContent
```

Derived  
&#8627; [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')  
&#8627; [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')

| Properties | |
| :--- | :--- |
| [UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.Base.Content.IUpdatableContent.UpdatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were edited. |

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')
- [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')
- [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')
- [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')