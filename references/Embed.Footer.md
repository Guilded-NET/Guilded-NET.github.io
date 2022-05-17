---
title: Footer
layout: references
section: references
tags:
  - references
  - property
description: "

The footer of [an embed](Embed 'Guilded.Base.Embeds.Embed')."
---

## Embed.Footer Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

The footer of [an embed](Embed 'Guilded.Base.Embeds.Embed').

```csharp
public Guilded.Base.Embeds.EmbedFooter? Footer { get; set; }
```

### Remarks
  
The bottom area of an embed that provides further information about anything.  
  
Footers can also have timestamps, but that can be used by setting [Timestamp](Embed.Timestamp 'Guilded.Base.Embeds.Embed.Timestamp') property. Timestamps are not officially part of footers, but that's the most common way they are displayed by the clients and official Guilded app.

#### Property Value
[EmbedFooter](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter')  
Embed Footer?

### See Also
- [Embed](Embed 'Guilded.Base.Embeds.Embed')
- [Timestamp](Embed.Timestamp 'Guilded.Base.Embeds.Embed.Timestamp')
- [Author](Embed.Author 'Guilded.Base.Embeds.Embed.Author')