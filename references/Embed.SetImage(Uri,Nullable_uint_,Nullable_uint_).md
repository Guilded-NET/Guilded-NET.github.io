---
title: SetImage(Uri, Nullable<uint>, Nullable<uint>)
layout: references
section: references
tags:
  - references
  - method
description: "

Sets the embed image as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetImage(System.Uri url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```"
---

## Embed.SetImage(Uri, Nullable<uint>, Nullable<uint>) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Embed`](Embed 'Guilded.NET.Base.Embeds.Embed')

Sets the embed image as the given parameters.

```csharp
public Guilded.NET.Base.Embeds.Embed SetImage(System.Uri url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```

### Remarks
  
Sets [Image](Embed.Image 'Guilded.NET.Base.Embeds.Embed.Image') as a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') made from given parameter.
#### Parameters

<a name='Guilded.NET.Base.Embeds.Embed.SetImage(System.Uri,System.Nullable_uint_,System.Nullable_uint_).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The source URL of the image

<a name='Guilded.NET.Base.Embeds.Embed.SetImage(System.Uri,System.Nullable_uint_,System.Nullable_uint_).width'></a>

`width` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The width of the image

<a name='Guilded.NET.Base.Embeds.Embed.SetImage(System.Uri,System.Nullable_uint_,System.Nullable_uint_).height'></a>

`height` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The height of the image

#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance