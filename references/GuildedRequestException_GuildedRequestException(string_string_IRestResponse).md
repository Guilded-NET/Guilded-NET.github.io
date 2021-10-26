
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
## GuildedRequestException(string, string, IRestResponse) Constructor

Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters.
```csharp
public GuildedRequestException(string code, string message, RestSharp.IRestResponse response);
```

#### Parameters

<a name='Guilded_NET_Base_GuildedRequestException_GuildedRequestException(string_string_RestSharp_IRestResponse)_code'></a>
`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded_NET_Base_GuildedRequestException_GuildedRequestException(string_string_RestSharp_IRestResponse)_message'></a>
`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded_NET_Base_GuildedRequestException_GuildedRequestException(string_string_RestSharp_IRestResponse)_response'></a>
`response` [RestSharp.IRestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse 'RestSharp.IRestResponse')

The response that was received from Guilded API