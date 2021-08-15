#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base.md#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedMedia](EmbedMedia.md 'Guilded.NET.Base.Embeds.EmbedMedia')
## EmbedMedia.CreateOrNull(Uri) Method
Creates [EmbedMedia](EmbedMedia.md 'Guilded.NET.Base.Embeds.EmbedMedia') if URL isn't null.  
```csharp
internal static Guilded.NET.Base.Embeds.EmbedMedia CreateOrNull(System.Uri url);
```
#### Parameters
<a name='Guilded_NET_Base_Embeds_EmbedMedia_CreateOrNull(System_Uri)_url'></a>
`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
The source URL to the image
  
#### Returns
[EmbedMedia](EmbedMedia.md 'Guilded.NET.Base.Embeds.EmbedMedia')  
[EmbedMedia](EmbedMedia.md 'Guilded.NET.Base.Embeds.EmbedMedia')?
### Remarks
Checks if URL is not null and then creates [EmbedMedia](EmbedMedia.md 'Guilded.NET.Base.Embeds.EmbedMedia') instance. Used for Embed constructor.  
