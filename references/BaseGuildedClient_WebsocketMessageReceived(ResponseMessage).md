#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.WebsocketMessageReceived(ResponseMessage) Method
Used for when any WebSocket receives a message.  
```csharp
protected virtual void WebsocketMessageReceived(ResponseMessage msg);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_WebsocketMessageReceived(ResponseMessage)_msg'></a>
`msg` [Websocket.Client.ResponseMessage](https://docs.microsoft.com/en-us/dotnet/api/Websocket.Client.ResponseMessage 'Websocket.Client.ResponseMessage')  
Websocket message
  
### Remarks
An event handler method that gets called once any message is received from a WebSocket.



You can override it if you don't like how Guilded.NET handles events or need any additional changes/features to it.
