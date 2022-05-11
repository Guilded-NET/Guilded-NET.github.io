---
title: OnWebsocketResponse(ResponseMessage)
layout: references
section: references
tags:
  - references
  - method
description: "

Used for when any WebSocket receives a message."
---

## BaseGuildedClient.OnWebsocketResponse(ResponseMessage) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Used for when any WebSocket receives a message.

```csharp
protected virtual void OnWebsocketResponse(Websocket.Client.ResponseMessage response);
```

### Remarks
  
An event handler method that gets called once any message is received from a WebSocket.  
  
Override this if you don't like how Guilded.NET handles events or need any additional changes/features to it.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage).response'></a>

`response` [Websocket.Client.ResponseMessage](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.ResponseMessage 'Websocket.Client.ResponseMessage')

The response received from Guilded WebSocket