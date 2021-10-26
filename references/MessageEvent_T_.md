
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageEvent&lt;T&gt; Class

The base for message-related events.
```csharp
public class MessageEvent<T> : Guilded.NET.Base.BaseObject
    where T : Guilded.NET.Base.BaseObject
```

#### Type parameters

<a name='Guilded_NET_Base_Events_MessageEvent_T__T'></a>
`T`

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; MessageEvent&lt;T&gt;

Derived  
&#8627; [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')  
&#8627; [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')

### See Also
- [Message](MessageEvent_T__Message 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.Message')
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')

| Properties | |
| :--- | :--- |
| [Message](MessageEvent_T__Message 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.Message') | The message received from the event. |
