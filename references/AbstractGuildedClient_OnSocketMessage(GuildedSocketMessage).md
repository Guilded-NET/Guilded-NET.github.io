
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) Method
When the socket message event is invoked.  
```csharp
protected void OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage message);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_OnSocketMessage(Guilded_NET_Base_Events_GuildedSocketMessage)_message'></a>
`message` [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')  
A message received from a WebSocket
  
### Remarks
Receives and handles received [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage') messages.



This relies on [GuildedEvents](AbstractGuildedClient_GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents') dictionary.
