---
title: Embeds
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains."
---

## Message.Embeds Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message.md 'Guilded.Base.Content.Message')

Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains.

```csharp
public System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>? Embeds { get; }
```

### Remarks
  
The max embed limit as of now is 1.

#### Property Value
[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed.md 'Guilded.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')  
List of embeds?