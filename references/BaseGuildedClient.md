
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
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
A base that adds a layer to Guilded API wrapping.



This is a base for all Guilded clients.

| Constructors | |
| :--- | :--- |
| [BaseGuildedClient()](BaseGuildedClient_BaseGuildedClient() 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient()') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl_Api 'Guilded.NET.Base.GuildedUrl.Api') as URL.<br/> |
| [BaseGuildedClient(Uri)](BaseGuildedClient_BaseGuildedClient(Uri) 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri)') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types.<br/> |

| Fields | |
| :--- | :--- |
| [ConnectedEvent](BaseGuildedClient_ConnectedEvent 'Guilded.NET.Base.BaseGuildedClient.ConnectedEvent') | An event when client is connected<br/> |
| [DefaultHeartbeatInterval](BaseGuildedClient_DefaultHeartbeatInterval 'Guilded.NET.Base.BaseGuildedClient.DefaultHeartbeatInterval') | The default timespan between each interval in milliseconds.<br/> |
| [DisconnectedEvent](BaseGuildedClient_DisconnectedEvent 'Guilded.NET.Base.BaseGuildedClient.DisconnectedEvent') | An event when client gets disconnected<br/> |

| Properties | |
| :--- | :--- |
| [AdditionalHeaders](BaseGuildedClient_AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') | Headers that will be used for REST and WebSocket clients.<br/> |
| [GuildedSerializer](BaseGuildedClient_GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer') | A serializer to (de)serialize for JSON from Guilded API.<br/> |
| [HeartbeatTimer](BaseGuildedClient_HeartbeatTimer 'Guilded.NET.Base.BaseGuildedClient.HeartbeatTimer') | A timer for heartbeats.<br/> |
| [Rest](BaseGuildedClient_Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') | The REST client for Guilded.<br/> |
| [SerializerSettings](BaseGuildedClient_SerializerSettings 'Guilded.NET.Base.BaseGuildedClient.SerializerSettings') | Settings for [Rest](BaseGuildedClient_Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') client's JSON (de)serialization.<br/> |
| [WebsocketMessage](BaseGuildedClient_WebsocketMessage 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessage') | An event when WebSocket receives a message.<br/> |
| [Websockets](BaseGuildedClient_Websockets 'Guilded.NET.Base.BaseGuildedClient.Websockets') | A dictionary of all websocket clients.<br/> |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](BaseGuildedClient_AddMembershipAsync(GId_GId) 'Guilded.NET.Base.BaseGuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group.<br/> |
| [AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient_AddReactionAsync(Guid_Guid_uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to a message.<br/> |
| [AddReactionAsync(Guid, uint, uint)](BaseGuildedClient_AddReactionAsync(Guid_uint_uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content.<br/> |
| [AddRoleAsync(GId, uint)](BaseGuildedClient_AddRoleAsync(GId_uint) 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the given user.<br/> |
| [AddXpAsync(GId, short)](BaseGuildedClient_AddXpAsync(GId_short) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.GId, short)') | Adds XP to the given user.<br/> |
| [AttachRoleLevelAsync(uint, long)](BaseGuildedClient_AttachRoleLevelAsync(uint_long) 'Guilded.NET.Base.BaseGuildedClient.AttachRoleLevelAsync(uint, long)') | Attaches amount of XP required to a role.<br/> |
| [ConnectAsync()](BaseGuildedClient_ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') | Connects this client to Guilded.<br/> |
| [CreateForumThreadAsync(Guid, string, MessageContent)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_MessageContent) 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, Guilded.NET.Base.Chat.MessageContent)') | Creates a forum thread.<br/> |
| [CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient_CreateForumThreadAsync(Guid_string_string) 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a forum thread.<br/> |
| [CreateListItemAsync(Guid, MessageContent, MessageContent)](BaseGuildedClient_CreateListItemAsync(Guid_MessageContent_MessageContent) 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, Guilded.NET.Base.Chat.MessageContent)') | Creates a list item.<br/> |
| [CreateListItemAsync(Guid, string, string)](BaseGuildedClient_CreateListItemAsync(Guid_string_string) 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates a list item.<br/> |
| [CreateMessageAsync(Guid, MessageContent, bool, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_MessageContent_bool_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, bool, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, MessageContent, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_MessageContent_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient_CreateMessageAsync(Guid_MessageContent) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string, bool, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_string_bool_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient_CreateMessageAsync(Guid_string_Guid__) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string)](BaseGuildedClient_CreateMessageAsync(Guid_string) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in a chat.<br/> |
| [DeleteMessageAsync(Guid, Guid)](BaseGuildedClient_DeleteMessageAsync(Guid_Guid) 'Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes a specified message.<br/> |
| [DeleteNicknameAsync(GId)](BaseGuildedClient_DeleteNicknameAsync(GId) 'Guilded.NET.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.GId)') | Deletes member's nickname.<br/> |
| [Deserialize&lt;T&gt;(string)](BaseGuildedClient_Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize&lt;T&gt;(string)') | Deserializes JSON with client's Guilded serializer.<br/> |
| [DisconnectAsync()](BaseGuildedClient_DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded.<br/> |
| [Dispose()](BaseGuildedClient_Dispose() 'Guilded.NET.Base.BaseGuildedClient.Dispose()') | Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') instance.<br/> |
| [ExecuteRequest(string, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest(string_Method_object_bool_IDictionary_string_string__IDictionary_string_string_) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest(string, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [ExecuteRequest(Uri, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest(Uri_Method_object_bool_IDictionary_string_string__IDictionary_string_string_) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest(System.Uri, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [ExecuteRequest&lt;T&gt;(string, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest_T_(string_Method_object_bool_IDictionary_string_string__IDictionary_string_string_) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest&lt;T&gt;(string, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [ExecuteRequest&lt;T&gt;(Uri, Method, object, bool, IDictionary&lt;string,string&gt;, IDictionary&lt;string,string&gt;)](BaseGuildedClient_ExecuteRequest_T_(Uri_Method_object_bool_IDictionary_string_string__IDictionary_string_string_) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequest&lt;T&gt;(System.Uri, Method, object, bool, System.Collections.Generic.IDictionary&lt;string,string&gt;, System.Collections.Generic.IDictionary&lt;string,string&gt;)') | Sends a request to Guilded.<br/> |
| [GetMessageAsync(Guid, Guid)](BaseGuildedClient_GetMessageAsync(Guid_Guid) 'Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message in a specific channel.<br/> |
| [GetMessagesAsync(Guid, uint)](BaseGuildedClient_GetMessagesAsync(Guid_uint) 'Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid, uint)') | Gets messages with a specific limit.<br/> |
| [GetSocialLinkAsync(GId, SocialLinkType)](BaseGuildedClient_GetSocialLinkAsync(GId_SocialLinkType) 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType)') | Gets user's social links.<br/> |
| [InitWebsocket(GuildedEvent)](BaseGuildedClient_InitWebsocket(GuildedEvent) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(Guilded.NET.Base.Events.GuildedEvent)') | Initializes a new WebSocket client.<br/> |
| [InitWebsocket(string, Uri)](BaseGuildedClient_InitWebsocket(string_Uri) 'Guilded.NET.Base.BaseGuildedClient.InitWebsocket(string, System.Uri)') | Initializes a new WebSocket client.<br/> |
| [OnWebsocketResponse(ResponseMessage)](BaseGuildedClient_OnWebsocketResponse(ResponseMessage) 'Guilded.NET.Base.BaseGuildedClient.OnWebsocketResponse(ResponseMessage)') | Used for when any WebSocket receives a message.<br/> |
| [RemoveMembershipAsync(GId, GId)](BaseGuildedClient_RemoveMembershipAsync(GId_GId) 'Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group.<br/> |
| [RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient_RemoveReactionAsync(Guid_Guid_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from a message.<br/> |
| [RemoveReactionAsync(Guid, uint, uint)](BaseGuildedClient_RemoveReactionAsync(Guid_uint_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content.<br/> |
| [RemoveRoleAsync(GId, uint)](BaseGuildedClient_RemoveRoleAsync(GId_uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the given user.<br/> |
| [SendHeartbeat(object, ElapsedEventArgs)](BaseGuildedClient_SendHeartbeat(object_ElapsedEventArgs) 'Guilded.NET.Base.BaseGuildedClient.SendHeartbeat(object, System.Timers.ElapsedEventArgs)') | Sends a heartbeat.<br/> |
| [Serialize(object)](BaseGuildedClient_Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)') | Serializes object with client's Guilded serializer.<br/> |
| [UpdateMessageAsync(Guid, Guid, MessageContent)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_MessageContent) 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, Guilded.NET.Base.Chat.MessageContent)') | Updates the contents of the message.<br/> |
| [UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient_UpdateMessageAsync(Guid_Guid_string) 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the contents of the message.<br/> |
| [UpdateNicknameAsync(GId, string)](BaseGuildedClient_UpdateNicknameAsync(GId_string) 'Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string)') | Updates member's nickname.<br/> |
| [UploadFileAsync(string, byte[], string)](BaseGuildedClient_UploadFileAsync(string_byte___string) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)') | Uploads a file to Guilded.<br/> |
| [UploadFileAsync(string, byte[])](BaseGuildedClient_UploadFileAsync(string_byte__) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[])') | Uploads a file to Guilded.<br/> |
| [UploadFileAsync(Uri)](BaseGuildedClient_UploadFileAsync(Uri) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri)') | Uploads a file to Guilded.<br/> |

| Events | |
| :--- | :--- |
| [Connected](BaseGuildedClient_Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') | An event when client is connected<br/> |
| [Disconnected](BaseGuildedClient_Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected') | An event when client gets disconnected<br/> |
