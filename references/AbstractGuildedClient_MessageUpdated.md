
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MessageUpdated Property
An event that occurs once someone edits a message.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageUpdatedEvent> MessageUpdated { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once someone updates/edits a message in the chat.



When receiving this event, [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will always hold a value.



In API, this event is called `ChatMessageUpdated`.

#### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
