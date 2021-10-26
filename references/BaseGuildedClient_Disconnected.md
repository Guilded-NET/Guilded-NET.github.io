
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.Disconnected Event

An event when client gets disconnected
```csharp
public event EventHandler Disconnected;
```


#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')

### Remarks
  
An event that occurs once Guilded client disconnects from Guilded.  
  
This usually occurs once [DisconnectAsync()](BaseGuildedClient_DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') is called and no errors get thrown.

### See Also
- [DisconnectAsync()](BaseGuildedClient_DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()')
- [Connected](BaseGuildedClient_Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')