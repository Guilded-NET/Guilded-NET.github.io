---
title: SetThumbnail(Uri, Nullable<uint>, Nullable<uint>)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the thumbnail as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetThumbnail(System.Uri url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```"
---

## Embed.SetThumbnail(Uri, Nullable<uint>, Nullable<uint>) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the thumbnail as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetThumbnail(System.Uri url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```

### Remarks
  
Sets [Thumbnail](Embed.Thumbnail 'Guilded.NET.Base.Embeds.Embed.Thumbnail') as a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') made from given parameters.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetThumbnail(System.Uri,System.Nullable_uint_,System.Nullable_uint_).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The source URL of the thumbnail image

<a name='Guilded.NET.Base.Embeds.Embed.SetThumbnail(System.Uri,System.Nullable_uint_,System.Nullable_uint_).width'></a>

`width` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The width of the image

<a name='Guilded.NET.Base.Embeds.Embed.SetThumbnail(System.Uri,System.Nullable_uint_,System.Nullable_uint_).height'></a>

`height` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The height of the image

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance