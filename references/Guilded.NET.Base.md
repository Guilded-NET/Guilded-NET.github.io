---
title: Guilded.NET.Base
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.NET.Base Namespace
- **[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')** `Class`
  An API wrapping layer for all Guilded client.
  - **[BaseGuildedClient()](BaseGuildedClient.BaseGuildedClient() 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient()')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api') as URL.
  - **[BaseGuildedClient(Uri, Uri)](BaseGuildedClient.BaseGuildedClient(Uri,Uri) 'Guilded.NET.Base.BaseGuildedClient.BaseGuildedClient(System.Uri, System.Uri)')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types.
  - **[ConnectedEvent](BaseGuildedClient.ConnectedEvent 'Guilded.NET.Base.BaseGuildedClient.ConnectedEvent')** `Field`
    An event when client is connected
  - **[DisconnectedEvent](BaseGuildedClient.DisconnectedEvent 'Guilded.NET.Base.BaseGuildedClient.DisconnectedEvent')** `Field`
    An event when client gets disconnected
  - **[AdditionalHeaders](BaseGuildedClient.AdditionalHeaders 'Guilded.NET.Base.BaseGuildedClient.AdditionalHeaders')** `Property`
    Headers that will be used for REST and WebSocket clients.
  - **[GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.NET.Base.BaseGuildedClient.GuildedSerializer')** `Property`
    A serializer to (de)serialize for JSON from Guilded API.
  - **[LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.NET.Base.BaseGuildedClient.LastMessageId')** `Property`
    The identifier of the last WebSocket message.
  - **[Rest](BaseGuildedClient.Rest 'Guilded.NET.Base.BaseGuildedClient.Rest')** `Property`
    The REST client for Guilded.
  - **[SerializerSettings](BaseGuildedClient.SerializerSettings 'Guilded.NET.Base.BaseGuildedClient.SerializerSettings')** `Property`
    Settings for [Rest](BaseGuildedClient.Rest 'Guilded.NET.Base.BaseGuildedClient.Rest') client's JSON (de)serialization.
  - **[Websocket](BaseGuildedClient.Websocket 'Guilded.NET.Base.BaseGuildedClient.Websocket')** `Property`
    The WebSocket that will be used by the client.
  - **[WebsocketMessage](BaseGuildedClient.WebsocketMessage 'Guilded.NET.Base.BaseGuildedClient.WebsocketMessage')** `Property`
    An event when WebSocket receives a message.
  - **[AddMembershipAsync(HashId, HashId)](BaseGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Adds a member to the group.
  - **[AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)')** `Method`
    Adds a reaction to the message.
  - **[AddReactionAsync(Guid, uint, uint)](BaseGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.NET.Base.BaseGuildedClient.AddReactionAsync(System.Guid, uint, uint)')** `Method`
    Adds a reaction to the content.
  - **[AddRoleAsync(HashId, HashId, uint)](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.NET.Base.BaseGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)')** `Method`
    Adds a role to the user.
  - **[AddXpAsync(HashId, HashId, long)](BaseGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, long)')** `Method`
    Adds XP to the user.
  - **[AddXpAsync(HashId, uint, long)](BaseGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.NET.Base.BaseGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, uint, long)')** `Method`
    Adds XP to the role.
  - **[ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.NET.Base.BaseGuildedClient.ConnectAsync()')** `Method`
    Connects this client to Guilded.
  - **[CreatedDocAsync(Guid, string, string)](BaseGuildedClient.CreatedDocAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreatedDocAsync(System.Guid, string, string)')** `Method`
    Creates a document in document list.
  - **[CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient.CreateForumThreadAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateForumThreadAsync(System.Guid, string, string)')** `Method`
    Creates a thread in forums.
  - **[CreateHookMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,Embed[]) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, Guilded.NET.Base.Embeds.Embed[])')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,Embed[]) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[])')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, string)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_) 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateListItemAsync(Guid, string, string)](BaseGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.NET.Base.BaseGuildedClient.CreateListItemAsync(System.Guid, string, string)')** `Method`
    Creates an item in the list.
  - **[CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Content.MessageContent)')** `Method`
    Creates a message in chat.
  - **[CreateMessageAsync(Guid, string, bool, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,Guid[]) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])')** `Method`
    Creates a message in the chat.
  - **[CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[]) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])')** `Method`
    Creates a message in the chat.
  - **[CreateMessageAsync(Guid, string)](BaseGuildedClient.CreateMessageAsync(Guid,string) 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string)')** `Method`
    Creates a message in the chat.
  - **[DeleteDocAsync(Guid, uint)](BaseGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.DeleteDocAsync(System.Guid, uint)')** `Method`
    Deletes the document.
  - **[DeleteMessageAsync(Guid, Guid)](BaseGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.NET.Base.BaseGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Deletes member's nickname.
  - **[Deserialize&lt;T&gt;(string)](BaseGuildedClient.Deserialize_T_(string) 'Guilded.NET.Base.BaseGuildedClient.Deserialize<T>(string)')** `Method`
    Deserializes JSON with client's Guilded serializer.
  - **[DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.NET.Base.BaseGuildedClient.DisconnectAsync()')** `Method`
    Disconnects this client from Guilded.
  - **[Dispose()](BaseGuildedClient.Dispose() 'Guilded.NET.Base.BaseGuildedClient.Dispose()')** `Method`
    Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') instance.
  - **[ExecuteRequestAsync(RestRequest)](BaseGuildedClient.ExecuteRequestAsync(RestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest)')** `Method`
    Executes a request and receives a response or an error.
  - **[ExecuteRequestAsync&lt;T&gt;(RestRequest)](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest) 'Guilded.NET.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest)')** `Method`
    Executes a request and receives ra esponse or an error.
  - **[GetDocAsync(Guid, uint)](BaseGuildedClient.GetDocAsync(Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.GetDocAsync(System.Guid, uint)')** `Method`
    Gets the specified document.
  - **[GetDocsAsync(Guid)](BaseGuildedClient.GetDocsAsync(Guid) 'Guilded.NET.Base.BaseGuildedClient.GetDocsAsync(System.Guid)')** `Method`
    Gets a list of documents.
  - **[GetMemberRolesAsync(HashId, HashId)](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Gets the member's roles.
  - **[GetMessageAsync(Guid, Guid)](BaseGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.NET.Base.BaseGuildedClient.GetMessageAsync(System.Guid, System.Guid)')** `Method`
    Gets a message.
  - **[GetMessagesAsync(Guid, bool)](BaseGuildedClient.GetMessagesAsync(Guid,bool) 'Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid, bool)')** `Method`
    Gets a set of messages.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](BaseGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType)')** `Method`
    Gets the specified user's social links.
  - **[OnWebsocketResponse(ResponseMessage)](BaseGuildedClient.OnWebsocketResponse(ResponseMessage) 'Guilded.NET.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage)')** `Method`
    Used for when any WebSocket receives a message.
  - **[RemoveMembershipAsync(HashId, HashId)](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.NET.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Removes a member from the group.
  - **[RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)')** `Method`
    Removes a reaction from the message.
  - **[RemoveReactionAsync(Guid, uint, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)')** `Method`
    Removes a reaction from the content.
  - **[RemoveRoleAsync(HashId, HashId, uint)](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.NET.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)')** `Method`
    Removes a role from the user.
  - **[Serialize(object)](BaseGuildedClient.Serialize(object) 'Guilded.NET.Base.BaseGuildedClient.Serialize(object)')** `Method`
    Serializes object with client's Guilded serializer.
  - **[UpdateDocAsync(Guid, uint, string, string)](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateDocAsync(System.Guid, uint, string, string)')** `Method`
    Updates the document.
  - **[UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)')** `Method`
    Updates the message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.NET.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, string)')** `Method`
    Updates the member's nickname.
  - **[UploadFileAsync(string, byte[], string)](BaseGuildedClient.UploadFileAsync(string,byte[],string) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(string, byte[])](BaseGuildedClient.UploadFileAsync(string,byte[]) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(string, byte[])')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(Uri)](BaseGuildedClient.UploadFileAsync(Uri) 'Guilded.NET.Base.BaseGuildedClient.UploadFileAsync(System.Uri)')** `Method`
    Uploads a file to Guilded.
  - **[Connected](BaseGuildedClient.Connected 'Guilded.NET.Base.BaseGuildedClient.Connected')** `Event`
    An event when client is connected
  - **[Disconnected](BaseGuildedClient.Disconnected 'Guilded.NET.Base.BaseGuildedClient.Disconnected')** `Event`
    An event when client gets disconnected
- **[BaseObject](BaseObject 'Guilded.NET.Base.BaseObject')** `Class`
  The base for all Guilded models.
  - **[Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])')** `Method`
    Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.
  - **[Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer) 'Guilded.NET.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)')** `Method`
    Returns serialized [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') instance.
- **[ClientObject](ClientObject 'Guilded.NET.Base.ClientObject')** `Class`
  A base that with a parent client.
  - **[ParentClient](ClientObject.ParentClient 'Guilded.NET.Base.ClientObject.ParentClient')** `Property`
    The parent client that adopts this object.
- **[DecimalColorConverter](DecimalColorConverter 'Guilded.NET.Base.DecimalColorConverter')** `Class`
  Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format.
  - **[CanConvert(Type)](DecimalColorConverter.CanConvert(Type) 'Guilded.NET.Base.DecimalColorConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](DecimalColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.NET.Base.DecimalColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](DecimalColorConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.NET.Base.DecimalColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormIdConverter](FormIdConverter 'Guilded.NET.Base.FormIdConverter')** `Class`
  Converts a value to [FormId](FormId 'Guilded.NET.Base.FormId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](FormIdConverter.CanConvertFrom(ITypeDescriptorContext,Type) 'Guilded.NET.Base.FormIdConverter.CanConvertFrom(System.ComponentModel.ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [FormId](FormId 'Guilded.NET.Base.FormId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object) 'Guilded.NET.Base.FormIdConverter.ConvertFrom(System.ComponentModel.ITypeDescriptorContext, System.Globalization.CultureInfo, object)')** `Method`
    Converts string to [FormId](FormId 'Guilded.NET.Base.FormId').
- **[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')** `Class`
  An authorization exception thrown by Guilded API.
  - **[GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException() 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException()')** `Constructor`
    Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with default message.
  - **[GuildedAuthorizationException(string, string, RestResponse)](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse)')** `Constructor`
    Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with information from given parameters.
  - **[GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with inner exception explaining more.
  - **[GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)')** `Constructor`
    Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException').
- **[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')** `Class`
  An exception thrown by Guilded API.
  - **[GuildedException()](GuildedException.GuildedException() 'Guilded.NET.Base.GuildedException.GuildedException()')** `Constructor`
    Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with default message.
  - **[GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse) 'Guilded.NET.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)')** `Constructor`
    Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters.
  - **[GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception) 'Guilded.NET.Base.GuildedException.GuildedException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with inner exception explaining more.
  - **[GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.NET.Base.GuildedException.GuildedException(string)')** `Constructor`
    Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException').
  - **[GuildedException(SerializationInfo, StreamingContext)](GuildedException.GuildedException(SerializationInfo,StreamingContext) 'Guilded.NET.Base.GuildedException.GuildedException(System.Runtime.Serialization.SerializationInfo, System.Runtime.Serialization.StreamingContext)')** `Constructor`
    Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with serialization information.
  - **[Code](GuildedException.Code 'Guilded.NET.Base.GuildedException.Code')** `Property`
    The code name of Guilded error.
  - **[Response](GuildedException.Response 'Guilded.NET.Base.GuildedException.Response')** `Property`
    The response that was received from Guilded API.
  - **[StatusCode](GuildedException.StatusCode 'Guilded.NET.Base.GuildedException.StatusCode')** `Property`
    The HTTP status that was found in the response.
  - **[ToString()](GuildedException.ToString() 'Guilded.NET.Base.GuildedException.ToString()')** `Method`
    Returns string representation of the exception thrown.
- **[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')** `Class`
  A permission exception thrown by Guilded API.
  - **[GuildedPermissionException()](GuildedPermissionException.GuildedPermissionException() 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException()')** `Constructor`
    Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with default message.
  - **[GuildedPermissionException(string, string, RestResponse)](GuildedPermissionException.GuildedPermissionException(string,string,RestResponse) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, string, RestSharp.RestResponse)')** `Constructor`
    Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with information from given parameters.
  - **[GuildedPermissionException(string, Exception)](GuildedPermissionException.GuildedPermissionException(string,Exception) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with inner exception explaining more.
  - **[GuildedPermissionException(string)](GuildedPermissionException.GuildedPermissionException(string) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string)')** `Constructor`
    Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException').
- **[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')** `Class`
  A bad request exception thrown by Guilded API.
  - **[GuildedRequestException()](GuildedRequestException.GuildedRequestException() 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException()')** `Constructor`
    Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with default message.
  - **[GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)')** `Constructor`
    Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters.
  - **[GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with inner exception explaining more.
  - **[GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string)')** `Constructor`
    Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException').
- **[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')** `Class`
  A resource exception thrown by Guilded API.
  - **[GuildedResourceException()](GuildedResourceException.GuildedResourceException() 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException()')** `Constructor`
    Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with default message.
  - **[GuildedResourceException(string, string, RestResponse)](GuildedResourceException.GuildedResourceException(string,string,RestResponse) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.RestResponse)')** `Constructor`
    Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with information from given parameters.
  - **[GuildedResourceException(string, Exception)](GuildedResourceException.GuildedResourceException(string,Exception) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with inner exception explaining more.
  - **[GuildedResourceException(string)](GuildedResourceException.GuildedResourceException(string) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string)')** `Constructor`
    Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException').
- **[GuildedUrl](GuildedUrl 'Guilded.NET.Base.GuildedUrl')** `Class`
  Defines a list of URLs to Guilded services.
  - **[Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api')** `Field`
    The URL to Guilded's API.
  - **[ImageCdn](GuildedUrl.ImageCdn 'Guilded.NET.Base.GuildedUrl.ImageCdn')** `Field`
    The URL to Guilded's image CDN.
  - **[Media](GuildedUrl.Media 'Guilded.NET.Base.GuildedUrl.Media')** `Field`
    The URL to Guilded's media services.
  - **[MediaFileUpload](GuildedUrl.MediaFileUpload 'Guilded.NET.Base.GuildedUrl.MediaFileUpload')** `Field`
    The URL to upload Guilded's media.
  - **[MediaUrlUpload](GuildedUrl.MediaUrlUpload 'Guilded.NET.Base.GuildedUrl.MediaUrlUpload')** `Field`
    The URL to upload Guilded's media.
  - **[Websocket](GuildedUrl.Websocket 'Guilded.NET.Base.GuildedUrl.Websocket')** `Field`
    The URL to Guilded's websocket.
- **[GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')** `Class`
  An error received from Guilded WebSocket.
  - **[GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException() 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException()')** `Constructor`
    Creates a new empty instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException').
  - **[GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)')** `Constructor`
    Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received.
  - **[GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(string)')** `Constructor`
    Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') with a message received.
  - **[GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string) 'Guilded.NET.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)')** `Constructor`
    Creates a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') from WebSocket response message.
  - **[Response](GuildedWebsocketException.Response 'Guilded.NET.Base.GuildedWebsocketException.Response')** `Property`
    The response message from Guilded WebSocket.
- **[HashIdConverter](HashIdConverter 'Guilded.NET.Base.HashIdConverter')** `Class`
  Converts a value to [HashId](HashId 'Guilded.NET.Base.HashId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](HashIdConverter.CanConvertFrom(ITypeDescriptorContext,Type) 'Guilded.NET.Base.HashIdConverter.CanConvertFrom(System.ComponentModel.ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [HashId](HashId 'Guilded.NET.Base.HashId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](HashIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object) 'Guilded.NET.Base.HashIdConverter.ConvertFrom(System.ComponentModel.ITypeDescriptorContext, System.Globalization.CultureInfo, object)')** `Method`
    Converts string to [HashId](HashId 'Guilded.NET.Base.HashId').
- **[HexColorConverter](HexColorConverter 'Guilded.NET.Base.HexColorConverter')** `Class`
  Converts colour to hex for roles.
  - **[CanRead](HexColorConverter.CanRead 'Guilded.NET.Base.HexColorConverter.CanRead')** `Property`
    If this converter can read JSON value.
  - **[CanConvert(Type)](HexColorConverter.CanConvert(Type) 'Guilded.NET.Base.HexColorConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](HexColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.NET.Base.HexColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](HexColorConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.NET.Base.HexColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[IdConverter](IdConverter 'Guilded.NET.Base.IdConverter')** `Class`
  Converts [HashId](HashId 'Guilded.NET.Base.HashId') to string or vice versa in a JSON.
  - **[CanConvert(Type)](IdConverter.CanConvert(Type) 'Guilded.NET.Base.IdConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](IdConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.NET.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [HashId](HashId 'Guilded.NET.Base.HashId') or [FormId](FormId 'Guilded.NET.Base.FormId').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](IdConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.NET.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormId](FormId 'Guilded.NET.Base.FormId')** `Struct`
  An identifier for forms and media uploads.
  - **[FormId(string)](FormId.FormId(string) 'Guilded.NET.Base.FormId.FormId(string)')** `Constructor`
    The identifier for forms and media uploads.
  - **[Random](FormId.Random 'Guilded.NET.Base.FormId.Random')** `Property`
    Creates a random value of [FormId](FormId 'Guilded.NET.Base.FormId').
  - **[Check(string)](FormId.Check(string) 'Guilded.NET.Base.FormId.Check(string)')** `Method`
    Checks if str is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format.
  - **[Equals(FormId)](FormId.Equals(FormId) 'Guilded.NET.Base.FormId.Equals(Guilded.NET.Base.FormId)')** `Method`
    Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and other are equal.
  - **[Equals(object)](FormId.Equals(object) 'Guilded.NET.Base.FormId.Equals(object)')** `Method`
    Returns whether this [FormId](FormId 'Guilded.NET.Base.FormId') instance and obj are equal.
  - **[GetHashCode()](FormId.GetHashCode() 'Guilded.NET.Base.FormId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](FormId.ToString() 'Guilded.NET.Base.FormId.ToString()')** `Method`
    Returns the string representation of this [FormId](FormId 'Guilded.NET.Base.FormId') instance.
  - **[operator ==(FormId, FormId)](FormId.operator(FormId,FormId) 'Guilded.NET.Base.FormId.op_Equality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(FormId, FormId)](FormId.operator!(FormId,FormId) 'Guilded.NET.Base.FormId.op_Inequality(Guilded.NET.Base.FormId, Guilded.NET.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are not equal.
- **[HashId](HashId 'Guilded.NET.Base.HashId')** `Struct`
  An identifier for Guilded teams, users, etc.
  - **[HashId(string)](HashId.HashId(string) 'Guilded.NET.Base.HashId.HashId(string)')** `Constructor`
    The identifier for Guilded teams, users, etc.
  - **[Check(string)](HashId.Check(string) 'Guilded.NET.Base.HashId.Check(string)')** `Method`
    Checks if str is in the correct [FormId](FormId 'Guilded.NET.Base.FormId') format.
  - **[Equals(HashId)](HashId.Equals(HashId) 'Guilded.NET.Base.HashId.Equals(Guilded.NET.Base.HashId)')** `Method`
    Returns whether this [HashId](HashId 'Guilded.NET.Base.HashId') instance and other are equal.
  - **[Equals(object)](HashId.Equals(object) 'Guilded.NET.Base.HashId.Equals(object)')** `Method`
    Returns whether this [HashId](HashId 'Guilded.NET.Base.HashId') instance and obj are equal.
  - **[GetHashCode()](HashId.GetHashCode() 'Guilded.NET.Base.HashId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](HashId.ToString() 'Guilded.NET.Base.HashId.ToString()')** `Method`
    Returns the string representation of this [HashId](HashId 'Guilded.NET.Base.HashId') instance.
  - **[operator ==(HashId, HashId)](HashId.operator(HashId,HashId) 'Guilded.NET.Base.HashId.op_Equality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(HashId, HashId)](HashId.operator!(HashId,HashId) 'Guilded.NET.Base.HashId.op_Inequality(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are not equal.