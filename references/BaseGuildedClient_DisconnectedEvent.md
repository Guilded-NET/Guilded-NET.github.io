
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.DisconnectedEvent Field
An event when client gets disconnected  
```csharp
protected EventHandler DisconnectedEvent;
```

#### Field Value
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')
### Remarks
An event that occurs once Guilded client disconnects from Guilded.



This usually occurs once [DisconnectAsync()](BaseGuildedClient_DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') is called and no errors get thrown.

#### See Also
- [ConnectAsync()](BaseGuildedClient_ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()')
