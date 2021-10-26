
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetFooter(object, string) Method

Sets the footer as the given parameters.
```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(object text, string iconUrl=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetFooter(object_string)_text'></a>
`text` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The text of the footer

<a name='Guilded_NET_Base_Embeds_Embed_SetFooter(object_string)_iconUrl'></a>
`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The icon of the footer


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[iconUrl](Embed_SetFooter(object_string)#Guilded_NET_Base_Embeds_Embed_SetFooter(object_string)_iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).iconUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[iconUrl](Embed_SetFooter(object_string)#Guilded_NET_Base_Embeds_Embed_SetFooter(object_string)_iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).iconUrl') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

### Remarks
  
Sets [Footer](Embed_Footer 'Guilded.NET.Base.Embeds.Embed.Footer') as a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') made from given parameters. The text will be set as string equivalent to [text](Embed_SetFooter(object_string)#Guilded_NET_Base_Embeds_Embed_SetFooter(object_string)_text 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string).text').