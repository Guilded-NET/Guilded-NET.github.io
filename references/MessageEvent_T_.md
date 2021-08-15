#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base.md#Guilded_NET_Base_Events 'Guilded.NET.Base.Events')
## MessageEvent&lt;T&gt; Class
The base for message-related events.  
```csharp
public class MessageEvent<T> : Guilded.NET.Base.BaseObject,
Guilded.NET.Base.Events.ITeamEvent
    where T : Guilded.NET.Base.Chat.BaseMessage
```
#### Type parameters
<a name='Guilded_NET_Base_Events_MessageEvent_T__T'></a>
`T`  
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; MessageEvent&lt;T&gt;  

Derived  
&#8627; [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.NET.Base.Events.MessageDeletedEvent')  
&#8627; [MessageEvent](MessageEvent.md 'Guilded.NET.Base.Events.MessageEvent')  

Implements [ITeamEvent](ITeamEvent.md 'Guilded.NET.Base.Events.ITeamEvent')  

| Properties | |
| :--- | :--- |
| [ChannelId](MessageEvent_T__ChannelId.md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.ChannelId') | The identifier of the channel where the message was posted.<br/> |
| [Message](MessageEvent_T__Message.md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.Message') | The message received from the event.<br/> |

| Methods | |
| :--- | :--- |
| [RespondAsync(MessageContent)](MessageEvent_T__RespondAsync(MessageContent).md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.RespondAsync(Guilded.NET.Base.Chat.MessageContent)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(object)](MessageEvent_T__RespondAsync(object).md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.RespondAsync(object)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(string, object[])](MessageEvent_T__RespondAsync(string_object__).md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.RespondAsync(string, object[])') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(string)](MessageEvent_T__RespondAsync(string).md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.RespondAsync(string)') | Creates a new message in same channel as a response.<br/> |
| [RespondAsync(IFormatProvider, string, object[])](MessageEvent_T__RespondAsync(IFormatProvider_string_object__).md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.RespondAsync(System.IFormatProvider, string, object[])') | Creates a new message in same channel as a response.<br/> |
#### See Also
- [Message](MessageEvent_T__Message.md 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;.Message')
- [MessageCreatedEvent](MessageCreatedEvent.md 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent.md 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.NET.Base.Events.MessageDeletedEvent')
