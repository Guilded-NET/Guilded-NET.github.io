---
title: BaseGuildedClient
layout: references
section: references
tags:
  - references
  - class
description: "

An API wrapping layer for all Guilded client.

```csharp
public abstract class BaseGuildedClient :
System.IDisposable
```"
---

## BaseGuildedClient Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An API wrapping layer for all Guilded client.

```csharp
public abstract class BaseGuildedClient :
System.IDisposable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; BaseGuildedClient

Implements [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')

### Remarks
  
The base that adds a layer to Guilded API wrapping. This is used in all Guilded.NET clients.

| Constructors | |
| :--- | :--- |
| [BaseGuildedClient()](BaseGuildedClient.BaseGuildedClient() 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient()') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api') as URL. |
| [BaseGuildedClient(Uri, Uri)](BaseGuildedClient.BaseGuildedClient(Uri,Uri) 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri, System.Uri)') | Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types. |

| Fields | |
| :--- | :--- |
| [ConnectedEvent](BaseGuildedClient.ConnectedEvent 'Guilded.NET.Base.BaseGuildedClient.ConnectedEvent') | An event when client is connected |
| [DisconnectedEvent](BaseGuildedClient.DisconnectedEvent 'Guilded.NET.Base.BaseGuildedClient.DisconnectedEvent') | An event when client gets disconnected |

| Properties | |
| :--- | :--- |
| [AdditionalHeaders](BaseGuildedClient.AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders') | Headers that will be used for REST and WebSocket clients. |
| [GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer') | A serializer to (de)serialize for JSON from Guilded API. |
| [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.NET.Base.BaseGuildedClient.LastMessageId') | The identifier of the last WebSocket message. |
| [Rest](BaseGuildedClient.Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') | The REST client for Guilded. |
| [SerializerSettings](BaseGuildedClient.SerializerSettings 'Guilded.NET.Base.BaseGuildedClient.SerializerSettings') | Settings for [Rest](BaseGuildedClient.Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') client's JSON (de)serialization. |
| [Websocket](BaseGuildedClient.Websocket 'Guilded.NET.Base.BaseGuildedClient.Websocket') | The WebSocket that will be used by the client. |
| [WebsocketMessage](BaseGuildedClient.WebsocketMessage 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessage') | An event when WebSocket receives a message. |

| Events | |
| :--- | :--- |
| [Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected') | An event when client is connected |
| [Disconnected](BaseGuildedClient.Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected') | An event when client gets disconnected |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(HashId, HashId)](BaseGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Adds a member to the group. |
| [AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to the message. |
| [AddReactionAsync(Guid, uint, uint)](BaseGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content. |
| [AddRoleAsync(HashId, HashId, uint)](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)') | Adds a role to the user. |
| [AddXpAsync(HashId, HashId, long)](BaseGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, long)') | Adds XP to the user. |
| [AddXpAsync(HashId, uint, long)](BaseGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, uint, long)') | Adds XP to the role. |
| [ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()') | Connects this client to Guilded. |
| [CreatedDocAsync(Guid, string, string)](BaseGuildedClient.CreatedDocAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreatedDocAsync(System.Guid, string, string)') | Creates a document in document list. |
| [CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient.CreateForumThreadAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a thread in forums. |
| [CreateHookMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,Embed[]) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, Guilded.NET.Base.Embeds.Embed[])') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,Embed[]) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[])') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)') | Creates a message in a chat using provided webhook. |
| [CreateListItemAsync(Guid, string, string)](BaseGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates an item in the list. |
| [CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Content.MessageContent)') | Creates a message in chat. |
| [CreateMessageAsync(Guid, string, bool, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,Guid[]) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[]) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string)](BaseGuildedClient.CreateMessageAsync(Guid,string) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in the chat. |
| [DeleteDocAsync(Guid, uint)](BaseGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.DeleteDocAsync(System.Guid, uint)') | Deletes the document. |
| [DeleteMessageAsync(Guid, Guid)](BaseGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes the message. |
| [DeleteNicknameAsync(HashId, HashId)](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Deletes member's nickname. |
| [Deserialize&lt;T&gt;(string)](BaseGuildedClient.Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize<T>(string)') | Deserializes JSON with client's Guilded serializer. |
| [DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded. |
| [Dispose()](BaseGuildedClient.Dispose() 'Guilded.NET.Base.BaseGuildedClient.Dispose()') | Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') instance. |
| [ExecuteRequestAsync(RestRequest)](BaseGuildedClient.ExecuteRequestAsync(RestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest)') | Executes a request and receives a response or an error. |
| [ExecuteRequestAsync&lt;T&gt;(RestRequest)](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest)') | Executes a request and receives ra esponse or an error. |
| [GetDocAsync(Guid, uint)](BaseGuildedClient.GetDocAsync(Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.GetDocAsync(System.Guid, uint)') | Gets the specified document. |
| [GetDocsAsync(Guid)](BaseGuildedClient.GetDocsAsync(Guid) 'Guilded.NET.Base.BaseGuildedClient.GetDocsAsync(System.Guid)') | Gets a list of documents. |
| [GetMemberRolesAsync(HashId, HashId)](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Gets the member's roles. |
| [GetMessageAsync(Guid, Guid)](BaseGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message. |
| [GetMessagesAsync(Guid, bool)](BaseGuildedClient.GetMessagesAsync(Guid,bool) 'Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid, bool)') | Gets a set of messages. |
| [GetSocialLinkAsync(HashId, HashId, SocialLinkType)](BaseGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType)') | Gets the specified user's social links. |
| [OnWebsocketResponse(ResponseMessage)](BaseGuildedClient.OnWebsocketResponse(ResponseMessage) 'Guilded.NET.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage)') | Used for when any WebSocket receives a message. |
| [RemoveMembershipAsync(HashId, HashId)](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Removes a member from the group. |
| [RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from the message. |
| [RemoveReactionAsync(Guid, uint, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content. |
| [RemoveRoleAsync(HashId, HashId, uint)](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)') | Removes a role from the user. |
| [Serialize(object)](BaseGuildedClient.Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)') | Serializes object with client's Guilded serializer. |
| [UpdateDocAsync(Guid, uint, string, string)](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateDocAsync(System.Guid, uint, string, string)') | Updates the document. |
| [UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the message. |
| [UpdateNicknameAsync(HashId, HashId, string)](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, string)') | Updates the member's nickname. |
| [UploadFileAsync(string, byte[], string)](BaseGuildedClient.UploadFileAsync(string,byte[],string) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)') | Uploads a file to Guilded. |
| [UploadFileAsync(string, byte[])](BaseGuildedClient.UploadFileAsync(string,byte[]) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[])') | Uploads a file to Guilded. |
| [UploadFileAsync(Uri)](BaseGuildedClient.UploadFileAsync(Uri) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri)') | Uploads a file to Guilded. |
