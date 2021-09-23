
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')
## GuildedEvent.MessageId Property
An identifier that allows the event to be replayed.  
```csharp
public string MessageId { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
Event ID?
### Remarks
The identifier of the event message.



This can be passed to [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)'),  
which will give all of the events that were supposed to be received after this event.



This property only holds value if [Opcode](GuildedEvent_Opcode 'Guilded.NET.Base.Events.GuildedEvent.Opcode') is `0`.
