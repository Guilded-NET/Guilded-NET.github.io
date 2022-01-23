---
title: Footer
layout: references
section: references
tags:
  - references
  - property
description: "

The footer of the embed.

```csharp
public Guilded.NET.Base.Embeds.EmbedFooter? Footer { get; set; }
```"
---

## Embed.Footer Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

The footer of the embed.

```csharp
public Guilded.NET.Base.Embeds.EmbedFooter? Footer { get; set; }
```

### Remarks
  
The bottom area of an embed that provides further information about anything.  
  
Footers can also have timestamps, but that can be used by setting [Timestamp](Embed.Timestamp 'Guilded.NET.Base.Embeds.Embed.Timestamp') property. Timestamps are not officially part of footers, but that's the most common way they are displayed by the clients and official Guilded app.

#### Property Value
[EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')  
Footer?