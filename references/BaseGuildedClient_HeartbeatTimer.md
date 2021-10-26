
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.HeartbeatTimer Property

A timer for heartbeats.
```csharp
protected System.Timers.Timer HeartbeatTimer { get; set; }
```


#### Property Value
[System.Timers.Timer](https://docs.microsoft.com/en-us/dotnet/api/System.Timers.Timer 'System.Timers.Timer')  
Timer

### Remarks
  
A timer that sends a heartbeat through WebSockets to Guilded. This ensures that WebSockets are still connected to Guilded.