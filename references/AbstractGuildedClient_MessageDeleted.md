
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MessageDeleted Property

An event that occurs once someone deletes a message.
```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageDeletedEvent](https://guilded-net.github.io/references/MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

### See Also
- [MessageCreatedEvent](https://guilded-net.github.io/references/MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](https://guilded-net.github.io/references/MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeleted](https://guilded-net.github.io/references/MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')
- [Message](https://guilded-net.github.io/references/Message 'Guilded.NET.Base.Content.Message')