
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo&lt;T&gt;')
## EventInfo&lt;T&gt;.Observable Property
A subscribable observable.  
```csharp
public System.IObservable<T> Observable { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[T](EventInfo_T_#Guilded_NET_EventInfo_T__T 'Guilded.NET.EventInfo&lt;T&gt;.T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')
[Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject') as observable

Implements [Observable](IEventInfo_T__Observable 'Guilded.NET.IEventInfo&lt;T&gt;.Observable')  
### Remarks
An observable that can be subscribed to. The received event will be of type [T](EventInfo_T_#Guilded_NET_EventInfo_T__T 'Guilded.NET.EventInfo&lt;T&gt;.T').



This relies on [Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject').
