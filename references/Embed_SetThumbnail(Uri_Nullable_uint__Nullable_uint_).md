
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetThumbnail(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;) Method

Sets the thumbnail as the given parameters.
```csharp
public Guilded.NET.Base.Embeds.Embed SetThumbnail(System.Uri url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetThumbnail(System_Uri_System_Nullable_uint__System_Nullable_uint_)_url'></a>
`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The source URL of the thumbnail image

<a name='Guilded_NET_Base_Embeds_Embed_SetThumbnail(System_Uri_System_Nullable_uint__System_Nullable_uint_)_width'></a>
`width` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The width of the image

<a name='Guilded_NET_Base_Embeds_Embed_SetThumbnail(System_Uri_System_Nullable_uint__System_Nullable_uint_)_height'></a>
`height` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The height of the image


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance

### Remarks
  
Sets [Thumbnail](Embed_Thumbnail 'Guilded.NET.Base.Embeds.Embed.Thumbnail') as a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') made from given parameters.