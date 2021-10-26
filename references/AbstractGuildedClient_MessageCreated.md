
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.MessageCreated Property

An event that occurs once someone creates a message.
```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageCreatedEvent> MessageCreated { get; }
```


#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageCreatedEvent](https://guilded-net.github.io/references/MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### Remarks
  
An event of the name `ChatMessageCreated` and opcode `0` that occurs once someone creates/posts a message in the chat. When receiving this event, [UpdatedAt](https://guilded-net.github.io/references/Message_UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will never hold a value.

### See Also
- [MessageUpdatedEvent](https://guilded-net.github.io/references/MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](https://guilded-net.github.io/references/MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](https://guilded-net.github.io/references/Message 'Guilded.NET.Base.Content.Message')