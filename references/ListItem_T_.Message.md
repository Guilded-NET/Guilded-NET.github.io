---
title: Message
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the message in the item."
---

## ListItem<T>.Message Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItem<T>`](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')

Gets the text contents of the message in the item.

```csharp
public string Message { get; }
```

### Remarks
  
The contents of the list item are formatted in Markdown. The contents must only be in a single line.  
  
Videos, images, code blocks and other block formatting is not supported.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Single-line markdown string