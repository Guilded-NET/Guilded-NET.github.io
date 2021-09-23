
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedAuthorizationException Class
An authorization exception thrown by Guilded API.  
```csharp
public sealed class GuildedAuthorizationException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#x27A1; GuildedAuthorizationException  
### Remarks
An exception thrown by Guilded API when the request is invalid. This is caused if you are trying to connect to Guilded or do an action with invalid or expired authentication token. The only solution is to create a new authentication token and use it instead.

| Constructors | |
| :--- | :--- |
| [GuildedAuthorizationException()](GuildedAuthorizationException_GuildedAuthorizationException() 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException()') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with default message.<br/> |
| [GuildedAuthorizationException(string, string, IRestResponse)](GuildedAuthorizationException_GuildedAuthorizationException(string_string_IRestResponse) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, IRestResponse)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with information from given parameters.<br/> |
| [GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException_GuildedAuthorizationException(string_Exception) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with inner exception explaining more.<br/> |
| [GuildedAuthorizationException(string)](GuildedAuthorizationException_GuildedAuthorizationException(string) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException').<br/> |

#### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
