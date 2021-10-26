
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetFooter(string, string) Method

Sets the footer as the given parameters.
```csharp
public Guilded.NET.Base.Embeds.Embed SetFooter(string text, string iconUrl=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetFooter(string_string)_text'></a>
`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text of the footer

<a name='Guilded_NET_Base_Embeds_Embed_SetFooter(string_string)_iconUrl'></a>
`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The icon of the footer


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[iconUrl](Embed_SetFooter(string_string)#Guilded_NET_Base_Embeds_Embed_SetFooter(string_string)_iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(string, string).iconUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[iconUrl](Embed_SetFooter(string_string)#Guilded_NET_Base_Embeds_Embed_SetFooter(string_string)_iconUrl 'Guilded.NET.Base.Embeds.Embed.SetFooter(string, string).iconUrl') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

### Remarks
  
Sets [Footer](Embed_Footer 'Guilded.NET.Base.Embeds.Embed.Footer') as a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') made from given parameters.