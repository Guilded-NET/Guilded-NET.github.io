---
title: EmbedMedia(string, Nullable<uint>, Nullable<uint>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') with optional size parameters.

```csharp
public EmbedMedia(string url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```"
---

## EmbedMedia(string, Nullable<uint>, Nullable<uint>) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`EmbedMedia`](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')

Creates a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') with optional size parameters.

```csharp
public EmbedMedia(string url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```
#### Parameters

<a name='Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string,System.Nullable_uint_,System.Nullable_uint_).url'></a>

`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The source URL to the image

<a name='Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string,System.Nullable_uint_,System.Nullable_uint_).width'></a>

`width` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The width of the image

<a name='Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string,System.Nullable_uint_,System.Nullable_uint_).height'></a>

`height` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The height of the image

#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[url](EmbedMedia.EmbedMedia(string,Nullable_uint_,Nullable_uint_)#Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string,System.Nullable_uint_,System.Nullable_uint_).url 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string, System.Nullable<uint>, System.Nullable<uint>).url') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](EmbedMedia.EmbedMedia(string,Nullable_uint_,Nullable_uint_)#Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string,System.Nullable_uint_,System.Nullable_uint_).url 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string, System.Nullable<uint>, System.Nullable<uint>).url') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting