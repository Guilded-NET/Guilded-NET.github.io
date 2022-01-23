---
title: EmbedAuthor(string, string, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url').

```csharp
public EmbedAuthor(string name, string? url=null, string? iconUrl=null);
```"
---

## EmbedAuthor(string, string, string) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`EmbedAuthor`](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')

Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url').

```csharp
public EmbedAuthor(string name, string? url=null, string? iconUrl=null);
```
#### Parameters

<a name='Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the embed author

<a name='Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL that author links

<a name='Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).iconUrl'></a>

`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL to author's icon

#### Exceptions

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url') or [iconUrl](EmbedAuthor.EmbedAuthor(string,string,string)#Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string,string,string).iconUrl 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).iconUrl') have bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting