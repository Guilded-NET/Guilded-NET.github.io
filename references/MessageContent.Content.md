---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of [the message](Message 'Guilded.Base.Content.Message')."
---

## MessageContent.Content Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageContent`](MessageContent 'Guilded.Base.Content.MessageContent')

Gets the text contents of [the message](Message 'Guilded.Base.Content.Message').

```csharp
public string? Content { get; set; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')
- [ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')
- [Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')
- [Type](Message.Type 'Guilded.Base.Content.Message.Type')