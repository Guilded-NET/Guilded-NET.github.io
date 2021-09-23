
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET')
## IEventInfo&lt;T&gt; Interface
The base interface for event info.  
```csharp
public interface IEventInfo<out T>
```

#### Type parameters
<a name='Guilded_NET_IEventInfo_T__T'></a>
`T`  
The type of the observable
  

Derived  
&#8627; [EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo&lt;T&gt;')  

| Properties | |
| :--- | :--- |
| [ArgumentType](IEventInfo_T__ArgumentType 'Guilded.NET.IEventInfo&lt;T&gt;.ArgumentType') | The type of the arguments that should be used.<br/> |
| [Observable](IEventInfo_T__Observable 'Guilded.NET.IEventInfo&lt;T&gt;.Observable') | A subscribable observable.<br/> |

| Methods | |
| :--- | :--- |
| [OnNext(object)](IEventInfo_T__OnNext(object) 'Guilded.NET.IEventInfo&lt;T&gt;.OnNext(object)') | Notifies observers with OnNext.<br/> |