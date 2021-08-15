
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Events](index#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')
## GuildedEvent.Opcode Property
An operation code that tells about the event, which was received.  
```csharp
public uint Opcode { get; set; }
```

#### Property Value
[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')
Opcode
### Remarks
<list type="table">
  <listheader>
    <term>Opcode</term>
    <description>Description</description>
  </listheader>
  <item>
    <term>
      <c>0</c>
    </term>
    <description>An event with data associated.</description>
  </item>
  <item>
    <term>
      <c>1</c>
    </term>
    <description>An event that occurs once WebSocket connection is established.</description>
  </item>
  <item>
    <term>
      <c>2</c>
    </term>
    <description>An event that occurs once connection is re-established with passed last event.</description>
  </item>
  <item>
    <term>
      <c>8</c>
    </term>
    <description>Unknown</description>
  </item>
  <item>
    <term>
      <c>9</c>
    </term>
    <description>Unknown</description>
  </item>
</list>
