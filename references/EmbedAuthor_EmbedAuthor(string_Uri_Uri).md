
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds').[EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
## EmbedAuthor(string, Uri, Uri) Constructor

Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor_EmbedAuthor(string_Uri_Uri)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri).url').
```csharp
public EmbedAuthor(string name, System.Uri iconUrl=null, System.Uri url=null);
```

#### Parameters

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the embed author

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_iconUrl'></a>
`iconUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to author's icon

<a name='Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_url'></a>
`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL that author links


#### Exceptions

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
[name](EmbedAuthor_EmbedAuthor(string_Uri_Uri)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_name 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri).name') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or whitespace