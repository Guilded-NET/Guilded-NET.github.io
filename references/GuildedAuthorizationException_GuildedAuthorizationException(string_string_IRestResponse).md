
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
## GuildedAuthorizationException(string, string, IRestResponse) Constructor

Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with information from given parameters.
```csharp
public GuildedAuthorizationException(string code, string message, RestSharp.IRestResponse response);
```

#### Parameters

<a name='Guilded_NET_Base_GuildedAuthorizationException_GuildedAuthorizationException(string_string_RestSharp_IRestResponse)_code'></a>
`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded_NET_Base_GuildedAuthorizationException_GuildedAuthorizationException(string_string_RestSharp_IRestResponse)_message'></a>
`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded_NET_Base_GuildedAuthorizationException_GuildedAuthorizationException(string_string_RestSharp_IRestResponse)_response'></a>
`response` [RestSharp.IRestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.IRestResponse 'RestSharp.IRestResponse')

The response that was received from Guilded API