
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
## ResumeEvent.MessageId Property
The identifier of the last received event.  
```csharp
public string MessageId { get; set; }
```

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')
Event message ID
### Remarks
Gets the identifier of the last received event message that was passed in `guilded-last-message-id`.



You can get the identifier of the event message by using [MessageId](GuildedSocketMessage_MessageId 'Guilded.NET.Base.Events.GuildedSocketMessage.MessageId') property from events.
