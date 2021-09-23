
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MessageDeleted Property
An event that occurs once someone deletes a message.  
```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
### Remarks
An event that occurs once someone creates/posts a message in the chat.



In API, this event is called `ChatMessageDeleted`.

#### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')
