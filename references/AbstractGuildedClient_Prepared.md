
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.Prepared Event

An event when the client is prepared.
```csharp
public event EventHandler Prepared;
```


#### Event Type
[System.EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler 'System.EventHandler')

### Remarks
  
An event that occurs once Guilded client has added finishing touches. You can use this as a signal [Prepared](AbstractGuildedClient_Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') ensures all client functions are properly working and can be used.  
  
As of now, this is called at the same time as [Connected](https://guilded-net.github.io/references/BaseGuildedClient_Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') event.