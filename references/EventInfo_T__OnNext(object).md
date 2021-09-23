
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo&lt;T&gt;')
## EventInfo&lt;T&gt;.OnNext(object) Method
Notifies observers with OnNext.  
```csharp
public void OnNext(object value);
```

#### Parameters
<a name='Guilded_NET_EventInfo_T__OnNext(object)_value'></a>
`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The next received value
  

Implements [OnNext(object)](IEventInfo_T__OnNext(object) 'Guilded.NET.IEventInfo&lt;T&gt;.OnNext(object)')  
### Remarks
Notifies all [Observable](EventInfo_T__Observable 'Guilded.NET.EventInfo&lt;T&gt;.Observable')'s observers. Invokes [Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject')'s [System.Reactive.Subjects.Subject&lt;&gt;.OnNext(@0)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnNext#System_Reactive_Subjects_Subject_1_OnNext__0_ 'System.Reactive.Subjects.Subject`1.OnNext(`0)') method.
