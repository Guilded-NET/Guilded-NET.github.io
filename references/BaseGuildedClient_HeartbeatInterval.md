
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.HeartbeatInterval Property
A span of time between each heartbeat.  
```csharp
public int HeartbeatInterval { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
Milliseconds
### Remarks
A span of time in milliseconds between each heartbeat.



This automatically gets set once WebSocket gets initiated and receives interval from Welcome message.