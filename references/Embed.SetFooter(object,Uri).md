---
title: SetFooter(object, Uri)
layout: references
section: references
tags:
  - references
  - method
description: ""
---

## Embed.SetFooter(object, Uri) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.Base.Embeds.Embed')

```csharp
public Guilded.Base.Embeds.Embed SetFooter(object? value, Uri? icon=null);
```
#### Parameters

<a name='Guilded.Base.Embeds.Embed.SetFooter(object,Uri).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The text contents of the footer

<a name='Guilded.Base.Embeds.Embed.SetFooter(object,Uri).icon'></a>

`icon` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

URL to the icon's image that will be displayed in the left side of the footer

### Remarks
  
A [footer](EmbedFooter 'Guilded.Base.Embeds.EmbedFooter') will be generated from the given [value](Embed.SetFooter(object,Uri)#Guilded.Base.Embeds.Embed.SetFooter(object,Uri).value 'Guilded.Base.Embeds.Embed.SetFooter(object, Uri).value') and [icon](Embed.SetFooter(object,Uri)#Guilded.Base.Embeds.Embed.SetFooter(object,Uri).icon 'Guilded.Base.Embeds.Embed.SetFooter(object, Uri).icon').  
  
[value](Embed.SetFooter(object,Uri)#Guilded.Base.Embeds.Embed.SetFooter(object,Uri).value 'Guilded.Base.Embeds.Embed.SetFooter(object, Uri).value') parameter will be converted to string.

#### Returns
[Embed](Embed 'Guilded.Base.Embeds.Embed')