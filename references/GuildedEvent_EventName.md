
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')
## GuildedEvent.EventName Property
The name of the event received.  
```csharp
public string EventName { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
Name?
### Remarks
This only has a value if [Opcode](GuildedEvent_Opcode 'Guilded.NET.Base.Events.GuildedEvent.Opcode') is `0`.



[EventName](GuildedEvent_EventName 'Guilded.NET.Base.Events.GuildedEvent.EventName') holds the name of the receiving Guilded event.
