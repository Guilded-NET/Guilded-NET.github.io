---
title: Message
layout: references
section: references
tags:
  - references
  - property
description: "

The contents of the message in the item.

```csharp
public string Message { get; }
```"
---

## ListItem.Message Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ListItem`](ListItem 'Guilded.NET.Base.Content.ListItem')

The contents of the message in the item.

```csharp
public string Message { get; }
```

### Remarks
  
The contents of the list item formatted in Markdown. The contents must only be in a single line.  
  
Videos, images, code blocks and other block formatting is not supported.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Single-line markdown string