
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')
## GuildedSocketMessage.RawData Property
The data associated with the event.  
```csharp
public JObject RawData { get; set; }
```

#### Property Value
[Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')
Object?
### Remarks
The data associated with the receiving event/message. Holds the data of most messages, including [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'), [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') and [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException'). Only if [Opcode](GuildedSocketMessage_Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `9`, this will be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').
