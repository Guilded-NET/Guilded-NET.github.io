---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the [topic](Topic 'Guilded.Base.Content.Topic')."
---

## Topic.Content Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Topic`](Topic 'Guilded.Base.Content.Topic')

Gets the text contents of the [topic](Topic 'Guilded.Base.Content.Topic').

```csharp
public string Content { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title')