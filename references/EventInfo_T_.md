
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET')
## EventInfo&lt;T&gt; Class
Defines a Guilded event.  
```csharp
public class EventInfo<T> :
Guilded.NET.IEventInfo<T>
```

#### Type parameters
<a name='Guilded_NET_EventInfo_T__T'></a>
`T`  
The type of the event that will be received. Used in [Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject') and [Observable](EventInfo_T__Observable 'Guilded.NET.EventInfo&lt;T&gt;.Observable')
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; EventInfo&lt;T&gt;  

Implements [Guilded.NET.IEventInfo&lt;](IEventInfo_T_ 'Guilded.NET.IEventInfo&lt;T&gt;')[T](EventInfo_T_#Guilded_NET_EventInfo_T__T 'Guilded.NET.EventInfo&lt;T&gt;.T')[&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo&lt;T&gt;')  
### Remarks
Defines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient_GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents')



The event can be subscribed via [Observable](EventInfo_T__Observable 'Guilded.NET.EventInfo&lt;T&gt;.Observable').

| Constructors | |
| :--- | :--- |
| [EventInfo()](EventInfo_T__EventInfo() 'Guilded.NET.EventInfo&lt;T&gt;.EventInfo()') | Creates a new Guilded event.<br/> |

| Fields | |
| :--- | :--- |
| [Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject') | A subject that will be used as an observable.<br/> |

| Properties | |
| :--- | :--- |
| [ArgumentType](EventInfo_T__ArgumentType 'Guilded.NET.EventInfo&lt;T&gt;.ArgumentType') | The type of the arguments that should be used.<br/> |
| [Observable](EventInfo_T__Observable 'Guilded.NET.EventInfo&lt;T&gt;.Observable') | A subscribable observable.<br/> |

| Methods | |
| :--- | :--- |
| [OnError(Exception)](EventInfo_T__OnError(Exception) 'Guilded.NET.EventInfo&lt;T&gt;.OnError(System.Exception)') | Notifies observers with OnError.<br/> |
| [OnNext(object)](EventInfo_T__OnNext(object) 'Guilded.NET.EventInfo&lt;T&gt;.OnNext(object)') | Notifies observers with OnNext.<br/> |
