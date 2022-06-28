---
title: Opcode
layout: references
section: references
tags:
  - references
  - property
description: "

Gets an operation code that tells about the message."
---

## GuildedSocketMessage.Opcode Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

Gets an operation code that tells about the message.

```csharp
public Guilded.Base.Events.SocketOpcode Opcode { get; }
```

### Remarks
  
If [Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') is received as `8`, [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') will be received instead of a typical event.

#### Property Value
[SocketOpcode](SocketOpcode 'Guilded.Base.Events.SocketOpcode')  
[Opcode](SocketOpcode 'Guilded.Base.Events.SocketOpcode')

### See Also
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [EventName](GuildedSocketMessage.EventName 'Guilded.Base.Events.GuildedSocketMessage.EventName')
- [RawData](GuildedSocketMessage.RawData 'Guilded.Base.Events.GuildedSocketMessage.RawData')