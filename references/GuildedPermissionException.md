
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedPermissionException Class
A permission exception thrown by Guilded API.  
```csharp
public sealed class GuildedPermissionException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#x27A1; GuildedPermissionException  
### Remarks
An exception thrown by Guilded API when request is invalid.



This is caused if you are trying to access or do an action that requires permissions,  
but you don't have them. This can only be fixed by getting said permissions by a server staff  
and is usually not controlled by you.

| Constructors | |
| :--- | :--- |
| [GuildedPermissionException()](GuildedPermissionException_GuildedPermissionException() 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException()') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with default message.<br/> |
| [GuildedPermissionException(string, string, IRestResponse)](GuildedPermissionException_GuildedPermissionException(string_string_IRestResponse) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, string, IRestResponse)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with information from given parameters.<br/> |
| [GuildedPermissionException(string, Exception)](GuildedPermissionException_GuildedPermissionException(string_Exception) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with inner exception explaining more.<br/> |
| [GuildedPermissionException(string)](GuildedPermissionException_GuildedPermissionException(string) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException').<br/> |

#### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
