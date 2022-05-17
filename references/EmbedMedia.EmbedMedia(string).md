---
title: EmbedMedia(string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia') with optional size parameters."
---

## EmbedMedia(string) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`EmbedMedia`](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia')

Initializes a new instance of [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia') with optional size parameters.

```csharp
public EmbedMedia(string url);
```
#### Parameters

<a name='Guilded.Base.Embeds.EmbedMedia.EmbedMedia(string).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The source URL to the image

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[url](EmbedMedia.EmbedMedia(string)#Guilded.Base.Embeds.EmbedMedia.EmbedMedia(string).url 'Guilded.Base.Embeds.EmbedMedia.EmbedMedia(string).url') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](EmbedMedia.EmbedMedia(string)#Guilded.Base.Embeds.EmbedMedia.EmbedMedia(string).url 'Guilded.Base.Embeds.EmbedMedia.EmbedMedia(string).url') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

### See Also
- [EmbedMedia](EmbedMedia 'Guilded.Base.Embeds.EmbedMedia')
- [EmbedMedia(Uri)](EmbedMedia.EmbedMedia(Uri) 'Guilded.Base.Embeds.EmbedMedia.EmbedMedia(Uri)')