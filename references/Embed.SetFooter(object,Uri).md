---
title: SetFooter(object, Uri)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the footer as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(object text, System.Uri? iconUrl=null);
```"
---

## Embed.SetFooter(object, Uri) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the footer as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(object text, System.Uri? iconUrl=null);
```

### Remarks
  
Sets [Footer](Embed.Footer 'Guilded.NET.Base.Embeds.Embed.Footer') as a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') made from given parameters. The text will be set as string equivalent to [text](Embed.SetFooter(object,Uri)#Guilded.NET.Base.Embeds.Embed.SetFooter(object,System.Uri).text 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, System.Uri).text').
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetFooter(object,System.Uri).text'></a>

`text` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The text of the footer

<a name='Guilded.NET.Base.Embeds.Embed.SetFooter(object,System.Uri).iconUrl'></a>

`iconUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The icon of the footer

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance