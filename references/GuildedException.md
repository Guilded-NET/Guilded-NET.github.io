
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedException Class
An exception thrown by Guilded API.  
```csharp
public class GuildedException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; GuildedException  

Derived  
&#8627; [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
&#8627; [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
&#8627; [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')  
&#8627; [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
### Remarks
A base exception type for Guilded.



This should not usually be thrown and instead, children types of  
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') should be thrown instead. If you see it get thrown, this is  
most likely due to internal server error or some kind of other unknown exception.



If you get internal server error, make sure you are doing everything right as  
documented or noted.

| Constructors | |
| :--- | :--- |
| [GuildedException()](GuildedException_GuildedException() 'Guilded.NET.Base.GuildedException.GuildedException()') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with default message.<br/> |
| [GuildedException(string, string, IRestResponse)](GuildedException_GuildedException(string_string_IRestResponse) 'Guilded.NET.Base.GuildedException.GuildedException(string, string, IRestResponse)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters.<br/> |
| [GuildedException(string, Exception)](GuildedException_GuildedException(string_Exception) 'Guilded.NET.Base.GuildedException.GuildedException(string, System.Exception)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with inner exception explaining more.<br/> |
| [GuildedException(string)](GuildedException_GuildedException(string) 'Guilded.NET.Base.GuildedException.GuildedException(string)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException').<br/> |
| [GuildedException(SerializationInfo, StreamingContext)](GuildedException_GuildedException(SerializationInfo_StreamingContext) 'Guilded.NET.Base.GuildedException.GuildedException(System.Runtime.Serialization.SerializationInfo, System.Runtime.Serialization.StreamingContext)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with serialization information.<br/> |

| Properties | |
| :--- | :--- |
| [Code](GuildedException_Code 'Guilded.NET.Base.GuildedException.Code') | The code name of Guilded error.<br/> |
| [Response](GuildedException_Response 'Guilded.NET.Base.GuildedException.Response') | The response that was received from Guilded API.<br/> |
| [StatusCode](GuildedException_StatusCode 'Guilded.NET.Base.GuildedException.StatusCode') | The HTTP status that was found in the response.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](GuildedException_ToString() 'Guilded.NET.Base.GuildedException.ToString()') | Returns string representation of the exception thrown.<br/> |

#### See Also
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')
