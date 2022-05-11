---
title: GuildedWebsocketException(ResponseMessage, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') from WebSocket [message](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string).message')."
---

## GuildedWebsocketException(ResponseMessage, string) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedWebsocketException`](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')

Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') from WebSocket [message](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string).md#Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).message 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string).message').

```csharp
public GuildedWebsocketException(Websocket.Client.ResponseMessage response, string message);
```
#### Parameters

<a name='Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).response'></a>

`response` [Websocket.Client.ResponseMessage](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.ResponseMessage 'Websocket.Client.ResponseMessage')

The response message from Guilded WebSocket

<a name='Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The message that was received from Guilded Websocket