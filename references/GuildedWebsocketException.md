
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## GuildedWebsocketException Class
An error received from Guilded WebSocket.  
```csharp
public class GuildedWebsocketException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#x27A1; GuildedWebsocketException  
### Remarks
An error that occurs involving WebSockets. This error can occur in these different ways:

<list type="bullet">  
  <item>  
    <term>Expired last event message identifier</term>  
    <description>When the passed <c>guilded-last-message-id</c> is expired or invalid.</description>  
  </item>  
</list>

In API, this is a WebSocket event with an opcode of `8` and no name.

| Constructors | |
| :--- | :--- |
| [GuildedWebsocketException()](GuildedWebsocketException_GuildedWebsocketException() 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException()') | Creates a new empty instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException').<br/> |
| [GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException_GuildedWebsocketException(ResponseMessage_string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(ResponseMessage, string)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') from WebSocket response message.<br/> |
| [GuildedWebsocketException(string, Exception)](GuildedWebsocketException_GuildedWebsocketException(string_Exception) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received.<br/> |
| [GuildedWebsocketException(string)](GuildedWebsocketException_GuildedWebsocketException(string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received.<br/> |

| Properties | |
| :--- | :--- |
| [Response](GuildedWebsocketException_Response 'Guilded.NET.Base.GuildedWebsocketException.Response') | The response message from Guilded WebSocket.<br/> |

#### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
