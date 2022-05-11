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
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage')

Gets an operation code that tells about the message.

```csharp
public byte Opcode { get; }
```

### Remarks
  
Opcodes are defined as following:  
  
|Opcode|  
|-|  
|An event with data associated.|  
|An event that occurs once WebSocket connection is established.|  
|An event that occurs once connection is re-established with passed last event.|  
|Error|  
  
  
If [Opcode](GuildedSocketMessage.Opcode.md 'Guilded.Base.Events.GuildedSocketMessage.Opcode') is received as `8`, [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') will be received instead of a typical event.

#### Property Value
[System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
Opcode