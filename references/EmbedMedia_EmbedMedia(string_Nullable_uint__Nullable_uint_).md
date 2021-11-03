
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')
## EmbedMedia(string, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;) Constructor

Creates a new instance of [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') with optional size parameters.
```csharp
public EmbedMedia(string url, System.Nullable<uint> width=null, System.Nullable<uint> height=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_EmbedMedia_EmbedMedia(string_System_Nullable_uint__System_Nullable_uint_)_url'></a>
`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The source URL to the image

<a name='Guilded_NET_Base_Embeds_EmbedMedia_EmbedMedia(string_System_Nullable_uint__System_Nullable_uint_)_width'></a>
`width` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The width of the image

<a name='Guilded_NET_Base_Embeds_EmbedMedia_EmbedMedia(string_System_Nullable_uint__System_Nullable_uint_)_height'></a>
`height` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The height of the image


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[url](EmbedMedia_EmbedMedia(string_Nullable_uint__Nullable_uint_)#Guilded_NET_Base_Embeds_EmbedMedia_EmbedMedia(string_System_Nullable_uint__System_Nullable_uint_)_url 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string, System.Nullable&lt;uint&gt;, System.Nullable&lt;uint&gt;).url') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](EmbedMedia_EmbedMedia(string_Nullable_uint__Nullable_uint_)#Guilded_NET_Base_Embeds_EmbedMedia_EmbedMedia(string_System_Nullable_uint__System_Nullable_uint_)_url 'Guilded.NET.Base.Embeds.EmbedMedia.EmbedMedia(string, System.Nullable&lt;uint&gt;, System.Nullable&lt;uint&gt;).url') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting