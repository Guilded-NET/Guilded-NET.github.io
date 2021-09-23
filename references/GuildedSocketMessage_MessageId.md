
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')
## GuildedSocketMessage.MessageId Property
An identifier that allows the event to be replayed.  
```csharp
public string MessageId { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
Event ID?
### Remarks
The identifier of the event message. This can be used in [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)'), which will give all of the events that were supposed to be received after this event.



This property only holds the value if [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `0`.
