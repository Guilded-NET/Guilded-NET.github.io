---
title: IReactibleContent
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be [reacted](Reaction 'Guilded.Base.Content.Reaction') on."
---

## IReactibleContent Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be [reacted](Reaction 'Guilded.Base.Content.Reaction') on.

```csharp
public interface IReactibleContent
```

Derived  
&#8627; [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](IReactibleContent.AddReactionAsync(uint) 'Guilded.Base.Content.IReactibleContent.AddReactionAsync(uint)') | Adds emote to the content. |
| [RemoveReactionAsync(uint)](IReactibleContent.RemoveReactionAsync(uint) 'Guilded.Base.Content.IReactibleContent.RemoveReactionAsync(uint)') | Removes emote from the content. |

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')
- [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')
- [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')
- [IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')