
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.Connected Event

An event when client is connected
```csharp
public event EventHandler Connected;
```


#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')

### Remarks
  
An event that occurs once Guilded client connects to Guilded.  
  
This usually occurs once [ConnectAsync()](BaseGuildedClient_ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') is called and no errors get thrown.

### See Also
- [ConnectAsync()](BaseGuildedClient_ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()')
- [Disconnected](BaseGuildedClient_Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected')