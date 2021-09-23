
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MessageCreated Property
An event that occurs once someone creates a message.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageCreatedEvent> MessageCreated { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once someone creates/posts a message in the chat. When receiving this event, [UpdatedAt](Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will never hold a value.



In API, this event is called `ChatMessageCreated`.

#### See Also
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
