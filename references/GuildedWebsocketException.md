---
title: GuildedWebsocketException
layout: references
section: references
tags:
  - references
  - class
description: "

An error received from Guilded WebSocket.

```csharp
public class GuildedWebsocketException : System.Exception
```"
---

## GuildedWebsocketException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An error received from Guilded WebSocket.

```csharp
public class GuildedWebsocketException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; GuildedWebsocketException

### Remarks
  
An error that occurs involving WebSockets. This error can occur in these different ways:  
- Expired last event message identifier — When the passed `guilded-last-message-id` is expired or invalid.  
  
In API, this is a WebSocket event with an opcode of `8` and no name.

| Constructors | |
| :--- | :--- |
| [GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException() 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException()') | Creates a new empty instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException'). |
| [GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received. |
| [GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received. |
| [GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)') | Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') from WebSocket response message. |

| Properties | |
| :--- | :--- |
| [Response](GuildedWebsocketException.Response 'Guilded.NET.Base.GuildedWebsocketException.Response') | The response message from Guilded WebSocket. |

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')