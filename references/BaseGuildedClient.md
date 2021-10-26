
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base')
## BaseGuildedClient Class

An API wrapping layer for all Guilded client.
```csharp
public abstract class BaseGuildedClient :
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; BaseGuildedClient

Implements [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')

### Remarks
  
The base that adds a layer to Guilded API wrapping. This is used in all Guilded.NET clients.

| Constructors | |
| :--- | :--- |
| [BaseGuildedClient()](BaseGuildedClient_BaseGuildedClient() 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient()') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl_Api 'Guilded.NET.Base.GuildedUrl.Api') as URL. |
| [BaseGuildedClient(Uri)](BaseGuildedClient_BaseGuildedClient(Uri) 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri)') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types. |

| Fields | |
| :--- | :--- |
| [ConnectedEvent](BaseGuildedClient_ConnectedEvent 'Guilded.NET.Base.BaseGuildedClient.ConnectedEvent') | An event when client is connected |
| [DefaultHeartbeatInterval](BaseGuildedClient_DefaultHeartbeatInterval 'Guilded.NET.Base.BaseGuildedClient.DefaultHeartbeatInterval') | The default timespan between each interval in milliseconds. |
| [DisconnectedEvent](BaseGuildedClient_DisconnectedEvent 'Guilded.NET.Base.BaseGuildedClient.DisconnectedEvent') | An event when client gets disconnected |

| Properties | |
| :--- | :--- |
| [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') | Headers that will be used for REST and WebSocket clients. |
| [GuildedSerializer](BaseGuildedClient_GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer') | A serializer to (de)serialize for JSON from Guilded API. |
| [HeartbeatTimer](BaseGuildedClient_HeartbeatTimer 'Guilded.NET.Base.BaseGuildedClient.HeartbeatTimer') | A timer for heartbeats. |
| [Rest](BaseGuildedClient_Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') | The REST client for Guilded. |
| [SerializerSettings](BaseGuildedClient_SerializerSettings 'Guilded.NET.Base.BaseGuildedClient.SerializerSettings') | Settings for [Rest](BaseGuildedClient_Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') client's JSON (de)serialization. |
| [Websocket](BaseGuildedClient_Websocket 'Guilded.NET.Base.BaseGuildedClient.Websocket') | The WebSocket that will be used by the client. |
| [WebsocketMessage](BaseGuildedClient_WebsocketMessage 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessage') | An event when WebSocket receives a message. |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](BaseGuildedClient_AddMembershipAsync(GId_GId) 'Guilded.NET.Base.BaseGuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group. |
| [AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient_AddReactionAsync(Guid_Guid_uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to the message. |
| [AddReactionAsync(Guid, uint, uint)](BaseGuildedClient_AddReactionAsync(Guid_uint_uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content. |
| [AddRoleAsync(GId, uint)](BaseGuildedClient_AddRoleAsync(GId_uint) 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the user. |
| [AddXpAsync(GId, long)](BaseGuildedClient_AddXpAsync(GId_long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.GId, long)') | Adds XP to the user. |
| [AddXpAsync(uint, long)](BaseGuildedClient_AddXpAsync(uint_long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(uint, long)') | Adds XP to the role. |
| [ConnectAsync()](BaseGuildedClient_ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') | Connects this client to Guilded. |
| [CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_string) 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a thread in forums. |
| [CreateHookMessageAsync(Guid, string, Embed[])](BaseGuildedClient_CreateHookMessageAsync(Guid_string_Embed__) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, Guilded.NET.Base.Embeds.Embed[])') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string, Embed[])](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string_Embed__) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[])') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string_IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string)](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](BaseGuildedClient_CreateHookMessageAsync(Guid_string_IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;)') | Creates a message in a chat using provided webhook. |
| [CreateListItemAsync(Guid, string, string)](BaseGuildedClient_CreateListItemAsync(Guid_string_string) 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates an item in the list. |
| [CreateMessageAsync(Guid, string, bool, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_string_bool_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_string_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string)](BaseGuildedClient_CreateMessageAsync(Guid_string) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in the chat. |
| [DeleteMessageAsync(Guid, Guid)](BaseGuildedClient_DeleteMessageAsync(Guid_Guid) 'Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes the message. |
| [DeleteNicknameAsync(GId)](BaseGuildedClient_DeleteNicknameAsync(GId) 'Guilded.NET.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.GId)') | Deletes member's nickname. |
| [Deserialize&lt;T&gt;(string)](BaseGuildedClient_Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize&lt;T&gt;(string)') | Deserializes JSON with client's Guilded serializer. |
| [DisconnectAsync()](BaseGuildedClient_DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded. |
| [Dispose()](BaseGuildedClient_Dispose() 'Guilded.NET.Base.BaseGuildedClient.Dispose()') | Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') instance. |
| [ExecuteRequestAsync(IRestRequest)](BaseGuildedClient_ExecuteRequestAsync(IRestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.IRestRequest)') | Executes a request and receives a response or an error. |
| [ExecuteRequestAsync&lt;T&gt;(IRestRequest)](BaseGuildedClient_ExecuteRequestAsync_T_(IRestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync&lt;T&gt;(RestSharp.IRestRequest)') | Executes a request and receives ra esponse or an error. |
| [GetMemberRolesAsync(GId)](BaseGuildedClient_GetMemberRolesAsync(GId) 'Guilded.NET.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.GId)') | Gets the member's roles. |
| [GetMessageAsync(Guid, Guid)](BaseGuildedClient_GetMessageAsync(Guid_Guid) 'Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message. |
| [GetMessagesAsync(Guid, bool)](BaseGuildedClient_GetMessagesAsync(Guid_bool) 'Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid, bool)') | Gets a set of messages. |
| [GetSocialLinkAsync(GId, SocialLinkType)](BaseGuildedClient_GetSocialLinkAsync(GId_SocialLinkType) 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType)') | Gets the specified user's social links. |
| [InitWebsocket(GuildedSocketMessage)](BaseGuildedClient_InitWebsocket(GuildedSocketMessage) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedSocketMessage)') | Initializes a new WebSocket client. |
| [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)') | Initializes a new WebSocket client. |
| [OnWebsocketResponse(ResponseMessage)](BaseGuildedClient_OnWebsocketResponse(ResponseMessage) 'Guilded.NET.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage)') | Used for when any WebSocket receives a message. |
| [RemoveMembershipAsync(GId, GId)](BaseGuildedClient_RemoveMembershipAsync(GId_GId) 'Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group. |
| [RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient_RemoveReactionAsync(Guid_Guid_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from the message. |
| [RemoveReactionAsync(Guid, uint, uint)](BaseGuildedClient_RemoveReactionAsync(Guid_uint_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content. |
| [RemoveRoleAsync(GId, uint)](BaseGuildedClient_RemoveRoleAsync(GId_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the user. |
| [SendHeartbeat(object, ElapsedEventArgs)](BaseGuildedClient_SendHeartbeat(object_ElapsedEventArgs) 'Guilded.NET.Base.BaseGuildedClient.SendHeartbeat(object, System.Timers.ElapsedEventArgs)') | Sends a heartbeat. |
| [Serialize(object)](BaseGuildedClient_Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)') | Serializes object with client's Guilded serializer. |
| [UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_string) 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the message. |
| [UpdateNicknameAsync(GId, string)](BaseGuildedClient_UpdateNicknameAsync(GId_string) 'Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string)') | Updates the member's nickname. |
| [UploadFileAsync(string, byte[], string)](BaseGuildedClient_UploadFileAsync(string_byte___string) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)') | Uploads a file to Guilded. |
| [UploadFileAsync(string, byte[])](BaseGuildedClient_UploadFileAsync(string_byte__) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[])') | Uploads a file to Guilded. |
| [UploadFileAsync(Uri)](BaseGuildedClient_UploadFileAsync(Uri) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri)') | Uploads a file to Guilded. |

| Events | |
| :--- | :--- |
| [Connected](BaseGuildedClient_Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') | An event when client is connected |
| [Disconnected](BaseGuildedClient_Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected') | An event when client gets disconnected |
