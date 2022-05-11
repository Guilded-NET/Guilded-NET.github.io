---
title: Message
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem')."
---

## ListItemEvent.Message Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemEvent`](ListItemEvent 'Guilded.Base.Events.ListItemEvent')

Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem').

```csharp
public string Message { get; }
```

### Remarks
  
The contents of the list item are formatted in Markdown. The contents must only be in a single line.  
  
Videos, images, code blocks and other block formatting is not supported.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Single-line markdown string