
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')
## GuildedSocketMessage.Opcode Property
An operation code that tells about the message.  
```csharp
public uint Opcode { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
Opcode
### Remarks
Opcodes are defined as following:

<list type="table">  
  <listheader>  
    <term>Opcode</term>  
    <description>Description</description>  
  </listheader>  
  <item>  
    <term>0</term>  
    <description>An event with data associated.</description>  
  </item>  
  <item>  
    <term>1</term>  
    <description>An event that occurs once WebSocket connection is established.</description>  
  </item>  
  <item>  
    <term>2</term>  
    <description>An event that occurs once connection is re-established with passed last event.</description>  
  </item>  
  <item>  
    <term>8</term>  
    <description>An event that occurs once WebSocket-related error has been thrown</description>  
  </item>  
  <item>  
    <term>9</term>  
    <description>Unknown</description>  
  </item>  
</list>

If [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is received as `8`, [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') will be received instead of a typical event.
