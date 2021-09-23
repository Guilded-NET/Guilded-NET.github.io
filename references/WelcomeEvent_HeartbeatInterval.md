
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')
## WelcomeEvent.HeartbeatInterval Property
The duration between heartbeats.  
```csharp
public int HeartbeatInterval { get; set; }
```

#### Property Value
[System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')
Milliseconds
### Remarks
The duration between each heartbeat in milliseconds.



This may not mutate in any way, but if sudden API change comes, it will allow  
clients to automatically pick up the change without any effort from developers.
