---
title: EmbedMedia
layout: references
section: references
tags:
  - references
  - class
description: "

The media found in an embed.

```csharp
public class EmbedMedia : Guilded.NET.Base.BaseObject
```"
---

## EmbedMedia Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Embeds`](Guilded.NET.Base.Embeds 'Guilded.NET.Base.Embeds')

The media found in an embed.

```csharp
public class EmbedMedia : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; EmbedMedia

### Remarks
  
Represents an image, a thumbnail or a video in an embed that can have its defined dimensions with [Width](EmbedMedia.Width 'Guilded.NET.Base.Embeds.EmbedMedia.Width') and [Height](EmbedMedia.Height 'Guilded.NET.Base.Embeds.EmbedMedia.Height') properties.

| Constructors | |
| :--- | :--- |
| [EmbedMedia(string, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](EmbedMedia.EmbedMedia(string,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string, System.Nullable<uint>, System.Nullable<uint>)') | Creates a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') with optional size parameters. |
| [EmbedMedia(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](EmbedMedia.EmbedMedia(Uri,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(System.Uri, System.Nullable<uint>, System.Nullable<uint>)') | Creates a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') with optional size parameters. |

| Properties | |
| :--- | :--- |
| [Height](EmbedMedia.Height 'Guilded.NET.Base.Embeds.EmbedMedia.Height') | The height of the image/video. |
| [Url](EmbedMedia.Url 'Guilded.NET.Base.Embeds.EmbedMedia.Url') | The source URL to the image. |
| [Width](EmbedMedia.Width 'Guilded.NET.Base.Embeds.EmbedMedia.Width') | The width of the image/video. |

### See Also
- [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
- [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
- [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')