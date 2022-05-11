---
title: Guilded.Base
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base Namespace
- **[BaseGuildedClient](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')** `Class`
  An API wrapping layer for all Guilded client.
  - **[BaseGuildedClient()](BaseGuildedClient.BaseGuildedClient().md 'Guilded.Base.BaseGuildedClient.BaseGuildedClient()')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api.md 'Guilded.Base.GuildedUrl.Api') as URL.
  - **[BaseGuildedClient(Uri, Uri)](BaseGuildedClient.BaseGuildedClient(Uri,Uri).md 'Guilded.Base.BaseGuildedClient.BaseGuildedClient(Uri, Uri)')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')'s child types.
  - **[ConnectedSubject](BaseGuildedClient.ConnectedSubject.md 'Guilded.Base.BaseGuildedClient.ConnectedSubject')** `Field`
    An event when the client gets connected.
  - **[AdditionalHeaders](BaseGuildedClient.AdditionalHeaders.md 'Guilded.Base.BaseGuildedClient.AdditionalHeaders')** `Property`
    Headers that will be used for REST and WebSocket clients.
  - **[Connected](BaseGuildedClient.Connected.md 'Guilded.Base.BaseGuildedClient.Connected')** `Property`
    An event when the client gets connected.
  - **[Disconnected](BaseGuildedClient.Disconnected.md 'Guilded.Base.BaseGuildedClient.Disconnected')** `Property`
    An event when the client gets disconnected.
  - **[GuildedSerializer](BaseGuildedClient.GuildedSerializer.md 'Guilded.Base.BaseGuildedClient.GuildedSerializer')** `Property`
    A serializer to (de)serialize for JSON from Guilded API.
  - **[LastMessageId](BaseGuildedClient.LastMessageId.md 'Guilded.Base.BaseGuildedClient.LastMessageId')** `Property`
    The identifier of the last WebSocket message.
  - **[Reconnected](BaseGuildedClient.Reconnected.md 'Guilded.Base.BaseGuildedClient.Reconnected')** `Property`
    An event when client gets reconnected.
  - **[Rest](BaseGuildedClient.Rest.md 'Guilded.Base.BaseGuildedClient.Rest')** `Property`
    The REST client for Guilded.
  - **[SerializerSettings](BaseGuildedClient.SerializerSettings.md 'Guilded.Base.BaseGuildedClient.SerializerSettings')** `Property`
    Settings for [Rest](BaseGuildedClient.Rest.md 'Guilded.Base.BaseGuildedClient.Rest') client's JSON (de)serialization.
  - **[Websocket](BaseGuildedClient.Websocket.md 'Guilded.Base.BaseGuildedClient.Websocket')** `Property`
    The WebSocket that will be used by the client.
  - **[WebsocketMessage](BaseGuildedClient.WebsocketMessage.md 'Guilded.Base.BaseGuildedClient.WebsocketMessage')** `Property`
    An event when WebSocket receives a message.
  - **[AddMembershipAsync(HashId, HashId)](BaseGuildedClient.AddMembershipAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Adds the user to the group.
  - **[AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint).md 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint)')** `Method`
    Adds a emote to a message in a channel.
  - **[AddReactionAsync(Guid, uint, uint)](BaseGuildedClient.AddReactionAsync(Guid,uint,uint).md 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint)')** `Method`
    Adds a emote to the content in a channel.
  - **[AddRoleAsync(HashId, HashId, uint)](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint).md 'Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Adds a role to the user.
  - **[AddXpAsync(HashId, HashId, long)](BaseGuildedClient.AddXpAsync(HashId,HashId,long).md 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, long)')** `Method`
    Gives amount to the specified member.
  - **[AddXpAsync(HashId, uint, long)](BaseGuildedClient.AddXpAsync(HashId,uint,long).md 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long)')** `Method`
    Gives amount to the specified role members.
  - **[BanMemberAsync(HashId, HashId, string)](BaseGuildedClient.BanMemberAsync(HashId,HashId,string).md 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the specified member.
  - **[ConnectAsync()](BaseGuildedClient.ConnectAsync().md 'Guilded.Base.BaseGuildedClient.ConnectAsync()')** `Method`
    Connects this client to Guilded.
  - **[CreateDocAsync(Guid, string, string)](BaseGuildedClient.CreateDocAsync(Guid,string,string).md 'Guilded.Base.BaseGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a new document in a channel.
  - **[CreateForumThreadAsync(Guid, string, string)](BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).md 'Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid, string, string)')** `Method`
    Creates a new post in a channel.
  - **[CreateHookMessageAsync(Guid, string, MessageContent)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in a chat using a webhook.
  - **[CreateHookMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string)')** `Method`
    Creates a message with content containing only content in a chat using a webhook.
  - **[CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_).md 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[CreateListItemAsync(Guid, string, string)](BaseGuildedClient.CreateListItemAsync(Guid,string,string).md 'Guilded.Base.BaseGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a new item in a channel.
  - **[CreateMessageAsync(Guid, bool, bool, Guid[], Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,bool,bool,Guid[],Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient.CreateMessageAsync(Guid,MessageContent).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string, bool, bool, Guid[], Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[],Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string, bool, bool, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string, bool, bool)](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool)')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, Guid[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Embed[]).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a new message in a channel.
  - **[CreateMessageAsync(Guid, string)](BaseGuildedClient.CreateMessageAsync(Guid,string).md 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string)')** `Method`
    Creates a new message in a channel.
  - **[CreateWebhookAsync(HashId, Guid, string)](BaseGuildedClient.CreateWebhookAsync(HashId,Guid,string).md 'Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a new webhook in the specified channel.
  - **[DeleteDocAsync(Guid, uint)](BaseGuildedClient.DeleteDocAsync(Guid,uint).md 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes a doc from a channel.
  - **[DeleteListItemAsync(Guid, Guid)](BaseGuildedClient.DeleteListItemAsync(Guid,Guid).md 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid)')** `Method`
    Deletes an listItem from a channel.
  - **[DeleteMessageAsync(Guid, Guid)](BaseGuildedClient.DeleteMessageAsync(Guid,Guid).md 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid)')** `Method`
    Deletes a message from a channel.
  - **[DeleteNicknameAsync(HashId, HashId)](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the nickname of the specified member in the server.
  - **[DeleteWebhookAsync(HashId, Guid)](BaseGuildedClient.DeleteWebhookAsync(HashId,Guid).md 'Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Deletes the specified webhook.
  - **[Deserialize&lt;T&gt;(string)](BaseGuildedClient.Deserialize_T_(string).md 'Guilded.Base.BaseGuildedClient.Deserialize<T>(string)')** `Method`
    Deserializes JSON with client's Guilded serializer.
  - **[DisconnectAsync()](BaseGuildedClient.DisconnectAsync().md 'Guilded.Base.BaseGuildedClient.DisconnectAsync()')** `Method`
    Disconnects this client from Guilded.
  - **[Dispose()](BaseGuildedClient.Dispose().md 'Guilded.Base.BaseGuildedClient.Dispose()')** `Method`
    Disposes [BaseGuildedClient](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient') instance.
  - **[ExecuteRequestAsync(RestRequest)](BaseGuildedClient.ExecuteRequestAsync(RestRequest).md 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest)')** `Method`
    Executes a request and receives a response or an error.
  - **[ExecuteRequestAsync&lt;T&gt;(RestRequest)](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest).md 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest)')** `Method`
    Executes a request and receives ra esponse or an error.
  - **[GetBanAsync(HashId, HashId)](BaseGuildedClient.GetBanAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the information about the ban of the member.
  - **[GetBansAsync(HashId)](BaseGuildedClient.GetBansAsync(HashId).md 'Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of server bans.
  - **[GetDocAsync(Guid, uint)](BaseGuildedClient.GetDocAsync(Guid,uint).md 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint)')** `Method`
    Gets a doc from a channel.
  - **[GetDocsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](BaseGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_).md 'Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a set of documents from a channel.
  - **[GetListItemAsync(Guid, Guid)](BaseGuildedClient.GetListItemAsync(Guid,Guid).md 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid)')** `Method`
    Gets a listItem from a channel.
  - **[GetListItemsAsync(Guid)](BaseGuildedClient.GetListItemsAsync(Guid).md 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid)')** `Method`
    Gets a set of list items from a channel.
  - **[GetMemberAsync(HashId, HashId)](BaseGuildedClient.GetMemberAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets full information about the specified member in the server.
  - **[GetMemberRolesAsync(HashId, HashId)](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the list of roles the member holds in the server.
  - **[GetMembersAsync(HashId)](BaseGuildedClient.GetMembersAsync(HashId).md 'Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of all server members.
  - **[GetMessageAsync(Guid, Guid)](BaseGuildedClient.GetMessageAsync(Guid,Guid).md 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid)')** `Method`
    Gets a message from a channel.
  - **[GetMessagesAsync(Guid, bool, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;DateTime&gt;)](BaseGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_).md 'Guilded.Base.BaseGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>)')** `Method`
    Gets a set of messages from a channel.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](BaseGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md 'Guilded.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[GetWebhookAsync(HashId, Guid)](BaseGuildedClient.GetWebhookAsync(HashId,Guid).md 'Guilded.Base.BaseGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Gets the specified webhook.
  - **[GetWebhooksAsync(HashId, Nullable&lt;Guid&gt;)](BaseGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_).md 'Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>)')** `Method`
    Gets a list of webhooks.
  - **[KickMemberAsync(HashId, HashId)](BaseGuildedClient.KickMemberAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the specified member from the server.
  - **[OnWebsocketResponse(ResponseMessage)](BaseGuildedClient.OnWebsocketResponse(ResponseMessage).md 'Guilded.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage)')** `Method`
    Used for when any WebSocket receives a message.
  - **[RemoveMembershipAsync(HashId, HashId)](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the user from the group.
  - **[RemoveRoleAsync(HashId, HashId, uint)](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes a role from the user.
  - **[Serialize(object)](BaseGuildedClient.Serialize(object).md 'Guilded.Base.BaseGuildedClient.Serialize(object)')** `Method`
    Serializes object with client's Guilded serializer.
  - **[UnbanMemberAsync(HashId, HashId)](BaseGuildedClient.UnbanMemberAsync(HashId,HashId).md 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the specified member.
  - **[UpdateDocAsync(Guid, uint, string, string)](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string).md 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits the content or the title of a doc in a channel.
  - **[UpdateListItemAsync(Guid, Guid, string, string)](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string)')** `Method`
    Edits the message of the listItem or the note in a channel.
  - **[UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string)')** `Method`
    Edits the content of a message in a channel.
  - **[UpdateNicknameAsync(HashId, HashId, string)](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Changes the nickname of the specified member in the server.
  - **[UpdateWebhookAsync(HashId, Guid, string, Nullable&lt;Guid&gt;)](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>)')** `Method`
    Updates the specified webhook in the specified server.
  - **[UploadFileAsync(string, byte[], string)](BaseGuildedClient.UploadFileAsync(string,byte[],string).md 'Guilded.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(string, byte[])](BaseGuildedClient.UploadFileAsync(string,byte[]).md 'Guilded.Base.BaseGuildedClient.UploadFileAsync(string, byte[])')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(Uri)](BaseGuildedClient.UploadFileAsync(Uri).md 'Guilded.Base.BaseGuildedClient.UploadFileAsync(Uri)')** `Method`
    Uploads a file to Guilded.
- **[BaseObject](BaseObject.md 'Guilded.Base.BaseObject')** `Class`
  Represents the base for all Guilded models.
  - **[Serialize(JsonConverter[])](BaseObject.Serialize(JsonConverter[]).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonConverter[])')** `Method`
    Returns the serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance.
  - **[Serialize(JsonSerializer)](BaseObject.Serialize(JsonSerializer).md 'Guilded.Base.BaseObject.Serialize(Newtonsoft.Json.JsonSerializer)')** `Method`
    Returns serialized [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') instance.
- **[ClientObject](ClientObject.md 'Guilded.Base.ClientObject')** `Class`
  Represents a base for Guilded models that require a [client](ClientObject.ParentClient.md 'Guilded.Base.ClientObject.ParentClient').
  - **[ParentClient](ClientObject.ParentClient.md 'Guilded.Base.ClientObject.ParentClient')** `Property`
    Gets the parent client that adopts [this object](ClientObject.md 'Guilded.Base.ClientObject').
- **[DecimalColorConverter](DecimalColorConverter.md 'Guilded.Base.DecimalColorConverter')** `Class`
  Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format.
  - **[CanConvert(Type)](DecimalColorConverter.CanConvert(Type).md 'Guilded.Base.DecimalColorConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](DecimalColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer).md 'Guilded.Base.DecimalColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](DecimalColorConverter.WriteJson(JsonWriter,object,JsonSerializer).md 'Guilded.Base.DecimalColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormIdConverter](FormIdConverter.md 'Guilded.Base.FormIdConverter')** `Class`
  Converts a value to [FormId](FormId.md 'Guilded.Base.FormId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](FormIdConverter.CanConvertFrom(ITypeDescriptorContext,Type).md 'Guilded.Base.FormIdConverter.CanConvertFrom(ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [FormId](FormId.md 'Guilded.Base.FormId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object).md 'Guilded.Base.FormIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object)')** `Method`
    Converts string to [FormId](FormId.md 'Guilded.Base.FormId').
- **[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')** `Class`
  An authorization exception thrown by Guilded API.
  - **[GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException().md 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException()')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') with a [default message](https://docs.microsoft.com/en-us/dotnet/api/System.Exception.Message 'System.Exception.Message').
  - **[GuildedAuthorizationException(string, string, RestResponse)](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse).md 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') from a response.
  - **[GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception).md 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') with inner explaining more.
  - **[GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string).md 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException') with only a message.
- **[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')** `Class`
  Represents an exception thrown by Guilded API.
  - **[GuildedException()](GuildedException.GuildedException().md 'Guilded.Base.GuildedException.GuildedException()')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') with a default message.
  - **[GuildedException(SerializationInfo, StreamingContext)](GuildedException.GuildedException(SerializationInfo,StreamingContext).md 'Guilded.Base.GuildedException.GuildedException(SerializationInfo, StreamingContext)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') with serialization information.
  - **[GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse).md 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') from a response.
  - **[GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception).md 'Guilded.Base.GuildedException.GuildedException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') with an inner explaining more.
  - **[GuildedException(string)](GuildedException.GuildedException(string).md 'Guilded.Base.GuildedException.GuildedException(string)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') with only a message.
  - **[Code](GuildedException.Code.md 'Guilded.Base.GuildedException.Code')** `Property`
    Gets the code name of Guilded error.
  - **[Response](GuildedException.Response.md 'Guilded.Base.GuildedException.Response')** `Property`
    Gets the response that was received from Guilded API.
  - **[StatusCode](GuildedException.StatusCode.md 'Guilded.Base.GuildedException.StatusCode')** `Property`
    Gets the HTTP status that was found in the response.
  - **[ToString()](GuildedException.ToString().md 'Guilded.Base.GuildedException.ToString()')** `Method`
    Returns string representation of the exception thrown.
- **[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')** `Class`
  Represents an exception thrown by Guilded API when the client has no permission to perform a request.
  - **[GuildedPermissionException()](GuildedPermissionException.GuildedPermissionException().md 'Guilded.Base.GuildedPermissionException.GuildedPermissionException()')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with default message.
  - **[GuildedPermissionException(string, string, RestResponse)](GuildedPermissionException.GuildedPermissionException(string,string,RestResponse).md 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with information from given parameters.
  - **[GuildedPermissionException(string, Exception)](GuildedPermissionException.GuildedPermissionException(string,Exception).md 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with an inner explaining more.
  - **[GuildedPermissionException(string)](GuildedPermissionException.GuildedPermissionException(string).md 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException').
- **[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')** `Class`
  Represents an exception thrown by Guilded API when a request has invalid parameters.
  - **[GuildedRequestException()](GuildedRequestException.GuildedRequestException().md 'Guilded.Base.GuildedRequestException.GuildedRequestException()')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with default message.
  - **[GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with information from given parameters.
  - **[GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with an inner explaining more.
  - **[GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException').
- **[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')** `Class`
  Represents an exception thrown by Guilded API when a request has invalid path.
  - **[GuildedResourceException()](GuildedResourceException.GuildedResourceException().md 'Guilded.Base.GuildedResourceException.GuildedResourceException()')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with default message.
  - **[GuildedResourceException(string, string, RestResponse)](GuildedResourceException.GuildedResourceException(string,string,RestResponse).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with information from given parameters.
  - **[GuildedResourceException(string, Exception)](GuildedResourceException.GuildedResourceException(string,Exception).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with an inner explaining more.
  - **[GuildedResourceException(string)](GuildedResourceException.GuildedResourceException(string).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException').
- **[GuildedUrl](GuildedUrl.md 'Guilded.Base.GuildedUrl')** `Class`
  Defines a list of URLs to Guilded services.
  - **[Api](GuildedUrl.Api.md 'Guilded.Base.GuildedUrl.Api')** `Field`
    The base URL for Guilded's API requests.
  - **[ImageCdn](GuildedUrl.ImageCdn.md 'Guilded.Base.GuildedUrl.ImageCdn')** `Field`
    The URL to Guilded's image CDN.
  - **[Media](GuildedUrl.Media.md 'Guilded.Base.GuildedUrl.Media')** `Field`
    The base URL for Guilded's media API.
  - **[MediaFileUpload](GuildedUrl.MediaFileUpload.md 'Guilded.Base.GuildedUrl.MediaFileUpload')** `Field`
    The URL for to upload Guilded's media from files.
  - **[MediaUrlUpload](GuildedUrl.MediaUrlUpload.md 'Guilded.Base.GuildedUrl.MediaUrlUpload')** `Field`
    The URL to upload Guilded's media from URLs.
  - **[Websocket](GuildedUrl.Websocket.md 'Guilded.Base.GuildedUrl.Websocket')** `Field`
    The URL to Guilded's WebSockets.
- **[GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')** `Class`
  Represents an error received from Guilded WebSocket.
  - **[GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException().md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException()')** `Constructor`
    Initializes a new empty instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException').
  - **[GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with an inner explaining more.
  - **[GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') with a message.
  - **[GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string).md 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException') from WebSocket message.
  - **[Response](GuildedWebsocketException.Response.md 'Guilded.Base.GuildedWebsocketException.Response')** `Property`
    Gets the response message from Guilded WebSocket.
- **[HashIdConverter](HashIdConverter.md 'Guilded.Base.HashIdConverter')** `Class`
  Converts a value to [HashId](HashId.md 'Guilded.Base.HashId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](HashIdConverter.CanConvertFrom(ITypeDescriptorContext,Type).md 'Guilded.Base.HashIdConverter.CanConvertFrom(ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [HashId](HashId.md 'Guilded.Base.HashId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](HashIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object).md 'Guilded.Base.HashIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object)')** `Method`
    Converts string to [HashId](HashId.md 'Guilded.Base.HashId').
- **[HexColorConverter](HexColorConverter.md 'Guilded.Base.HexColorConverter')** `Class`
  Converts colour to hex for roles.
  - **[CanRead](HexColorConverter.CanRead.md 'Guilded.Base.HexColorConverter.CanRead')** `Property`
    If this converter can read JSON value.
  - **[CanConvert(Type)](HexColorConverter.CanConvert(Type).md 'Guilded.Base.HexColorConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](HexColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer).md 'Guilded.Base.HexColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](HexColorConverter.WriteJson(JsonWriter,object,JsonSerializer).md 'Guilded.Base.HexColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[IdConverter](IdConverter.md 'Guilded.Base.IdConverter')** `Class`
  Converts [HashId](HashId.md 'Guilded.Base.HashId') to string or vice versa in a JSON.
  - **[CanConvert(Type)](IdConverter.CanConvert(Type).md 'Guilded.Base.IdConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](IdConverter.ReadJson(JsonReader,Type,object,JsonSerializer).md 'Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [HashId](HashId.md 'Guilded.Base.HashId') or [FormId](FormId.md 'Guilded.Base.FormId').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](IdConverter.WriteJson(JsonWriter,object,JsonSerializer).md 'Guilded.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormId](FormId.md 'Guilded.Base.FormId')** `Struct`
  An identifier for forms and media uploads.
  - **[FormId(string)](FormId.FormId(string).md 'Guilded.Base.FormId.FormId(string)')** `Constructor`
    The identifier for forms and media uploads.
  - **[Random](FormId.Random.md 'Guilded.Base.FormId.Random')** `Property`
    Creates a random value of [FormId](FormId.md 'Guilded.Base.FormId').
  - **[Check(string)](FormId.Check(string).md 'Guilded.Base.FormId.Check(string)')** `Method`
    Returns whether str is in the correct [FormId](FormId.md 'Guilded.Base.FormId') format.
  - **[Equals(FormId)](FormId.Equals(FormId).md 'Guilded.Base.FormId.Equals(Guilded.Base.FormId)')** `Method`
    Returns whether this [FormId](FormId.md 'Guilded.Base.FormId') instance and other are equal.
  - **[Equals(object)](FormId.Equals(object).md 'Guilded.Base.FormId.Equals(object)')** `Method`
    Returns whether this [FormId](FormId.md 'Guilded.Base.FormId') instance and obj are equal.
  - **[GetHashCode()](FormId.GetHashCode().md 'Guilded.Base.FormId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](FormId.ToString().md 'Guilded.Base.FormId.ToString()')** `Method`
    Returns the string representation of this [FormId](FormId.md 'Guilded.Base.FormId') instance.
  - **[operator ==(FormId, FormId)](FormId.operator(FormId,FormId).md 'Guilded.Base.FormId.op_Equality(Guilded.Base.FormId, Guilded.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(FormId, FormId)](FormId.operator!(FormId,FormId).md 'Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId, Guilded.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are not equal.
- **[HashId](HashId.md 'Guilded.Base.HashId')** `Struct`
  Represents an identifier for Guilded servers, users, etc.
  - **[HashId(string)](HashId.HashId(string).md 'Guilded.Base.HashId.HashId(string)')** `Constructor`
    Initializes a new instance of [HashId](HashId.md 'Guilded.Base.HashId').
  - **[Check(string)](HashId.Check(string).md 'Guilded.Base.HashId.Check(string)')** `Method`
    Returns whether str is in the correct [HashId](HashId.md 'Guilded.Base.HashId') format.
  - **[Equals(HashId)](HashId.Equals(HashId).md 'Guilded.Base.HashId.Equals(Guilded.Base.HashId)')** `Method`
    Returns whether this [HashId](HashId.md 'Guilded.Base.HashId') instance and other are equal.
  - **[Equals(object)](HashId.Equals(object).md 'Guilded.Base.HashId.Equals(object)')** `Method`
    Returns whether this [HashId](HashId.md 'Guilded.Base.HashId') instance and obj are equal.
  - **[GetHashCode()](HashId.GetHashCode().md 'Guilded.Base.HashId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](HashId.ToString().md 'Guilded.Base.HashId.ToString()')** `Method`
    Returns the string representation of [HashId](HashId.md 'Guilded.Base.HashId') instance.
  - **[operator ==(HashId, HashId)](HashId.operator(HashId,HashId).md 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(HashId, HashId)](HashId.operator!(HashId,HashId).md 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are not equal.