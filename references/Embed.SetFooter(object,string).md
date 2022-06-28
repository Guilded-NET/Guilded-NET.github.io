---
title: SetFooter(object, string)
layout: references
section: references
tags:
  - references
  - method
description: ""
---

## Embed.SetFooter(object, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

```csharp
public Guilded.Base.Embeds.Embed SetFooter(object? text, string? icon=null);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetFooter(object,string).text'></a>

`text` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

<a name='Guilded.Base.Embeds.Embed.SetFooter(object,string).icon'></a>

`icon` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

URL to the icon's image that will be displayed in the left side of the footer

### Remarks
  
A [footer](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter') will be generated from the given value and [icon](Embed.SetFooter(object,string)#Guilded.Base.Embeds.Embed.SetFooter(object,string).icon 'Guilded.Base.Embeds.Embed.SetFooter(object, string).icon').  
  
value parameter will be converted to string.

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')