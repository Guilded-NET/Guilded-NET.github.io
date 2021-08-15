#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base')
## BaseGuildedClient Class
A base for Guilded client.  
```csharp
public abstract class BaseGuildedClient :
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseGuildedClient  

Implements [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')  
### Remarks
A base type for all Guilded.NET client containing WebSocket and REST things, as well as abstract methods to be overriden.  

| Constructors | |
| :--- | :--- |
| [BaseGuildedClient()](BaseGuildedClient_BaseGuildedClient().md 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient()') | A base for Guilded client.<br/> |
| [BaseGuildedClient(Uri)](BaseGuildedClient_BaseGuildedClient(Uri).md 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri)') | A base for Guilded client.<br/> |

| Fields | |
| :--- | :--- |
| [ConnectedEvent](BaseGuildedClient_ConnectedEvent.md 'Guilded.NET.Base.BaseGuildedClient.ConnectedEvent') | Events when client gets Connected/Disconnected.<br/> |
| [DisconnectedEvent](BaseGuildedClient_DisconnectedEvent.md 'Guilded.NET.Base.BaseGuildedClient.DisconnectedEvent') | Events when client gets Connected/Disconnected.<br/> |

| Properties | |
| :--- | :--- |
| [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders.md 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') | Headers that will be used for REST and WebSocket clients.<br/> |
| [ApiLogger](BaseGuildedClient_ApiLogger.md 'Guilded.NET.Base.BaseGuildedClient.ApiLogger') | Logs all of the API related stuff it is doing.<br/> |
| [ClientId](BaseGuildedClient_ClientId.md 'Guilded.NET.Base.BaseGuildedClient.ClientId') | ID of the client for websocket and REST stuff.<br/> |
| [EnabledLogLevels](BaseGuildedClient_EnabledLogLevels.md 'Guilded.NET.Base.BaseGuildedClient.EnabledLogLevels') | Enabled logging levels. You can use this to make Guilded.NET show debug messages and other information.<br/> |
| [GuildedCookies](BaseGuildedClient_GuildedCookies.md 'Guilded.NET.Base.BaseGuildedClient.GuildedCookies') | Cookies received from client log-in.<br/> |
| [GuildedSerializer](BaseGuildedClient_GuildedSerializer.md 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer') | Serializer used to (de)serialize JSON given by Guilded or made for Guilded.<br/> |
| [HeartbeatInterval](BaseGuildedClient_HeartbeatInterval.md 'Guilded.NET.Base.BaseGuildedClient.HeartbeatInterval') | A span of time between each heartbeat.<br/> |
| [HeartbeatTimer](BaseGuildedClient_HeartbeatTimer.md 'Guilded.NET.Base.BaseGuildedClient.HeartbeatTimer') | A timer for heartbeats.<br/> |
| [Rest](BaseGuildedClient_Rest.md 'Guilded.NET.Base.BaseGuildedClient.Rest') | The REST client for Guilded.<br/> |
| [WebsocketLogger](BaseGuildedClient_WebsocketLogger.md 'Guilded.NET.Base.BaseGuildedClient.WebsocketLogger') | Logs all of the websocket events.<br/> |
| [Websockets](BaseGuildedClient_Websockets.md 'Guilded.NET.Base.BaseGuildedClient.Websockets') | A dictionary of all websocket clients.<br/> |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](BaseGuildedClient_AddMembershipAsync(GId_GId).md 'Guilded.NET.Base.BaseGuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group.<br/> |
| [AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient_AddReactionAsync(Guid_Guid_uint).md 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to a message.<br/> |
| [AddRoleAsync(GId, uint)](BaseGuildedClient_AddRoleAsync(GId_uint).md 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the given user.<br/> |
| [AddXpAsync(GId, short)](BaseGuildedClient_AddXpAsync(GId_short).md 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.GId, short)') | Adds XP to the given user.<br/> |
| [AttachRoleLevelAsync(uint, long)](BaseGuildedClient_AttachRoleLevelAsync(uint_long).md 'Guilded.NET.Base.BaseGuildedClient.AttachRoleLevelAsync(uint, long)') | Attaches amount of XP required to a role.<br/> |
| [BuildRequest(IRestRequest, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_BuildRequest(IRestRequest_object_bool_IDictionary_string_string__IDictionary_string_string_).md 'Guilded.NET.Base.BaseGuildedClient.BuildRequest(IRestRequest, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Builds upon given REST request.<br/> |
| [ConnectAsync()](BaseGuildedClient_ConnectAsync().md 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') | Connects this client to Guilded.<br/> |
| [CreateForumThreadAsync(Guid, string, MessageContent)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_MessageContent).md 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, Guilded.NET.Base.Chat.MessageContent)') | Creates a forum post in a forum channel.<br/> |
| [CreateForumThreadAsync(Guid, string, object)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_object).md 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, object)') | Creates a forum post in a forum channel.<br/> |
| [CreateForumThreadAsync(Guid, string, string, object[])](BaseGuildedClient_CreateForumThreadAsync(Guid_string_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string, object[])') | Creates a forum post in a forum channel.<br/> |
| [CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_string).md 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a forum post in a forum channel.<br/> |
| [CreateForumThreadAsync(Guid, string, IFormatProvider, string, object[])](BaseGuildedClient_CreateForumThreadAsync(Guid_string_IFormatProvider_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, System.IFormatProvider, string, object[])') | Creates a forum post in a forum channel.<br/> |
| [CreateListItemAsync(Guid, MessageContent, MessageContent)](BaseGuildedClient_CreateListItemAsync(Guid_MessageContent_MessageContent).md 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, Guilded.NET.Base.Chat.MessageContent)') | Creates a new list item in a list channel.<br/> |
| [CreateListItemAsync(Guid, string, string)](BaseGuildedClient_CreateListItemAsync(Guid_string_string).md 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates a new list item in a list channel.<br/> |
| [CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient_CreateMessageAsync(Guid_MessageContent).md 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, object)](BaseGuildedClient_CreateMessageAsync(Guid_object).md 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, object)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string, object[])](BaseGuildedClient_CreateMessageAsync(Guid_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, object[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string)](BaseGuildedClient_CreateMessageAsync(Guid_string).md 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, IFormatProvider, string, object[])](BaseGuildedClient_CreateMessageAsync(Guid_IFormatProvider_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, System.IFormatProvider, string, object[])') | Creates a message in a chat.<br/> |
| [CreateWebhookAsync(Guid, string)](BaseGuildedClient_CreateWebhookAsync(Guid_string).md 'Guilded.NET.Base.BaseGuildedClient.CreateWebhookAsync(System.Guid, string)') | Creates a webhook in a given channel.<br/> |
| [DeleteMessageAsync(Guid, Guid)](BaseGuildedClient_DeleteMessageAsync(Guid_Guid).md 'Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes a specified message.<br/> |
| [DeleteWebhookAsync(Guid)](BaseGuildedClient_DeleteWebhookAsync(Guid).md 'Guilded.NET.Base.BaseGuildedClient.DeleteWebhookAsync(System.Guid)') | Deletes a webhook.<br/> |
| [Deserialize&lt;T&gt;(string)](BaseGuildedClient_Deserialize_T_(string).md 'Guilded.NET.Base.BaseGuildedClient.Deserialize&lt;T&gt;(string)') | Deserializes JSON with client's Guilded serializer.<br/> |
| [DisconnectAsync()](BaseGuildedClient_DisconnectAsync().md 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded.<br/> |
| [Dispose()](BaseGuildedClient_Dispose().md 'Guilded.NET.Base.BaseGuildedClient.Dispose()') | Disposes [BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient') instance.<br/> |
| [ExecuteRequest(string, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest(string_Method_object_bool_IDictionary_string_string__IDictionary_string_string_).md 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest(string, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [ExecuteRequest(Uri, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest(Uri_Method_object_bool_IDictionary_string_string__IDictionary_string_string_).md 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest(System.Uri, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [ExecuteWebhookAsync(Guid, string, string, Embed[])](BaseGuildedClient_ExecuteWebhookAsync(Guid_string_string_Embed__).md 'Guilded.NET.Base.BaseGuildedClient.ExecuteWebhookAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[])') | Posts a message using a webhook.<br/> |
| [GetMessageAsync(Guid, Guid)](BaseGuildedClient_GetMessageAsync(Guid_Guid).md 'Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message in a specific channel.<br/> |
| [GetMessagesAsync(Guid, uint)](BaseGuildedClient_GetMessagesAsync(Guid_uint).md 'Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid, uint)') | Gets messages with a specific limit.<br/> |
| [InitWebsocket(GuildedEvent)](BaseGuildedClient_InitWebsocket(GuildedEvent).md 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedEvent)') | Initializes a new WebSocket client.<br/> |
| [InitWebsocket(string)](BaseGuildedClient_InitWebsocket(string).md 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string)') | Initializes a new WebSocket client.<br/> |
| [RemoveMembershipAsync(GId, GId)](BaseGuildedClient_RemoveMembershipAsync(GId_GId).md 'Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group.<br/> |
| [RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient_RemoveReactionAsync(Guid_Guid_uint).md 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from a message.<br/> |
| [RemoveRoleAsync(GId, uint)](BaseGuildedClient_RemoveRoleAsync(GId_uint).md 'Guilded.NET.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the given user.<br/> |
| [SendHeartbeat(object, ElapsedEventArgs)](BaseGuildedClient_SendHeartbeat(object_ElapsedEventArgs).md 'Guilded.NET.Base.BaseGuildedClient.SendHeartbeat(object, System.Timers.ElapsedEventArgs)') | Sends a heartbeat.<br/> |
| [SendRequest&lt;T&gt;(IRestRequest)](BaseGuildedClient_SendRequest_T_(IRestRequest).md 'Guilded.NET.Base.BaseGuildedClient.SendRequest&lt;T&gt;(IRestRequest)') | Executes a request and receives response or an error.<br/> |
| [Serialize(object)](BaseGuildedClient_Serialize(object).md 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)') | Serializes object with client's Guilded serializer.<br/> |
| [SetCookies(CookieContainer)](BaseGuildedClient_SetCookies(CookieContainer).md 'Guilded.NET.Base.BaseGuildedClient.SetCookies(System.Net.CookieContainer)') | Sets cookies that were fetched from login.<br/> |
| [UpdateMessageAsync(Guid, Guid, MessageContent)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_MessageContent).md 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(Guid, Guid, object)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_object).md 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, object)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(Guid, Guid, string, object[])](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string, object[])') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_string).md 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(Guid, Guid, IFormatProvider, string, object[])](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_IFormatProvider_string_object__).md 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, System.IFormatProvider, string, object[])') | Updates the contents of the message.<br/> |
| [UpdateWebhookAsync(Guid, Guid, string, Uri)](BaseGuildedClient_UpdateWebhookAsync(Guid_Guid_string_Uri).md 'Guilded.NET.Base.BaseGuildedClient.UpdateWebhookAsync(System.Guid, System.Guid, string, System.Uri)') | Updates webhook's name or profile picture.<br/> |
| [UploadFileAsync(string, byte[], string)](BaseGuildedClient_UploadFileAsync(string_byte___string).md 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)') | Uploads a file to Guilded.<br/> |
| [UploadFileAsync(string, byte[])](BaseGuildedClient_UploadFileAsync(string_byte__).md 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[])') | Uploads a file to Guilded.<br/> |
| [UploadFileAsync(Uri)](BaseGuildedClient_UploadFileAsync(Uri).md 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri)') | Uploads a file to Guilded.<br/> |
| [WebsocketMessageReceived(ResponseMessage)](BaseGuildedClient_WebsocketMessageReceived(ResponseMessage).md 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessageReceived(ResponseMessage)') | Used for when any WebSocket receives a message.<br/> |

| Events | |
| :--- | :--- |
| [Connected](BaseGuildedClient_Connected.md 'Guilded.NET.Base.BaseGuildedClient.Connected') | Event when client connects to the Guilded.<br/> |
| [Disconnected](BaseGuildedClient_Disconnected.md 'Guilded.NET.Base.BaseGuildedClient.Disconnected') | Event when client disconnects from Guilded.<br/> |
| [WebsocketMessage](BaseGuildedClient_WebsocketMessage.md 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessage') | An event when WebSocket receives a message.<br/> |
| [WebsocketMessageEvent](BaseGuildedClient_WebsocketMessageEvent.md 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessageEvent') | An event when WebSocket receives a message.<br/> |
