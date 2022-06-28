---
title: SocketOpcode
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents [the opcodes](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') in Guilded's WebSocket."
---

## SocketOpcode Enum
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents [the opcodes](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') in Guilded's WebSocket.

```csharp
public enum SocketOpcode
```
### Fields

<a name='Guilded.Base.Events.SocketOpcode.Activity'></a>

`Activity` 0

The message is an event that occurred in Guilded and has associated data with it.

### See Also
- [Welcome](SocketOpcode#Guilded.Base.Events.SocketOpcode.Welcome 'Guilded.Base.Events.SocketOpcode.Welcome')
- [Resume](SocketOpcode#Guilded.Base.Events.SocketOpcode.Resume 'Guilded.Base.Events.SocketOpcode.Resume')
- [InvalidCursor](SocketOpcode#Guilded.Base.Events.SocketOpcode.InvalidCursor 'Guilded.Base.Events.SocketOpcode.InvalidCursor')
- [InternalError](SocketOpcode#Guilded.Base.Events.SocketOpcode.InternalError 'Guilded.Base.Events.SocketOpcode.InternalError')

<a name='Guilded.Base.Events.SocketOpcode.InternalError'></a>

`InternalError` 9

The message is an internal server error that occurred for unknown/specific reasons.

<a name='Guilded.Base.Events.SocketOpcode.InvalidCursor'></a>

`InvalidCursor` 8

The message is an error that occurred due to invalid parameters or format.

<a name='Guilded.Base.Events.SocketOpcode.Resume'></a>

`Resume` 2

The message is a resume message, which means that all events that were missed got returned.

<a name='Guilded.Base.Events.SocketOpcode.Welcome'></a>

`Welcome` 1

The message is a welcome handshake, which means that the WebSocket has been successfully established.

### See Also
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')