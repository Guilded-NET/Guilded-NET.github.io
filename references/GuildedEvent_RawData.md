
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')
## GuildedEvent.RawData Property
The data associated with the event.  
```csharp
public JObject RawData { get; set; }
```

#### Property Value
[Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')
Object?
### Remarks
The data associated with the receiving event.



Holds data of most events, including [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'),  
[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') and [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException'). Only if [Opcode](GuildedEvent_Opcode 'Guilded.NET.Base.Events.GuildedEvent.Opcode')  
is 9, this will be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').
