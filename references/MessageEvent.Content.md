---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the message."
---

## MessageEvent.Content Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Gets the text contents of the message.

```csharp
public string Content { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string