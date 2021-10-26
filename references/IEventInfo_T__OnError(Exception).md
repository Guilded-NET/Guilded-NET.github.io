
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[IEventInfo&lt;T&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo&lt;T&gt;')
## IEventInfo&lt;T&gt;.OnError(Exception) Method

Notifies observers with OnError.
```csharp
void OnError(System.Exception exception);
```

#### Parameters

<a name='Guilded_NET_IEventInfo_T__OnError(System_Exception)_exception'></a>
`exception` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

The next received exception/error

### Remarks
  
Notifies all [Observable](IEventInfo_T__Observable 'Guilded.NET.IEventInfo&lt;T&gt;.Observable')'s observers with an error.