---
title: Websocket
layout: references
section: references
tags:
  - references
  - property
description: "

The WebSocket that will be used by the client."
---

## BaseGuildedClient.Websocket Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

The WebSocket that will be used by the client.

```csharp
public Websocket.Client.WebsocketClient Websocket { get; set; }
```

### Remarks
  
The WebSocket that will be used by the client to receive all Guilded events and event messages.

#### Property Value
[Websocket.Client.WebsocketClient](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.WebsocketClient 'Websocket.Client.WebsocketClient')  
Main WebSocket

### See Also
- [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest')