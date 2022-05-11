---
title: Content
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the document."
---

## TitledContent.Content Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`TitledContent`](TitledContent.md 'Guilded.Base.Content.TitledContent')

Gets the text contents of the document.

```csharp
public string Content { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string