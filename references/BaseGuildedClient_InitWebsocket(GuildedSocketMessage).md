
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.InitWebsocket(GuildedSocketMessage) Method

Initializes a new WebSocket client.
```csharp
protected virtual System.Threading.Tasks.Task<Websocket.Client.WebsocketClient> InitWebsocket(Guilded.NET.Base.Events.GuildedSocketMessage @event);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_InitWebsocket(Guilded_NET_Base_Events_GuildedSocketMessage)_event'></a>
`event` [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

The last event before WebSocket disconnection


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Websocket.Client.WebsocketClient](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.WebsocketClient 'Websocket.Client.WebsocketClient')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created websocket


#### Exceptions

[Websocket.Client.Exceptions.WebsocketException](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.Exceptions.WebsocketException 'Websocket.Client.Exceptions.WebsocketException')  
Either [event](BaseGuildedClient_InitWebsocket(GuildedSocketMessage)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(Guilded_NET_Base_Events_GuildedSocketMessage)_event 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedSocketMessage).event')'s identifier or [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') has a bad formatting

### Remarks
  
Creates a new WebSocket client and sets it to [Websocket](BaseGuildedClient_Websocket 'Guilded.NET.Base.BaseGuildedClient.Websocket').  
  
If [event](BaseGuildedClient_InitWebsocket(GuildedSocketMessage)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(Guilded_NET_Base_Events_GuildedSocketMessage)_event 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedSocketMessage).event') is passed, it gets all of the events that occurred after that message.

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)')