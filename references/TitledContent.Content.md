---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent')."
---

## TitledContent.Content Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TitledContent`](TitledContent 'Guilded.Base.Content.TitledContent')

Gets the text contents of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent').

```csharp
public string Content { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string

### See Also
- [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')
- [Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title')