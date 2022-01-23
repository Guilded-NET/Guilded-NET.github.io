---
title: SetFooter(object, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the footer as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(object text, string? iconUrl=null);
```"
---

## Embed.SetFooter(object, string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the footer as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(object text, string? iconUrl=null);
```

### Remarks
  
Sets [Footer](Embed.Footer 'Guilded.NET.Base.Embeds.Embed.Footer') as a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') made from given parameters. The text will be set as string equivalent to [text](Embed.SetFooter(object,string)#Guilded.NET.Base.Embeds.Embed.SetFooter(object,string).text 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).text').
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetFooter(object,string).text'></a>

`text` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The text of the footer

<a name='Guilded.NET.Base.Embeds.Embed.SetFooter(object,string).iconUrl'></a>

`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The icon of the footer

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[iconUrl](Embed.SetFooter(object,string)#Guilded.NET.Base.Embeds.Embed.SetFooter(object,string).iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).iconUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[iconUrl](Embed.SetFooter(object,string)#Guilded.NET.Base.Embeds.Embed.SetFooter(object,string).iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).iconUrl') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance