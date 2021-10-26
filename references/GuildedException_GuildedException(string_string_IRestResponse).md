
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
## GuildedException(string, string, IRestResponse) Constructor

Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters.
```csharp
public GuildedException(string code, string message, RestSharp.IRestResponse response);
```

#### Parameters

<a name='Guilded_NET_Base_GuildedException_GuildedException(string_string_RestSharp_IRestResponse)_code'></a>
`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded_NET_Base_GuildedException_GuildedException(string_string_RestSharp_IRestResponse)_message'></a>
`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded_NET_Base_GuildedException_GuildedException(string_string_RestSharp_IRestResponse)_response'></a>
`response` [RestSharp.IRestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse 'RestSharp.IRestResponse')

The response that was received from Guilded API