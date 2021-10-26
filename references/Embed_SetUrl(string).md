
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')
## Embed.SetUrl(string) Method

Sets the url as a given parameter.
```csharp
public Guilded.NET.Base.Embeds.Embed SetUrl(string url);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_Embed_SetUrl(string)_url'></a>
`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL that title will link


#### Returns
[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')  
Current [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') instance


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[url](Embed_SetUrl(string)#Guilded_NET_Base_Embeds_Embed_SetUrl(string)_url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](Embed_SetUrl(string)#Guilded_NET_Base_Embeds_Embed_SetUrl(string)_url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting

### Remarks
  
Creates a new [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') instance from [url](Embed_SetUrl(string)#Guilded_NET_Base_Embeds_Embed_SetUrl(string)_url 'Guilded.NET.Base.Embeds.Embed.SetUrl(string).url') parameter and sets it to [Url](Embed_Url 'Guilded.NET.Base.Embeds.Embed.Url') property.