---
title: Opcode
layout: references
section: references
tags:
  - references
  - property
description: "

An operation code that tells about the message.

```csharp
public byte Opcode { get; }
```"
---

## GuildedSocketMessage.Opcode Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

An operation code that tells about the message.

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
|Closing/error frame|  
  
  
If [Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is received as `8`, [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') will be received instead of a typical event.

#### Property Value
[System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
Opcode