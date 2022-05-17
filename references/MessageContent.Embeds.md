---
title: Embeds
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains."
---

## MessageContent.Embeds Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageContent`](MessageContent 'Guilded.Base.Content.MessageContent')

Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains.

```csharp
public System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>? Embeds { get; set; }
```

### Remarks
  
The max [embed](Embed 'Guilded.Base.Embeds.Embed') limit as of now is [1](Message.EmbedLimit 'Guilded.Base.Content.Message.EmbedLimit').

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')
- [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')
- [Content](Message.Content 'Guilded.Base.Content.Message.Content')