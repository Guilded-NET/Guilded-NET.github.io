
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')
## GuildedSocketMessage.EventName Property

The name of the event received.
```csharp
public string EventName { get; set; }
```


#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Name?

### Remarks
  
This only has a value if [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `0`. It holds the name of the receiving Guilded event.