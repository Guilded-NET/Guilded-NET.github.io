---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the [document](Doc 'Guilded.Base.Content.Doc')."
---

## DocEvent.Content Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`DocEvent`](DocEvent 'Guilded.Base.Events.DocEvent')

Gets the text contents of the [document](Doc 'Guilded.Base.Content.Doc').

```csharp
public string Content { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title')