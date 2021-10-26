
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedResourceException Class

A resource exception thrown by Guilded API.
```csharp
public sealed class GuildedResourceException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#x27A1; GuildedResourceException

### Remarks
  
An exception thrown by Guilded API when the request has invalid path. This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't updated endpoints.

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')

| Constructors | |
| :--- | :--- |
| [GuildedResourceException()](GuildedResourceException_GuildedResourceException() 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException()') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with default message. |
| [GuildedResourceException(string, string, IRestResponse)](GuildedResourceException_GuildedResourceException(string_string_IRestResponse) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.IRestResponse)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with information from given parameters. |
| [GuildedResourceException(string, Exception)](GuildedResourceException_GuildedResourceException(string_Exception) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with inner exception explaining more. |
| [GuildedResourceException(string)](GuildedResourceException_GuildedResourceException(string) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException'). |
