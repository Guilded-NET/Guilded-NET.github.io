---
title: IContentBlockMarkdown
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents [the channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that allow block formatting."
---

## IContentBlockMarkdown Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [the channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that allow block formatting.

```csharp
public interface IContentBlockMarkdown :
Guilded.Base.Content.IContentMarkdown
```

Implements [IContentMarkdown](IContentMarkdown 'Guilded.Base.Content.IContentMarkdown')

Derived  
&#8627; [Message](Message 'Guilded.Base.Content.Message')

| Properties | |
| :--- | :--- |
| [Embeds](IContentBlockMarkdown.Embeds 'Guilded.Base.Content.IContentBlockMarkdown.Embeds') | Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') contain. |
