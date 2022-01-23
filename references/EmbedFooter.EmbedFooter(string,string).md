---
title: EmbedFooter(string, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter.EmbedFooter(string,string)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).text').

```csharp
public EmbedFooter(string text, string iconUrl);
```"
---

## EmbedFooter(string, string) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`EmbedFooter`](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')

Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter.EmbedFooter(string,string)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).text').

```csharp
public EmbedFooter(string text, string iconUrl);
```
#### Parameters

<a name='Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).text'></a>

`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the footer

<a name='Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).iconUrl'></a>

`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL to footer's icon

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[iconUrl](EmbedFooter.EmbedFooter(string,string)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).iconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).iconUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[iconUrl](EmbedFooter.EmbedFooter(string,string)#Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string,string).iconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).iconUrl') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting