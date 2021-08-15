
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.InitWebsocket(string) Method
Initializes a new WebSocket client.  
```csharp
protected virtual System.Threading.Tasks.Task<WebsocketClient> InitWebsocket(string lastMessageId=null);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string)_lastMessageId'></a>
`lastMessageId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The identifier of the last event before WebSocket disconnection
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Websocket.Client.WebsocketClient](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.WebsocketClient 'Websocket.Client.WebsocketClient')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created websocket

#### Exceptions
[Websocket.Client.Exceptions.WebsocketException](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.Exceptions.WebsocketException 'Websocket.Client.Exceptions.WebsocketException')  
Either [lastMessageId](BaseGuildedClient_InitWebsocket(string)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string)_lastMessageId 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string).lastMessageId') or [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') has a bad formatting
### Remarks
Creates a new WebSocket client and adds it to [Websockets](BaseGuildedClient_Websockets 'Guilded.NET.Base.BaseGuildedClient.Websockets').



If [lastMessageId](BaseGuildedClient_InitWebsocket(string)#Guilded_NET_Base_BaseGuildedClient_InitWebsocket(string)_lastMessageId 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string).lastMessageId') is passed, it gets all of the events that occurred after that message.
