---
title: GuildedWebsocketException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an error received from Guilded WebSocket."
---

## GuildedWebsocketException Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an error received from Guilded WebSocket.

```csharp
public class GuildedWebsocketException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; GuildedWebsocketException

### Remarks
  
This error can occur in these different ways:  
- Expired last event message identifier — When the passed `guilded-last-message-id` is expired or invalid.  
  
In API, this is a WebSocket event with an opcode of `8` and no name.

| Constructors | |
| :--- | :--- |
| [GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException() 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException()') | Initializes a new empty instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException'). |
| [GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') with an [inner](GuildedWebsocketException.GuildedWebsocketException(string,Exception)#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).inner 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception).inner') explaining more. |
| [GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') with a [message](GuildedWebsocketException.GuildedWebsocketException(string)#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string).message'). |
| [GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') from WebSocket [message](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string)#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string).message'). |

| Properties | |
| :--- | :--- |
| [Response](GuildedWebsocketException.Response 'Guilded.Base.GuildedWebsocketException.Response') | Gets the response message from Guilded WebSocket. |

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')