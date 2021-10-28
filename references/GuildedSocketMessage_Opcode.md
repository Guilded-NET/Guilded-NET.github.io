
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')
## GuildedSocketMessage.Opcode Property

An operation code that tells about the message.
```csharp
public byte Opcode { get; set; }
```


#### Property Value
[System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
Opcode

### Remarks
  
Opcodes are defined as following:

|Opcode|Description|  
|-|-|  
|0|An event with data associated.|  
|1|An event that occurs once WebSocket connection is established.|  
|2|An event that occurs once connection is re-established with passed last event.|  
|8|Closing/error frame|  
|9|RFC6455 Ping frame|  
|10|RFC6455 Pong frame|  
  
If [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is received as `8`, [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') will be received instead of a typical event.