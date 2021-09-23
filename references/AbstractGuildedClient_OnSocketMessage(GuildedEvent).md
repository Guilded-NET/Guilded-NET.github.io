
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.OnSocketMessage(GuildedEvent) Method
When the socket message event is invoked.  
```csharp
protected void OnSocketMessage(Guilded.NET.Base.Events.GuildedEvent message);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_OnSocketMessage(Guilded_NET_Base_Events_GuildedEvent)_message'></a>
`message` [GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent')  
A message received from a WebSocket
  
### Remarks
Receives and handles received [GuildedEvent](GuildedEvent 'Guilded.NET.Base.Events.GuildedEvent') messages.



This relies on [GuildedEvents](AbstractGuildedClient_GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents') dictionary.
