
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
## EmbedAuthor(string, string, string) Constructor

Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url').
```csharp
public EmbedAuthor(string name, string iconUrl=null, string url=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the embed author

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_iconUrl'></a>
`iconUrl` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL to author's icon

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_url'></a>
`url` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The URL that author links


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[name](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_name 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).name'), [url](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url') or [iconUrl](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_iconUrl 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).iconUrl') are [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace

[System.UriFormatException](https://docs.microsoft.com/en-us/dotnet/api/System.UriFormatException 'System.UriFormatException')  
[url](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).url') or [iconUrl](EmbedAuthor_EmbedAuthor(string_string_string)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_string_string)_iconUrl 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, string, string).iconUrl') have bad [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') formatting