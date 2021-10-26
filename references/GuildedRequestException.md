
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedRequestException Class

A bad request exception thrown by Guilded API.
```csharp
public sealed class GuildedRequestException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#x27A1; GuildedRequestException

### Remarks
  
An exception thrown by Guilded API when the request is invalid/bad. This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Outdated methods — If you are using newer version of API and older incompatible methods, this can lead to an exception. This would rarely be the case, but still a possibility.  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't changed methods yet.

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')

| Constructors | |
| :--- | :--- |
| [GuildedRequestException()](GuildedRequestException_GuildedRequestException() 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException()') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with default message. |
| [GuildedRequestException(string, string, IRestResponse)](GuildedRequestException_GuildedRequestException(string_string_IRestResponse) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.IRestResponse)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters. |
| [GuildedRequestException(string, Exception)](GuildedRequestException_GuildedRequestException(string_Exception) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with inner exception explaining more. |
| [GuildedRequestException(string)](GuildedRequestException_GuildedRequestException(string) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException'). |
