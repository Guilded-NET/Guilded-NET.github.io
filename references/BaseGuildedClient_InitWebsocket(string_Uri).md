
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.InitWebsocket(string, Uri) Method

Initializes a new WebSocket client.
```csharp
protected virtual System.Threading.Tasks.Task<Websocket.Client.WebsocketClient> InitWebsocket(string lastMessageId=null, System.Uri websocketUrl=null);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string_System_Uri)_lastMessageId'></a>
`lastMessageId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the last event before WebSocket disconnection

<a name='Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string_System_Uri)_websocketUrl'></a>
`websocketUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to which WebSocket will connect


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Websocket.Client.WebsocketClient](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.WebsocketClient 'Websocket.Client.WebsocketClient')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created websocket


#### Exceptions

[Websocket.Client.Exceptions.WebsocketException](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.Exceptions.WebsocketException 'Websocket.Client.Exceptions.WebsocketException')  
Either [lastMessageId](BaseGuildedClient_InitWebsocket(string_Uri)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string_System_Uri)_lastMessageId 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri).lastMessageId') or [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') has a bad formatting

### Remarks
  
Creates a new WebSocket client and sets it to [Websocket](BaseGuildedClient_Websocket 'Guilded.NET.Base.BaseGuildedClient.Websocket').  
  
If [lastMessageId](BaseGuildedClient_InitWebsocket(string_Uri)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string_System_Uri)_lastMessageId 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri).lastMessageId') is passed, it gets all of the events that occurred after that message.

### See Also
- [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')
- [InitWebsocket(GuildedSocketMessage)](BaseGuildedClient_InitWebsocket(GuildedSocketMessage) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedSocketMessage)')