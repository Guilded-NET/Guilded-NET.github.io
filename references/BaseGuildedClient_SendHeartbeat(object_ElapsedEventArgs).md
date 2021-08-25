
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.SendHeartbeat(object, ElapsedEventArgs) Method
Sends a heartbeat.  
```csharp
protected virtual void SendHeartbeat(object sender, System.Timers.ElapsedEventArgs args);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_SendHeartbeat(object_System_Timers_ElapsedEventArgs)_sender'></a>
`sender` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
Who invoked the event
  
<a name='Guilded_NET_Base_BaseGuildedClient_SendHeartbeat(object_System_Timers_ElapsedEventArgs)_args'></a>
`args` [System.Timers.ElapsedEventArgs](https://docs.microsoft.com/en-us/dotnet/api/System.Timers.ElapsedEventArgs 'System.Timers.ElapsedEventArgs')  
Arguments of the timer's elapsed event
  
### Remarks
Sends a heartbeat through all WebSocket clients in [Websockets](BaseGuildedClient_Websockets 'Guilded.NET.Base.BaseGuildedClient.Websockets') dictionary.   