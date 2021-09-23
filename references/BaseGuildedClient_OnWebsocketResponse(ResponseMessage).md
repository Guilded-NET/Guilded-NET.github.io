
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.OnWebsocketResponse(ResponseMessage) Method
Used for when any WebSocket receives a message.  
```csharp
protected virtual void OnWebsocketResponse(ResponseMessage response);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_OnWebsocketResponse(ResponseMessage)_response'></a>
`response` [Websocket.Client.ResponseMessage](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.ResponseMessage 'Websocket.Client.ResponseMessage')  
The response received from Guilded WebSocket
  
### Remarks
An event handler method that gets called once any message is received from a WebSocket.



Override this if you don't like how Guilded.NET handles events or need any additional changes/features to it.
