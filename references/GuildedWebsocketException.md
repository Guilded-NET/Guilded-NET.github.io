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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

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
| [GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException().md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException()') | Initializes a new empty instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException'). |
| [GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with an [inner](GuildedWebsocketException.GuildedWebsocketException(string,Exception).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string,System.Exception).inner 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception).inner') explaining more. |
| [GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with a [message](GuildedWebsocketException.GuildedWebsocketException(string).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string).message'). |
| [GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)') | Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') from WebSocket [message](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string).message'). |

| Properties | |
| :--- | :--- |
| [Response](GuildedWebsocketException.Response.md 'Guilded.Base.GuildedWebsocketException.Response') | Gets the response message from Guilded WebSocket. |

### See Also
- [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')
- [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')
- [GuildedException](GuildedException.md 'Guilded.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')