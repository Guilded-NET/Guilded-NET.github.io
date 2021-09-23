
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.WebsocketMessage Property
An event when WebSocket receives a message.  
```csharp
protected System.IObservable<Guilded.NET.Base.Events.GuildedSocketMessage> WebsocketMessage { get; }
```

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

#### Exceptions
[GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')  
Received when any kind of error is received. Handled through [System.Reactive.Subjects.Subject&lt;&gt;.OnError(System.Exception)](https://docs.microsoft.com/en-us/dotnet/api/System.Reactive.Subjects.Subject-1.OnError#System_Reactive_Subjects_Subject_1_OnError_System_Exception_ 'System.Reactive.Subjects.Subject`1.OnError(System.Exception)').
### Remarks
An event when WebSocket receives any kind of message from Guilded.



If event with opcode `8` is received, it is given as an exception instead.
