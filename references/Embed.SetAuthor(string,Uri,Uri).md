---
title: SetAuthor(string, Uri, Uri)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the author as a given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetAuthor(string name, System.Uri? iconUrl=null, System.Uri? url=null);
```"
---

## Embed.SetAuthor(string, Uri, Uri) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the author as a given parameter.

```csharp
public Guilded.NET.Base.Embeds.Embed SetAuthor(string name, System.Uri? iconUrl=null, System.Uri? url=null);
```

### Remarks
  
Sets [Author](Embed.Author 'Guilded.NET.Base.Embeds.Embed.Author') as a new [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') instance from given parameters.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetAuthor(string,System.Uri,System.Uri).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

Name of the author

<a name='Guilded.NET.Base.Embeds.Embed.SetAuthor(string,System.Uri,System.Uri).iconUrl'></a>

`iconUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

URL of the image

<a name='Guilded.NET.Base.Embeds.Embed.SetAuthor(string,System.Uri,System.Uri).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

URL of the author's name

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance