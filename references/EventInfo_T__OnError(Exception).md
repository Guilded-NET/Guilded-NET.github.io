
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo&lt;T&gt;')
## EventInfo&lt;T&gt;.OnError(Exception) Method

Notifies observers with OnError.
```csharp
public void OnError(System.Exception exception);
```

#### Parameters

<a name='Guilded_NET_EventInfo_T__OnError(System_Exception)_exception'></a>
`exception` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The next received exception/error

Implements [OnError(Exception)](IEventInfo_T__OnError(Exception) 'Guilded.NET.IEventInfo&lt;T&gt;.OnError(System.Exception)')

### Remarks
  
Notifies all [Observable](EventInfo_T__Observable 'Guilded.NET.EventInfo&lt;T&gt;.Observable')'s observers with an error. Invokes [Subject](EventInfo_T__Subject 'Guilded.NET.EventInfo&lt;T&gt;.Subject')'s [System.Reactive.Subjects.Subject&lt;&gt;.OnError(System.Exception)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnError#System_Reactive_Subjects_Subject_1_OnError_System_Exception_ 'System.Reactive.Subjects.Subject`1.OnError(System.Exception)') method.