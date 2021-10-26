
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
## EmbedFooter(string, string) Constructor

Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter_EmbedFooter(string_string)#Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_string)_text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).text').
```csharp
public EmbedFooter(string text, string iconUrl);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_string)_text'></a>
`text` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the footer

<a name='Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_string)_iconUrl'></a>
`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL to footer's icon


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[iconUrl](EmbedFooter_EmbedFooter(string_string)#Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_string)_iconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).iconUrl') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[iconUrl](EmbedFooter_EmbedFooter(string_string)#Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_string)_iconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, string).iconUrl') has bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting