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
- **[BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')** `Class`
  An API wrapping layer for all Guilded client.
  - **[BaseGuildedClient()](BaseGuildedClient.BaseGuildedClient() 'Guilded.Base.BaseGuildedClient.BaseGuildedClient()')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.Base.GuildedUrl.Api') as URL.
  - **[BaseGuildedClient(Uri, Uri)](BaseGuildedClient.BaseGuildedClient(Uri,Uri) 'Guilded.Base.BaseGuildedClient.BaseGuildedClient(Uri, Uri)')** `Constructor`
    Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types.
  - **[ConnectedSubject](BaseGuildedClient.ConnectedSubject 'Guilded.Base.BaseGuildedClient.ConnectedSubject')** `Field`
    An event when the client gets connected.
  - **[AdditionalHeaders](BaseGuildedClient.AdditionalHeaders 'Guilded.Base.BaseGuildedClient.AdditionalHeaders')** `Property`
    Headers that will be used for REST and WebSocket clients.
  - **[Connected](BaseGuildedClient.Connected 'Guilded.Base.BaseGuildedClient.Connected')** `Property`
    An event when the client gets connected.
  - **[Disconnected](BaseGuildedClient.Disconnected 'Guilded.Base.BaseGuildedClient.Disconnected')** `Property`
    An event when the client gets disconnected.
  - **[GuildedSerializer](BaseGuildedClient.GuildedSerializer 'Guilded.Base.BaseGuildedClient.GuildedSerializer')** `Property`
    A serializer to (de)serialize for JSON from Guilded API.
  - **[LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId')** `Property`
    The identifier of the last WebSocket message.
  - **[Reconnected](BaseGuildedClient.Reconnected 'Guilded.Base.BaseGuildedClient.Reconnected')** `Property`
    An event when client gets reconnected.
  - **[Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest')** `Property`
    The REST client for Guilded.
  - **[SerializerSettings](BaseGuildedClient.SerializerSettings 'Guilded.Base.BaseGuildedClient.SerializerSettings')** `Property`
    Settings for [Rest](BaseGuildedClient.Rest 'Guilded.Base.BaseGuildedClient.Rest') client's JSON (de)serialization.
  - **[Websocket](BaseGuildedClient.Websocket 'Guilded.Base.BaseGuildedClient.Websocket')** `Property`
    The WebSocket that will be used by the client.
  - **[WebsocketMessage](BaseGuildedClient.WebsocketMessage 'Guilded.Base.BaseGuildedClient.WebsocketMessage')** `Property`
    An event when WebSocket receives a message.
  - **[AddMemberBanAsync(HashId, HashId, string)](BaseGuildedClient.AddMemberBanAsync(HashId,HashId,string) 'Guilded.Base.BaseGuildedClient.AddMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[AddMembershipAsync(HashId, HashId)](BaseGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Adds user to group.
  - **[AddReactionAsync(Guid, Guid, uint)](BaseGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, Guid, uint)')** `Method`
    Adds emote to the message.
  - **[AddReactionAsync(Guid, uint, uint)](BaseGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.Base.BaseGuildedClient.AddReactionAsync(Guid, uint, uint)')** `Method`
    Adds emote to the content.
  - **[AddRoleAsync(HashId, HashId, uint)](BaseGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.Base.BaseGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Adds a role to [the user](User 'Guilded.Base.Users.User').
  - **[AddXpAsync(HashId, HashId, long)](BaseGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, long)')** `Method`
    Gives amount to the specified member.
  - **[AddXpAsync(HashId, uint, long)](BaseGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.Base.BaseGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long)')** `Method`
    Gives amount to the role members.
  - **[BanMemberAsync(HashId, HashId, string)](BaseGuildedClient.BanMemberAsync(HashId,HashId,string) 'Guilded.Base.BaseGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[CompleteListItemAsync(Guid, Guid)](BaseGuildedClient.CompleteListItemAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.CompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[ConnectAsync()](BaseGuildedClient.ConnectAsync() 'Guilded.Base.BaseGuildedClient.ConnectAsync()')** `Method`
    Connects this client to Guilded.
  - **[CreateChannelAsync(HashId, string, ChannelType, string, Nullable&lt;HashId&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](BaseGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_) 'Guilded.Base.BaseGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Creates a new channel in the server.
  - **[CreateDocAsync(Guid, string, string)](BaseGuildedClient.CreateDocAsync(Guid,string,string) 'Guilded.Base.BaseGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a [new document](Doc 'Guilded.Base.Content.Doc').
  - **[CreateEventAsync(Guid, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;TimeSpan&gt;, bool)](BaseGuildedClient.CreateEventAsync(Guid,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_TimeSpan_,bool) 'Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<TimeSpan>, bool)')** `Method`
    Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CreateEventAsync(Guid, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, bool)](BaseGuildedClient.CreateEventAsync(Guid,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,bool) 'Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, bool)')** `Method`
    Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CreateHookMessageAsync(Guid, string, MessageContent)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhook.
  - **[CreateHookMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateHookMessageAsync(Guid, string, string)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,string) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, string)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook.
  - **[CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Guid, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[CreateHookMessageAsync(Uri, MessageContent)](BaseGuildedClient.CreateHookMessageAsync(Uri,MessageContent) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateHookMessageAsync(Uri, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Uri,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateHookMessageAsync(Uri, string, Embed[])](BaseGuildedClient.CreateHookMessageAsync(Uri,string,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateHookMessageAsync(Uri, string, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Uri,string,IList_Embed_) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateHookMessageAsync(Uri, string)](BaseGuildedClient.CreateHookMessageAsync(Uri,string) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, string)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateHookMessageAsync(Uri, IList&lt;Embed&gt;)](BaseGuildedClient.CreateHookMessageAsync(Uri,IList_Embed_) 'Guilded.Base.BaseGuildedClient.CreateHookMessageAsync(Uri, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateListItemAsync(Guid, string, string)](BaseGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.Base.BaseGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a [new list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreateMessageAsync(Guid, bool, bool, Guid[], Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,bool,bool,Guid[],Embed[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, MessageContent)](BaseGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string, bool, bool, Guid[], Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[],Embed[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string, bool, bool, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string, bool, bool)](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string, Guid[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, Guid[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string, Embed[])](BaseGuildedClient.CreateMessageAsync(Guid,string,Embed[]) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateMessageAsync(Guid, string)](BaseGuildedClient.CreateMessageAsync(Guid,string) 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateTopicAsync(Guid, string, string)](BaseGuildedClient.CreateTopicAsync(Guid,string,string) 'Guilded.Base.BaseGuildedClient.CreateTopicAsync(Guid, string, string)')** `Method`
    Creates a [new forum post](Topic 'Guilded.Base.Content.Topic').
  - **[CreateWebhookAsync(HashId, Guid, string)](BaseGuildedClient.CreateWebhookAsync(HashId,Guid,string) 'Guilded.Base.BaseGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteChannelAsync(Guid)](BaseGuildedClient.DeleteChannelAsync(Guid) 'Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid)')** `Method`
    Deletes the channel.
  - **[DeleteDocAsync(Guid, uint)](BaseGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes the doc.
  - **[DeleteEventAsync(Guid, uint)](BaseGuildedClient.DeleteEventAsync(Guid,uint) 'Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid, uint)')** `Method`
    Deletes the calendarEvent.
  - **[DeleteListItemAsync(Guid, Guid)](BaseGuildedClient.DeleteListItemAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid)')** `Method`
    Deletes the listItem.
  - **[DeleteMessageAsync(Guid, Guid)](BaseGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.DeleteMessageAsync(Guid, Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](BaseGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[DeleteWebhookAsync(HashId, Guid)](BaseGuildedClient.DeleteWebhookAsync(HashId,Guid) 'Guilded.Base.BaseGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Deletes the webhook.
  - **[Deserialize&lt;T&gt;(string)](BaseGuildedClient.Deserialize_T_(string) 'Guilded.Base.BaseGuildedClient.Deserialize<T>(string)')** `Method`
    Deserializes JSON with client's Guilded serializer.
  - **[DisconnectAsync()](BaseGuildedClient.DisconnectAsync() 'Guilded.Base.BaseGuildedClient.DisconnectAsync()')** `Method`
    Disconnects this client from Guilded.
  - **[Dispose()](BaseGuildedClient.Dispose() 'Guilded.Base.BaseGuildedClient.Dispose()')** `Method`
    Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') instance.
  - **[DisposeAsync()](BaseGuildedClient.DisposeAsync() 'Guilded.Base.BaseGuildedClient.DisposeAsync()')** `Method`
    Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') instance.
  - **[ExecuteRequestAsync(RestRequest)](BaseGuildedClient.ExecuteRequestAsync(RestRequest) 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync(RestSharp.RestRequest)')** `Method`
    Executes a request and receives a response or an error.
  - **[ExecuteRequestAsync&lt;T&gt;(RestRequest)](BaseGuildedClient.ExecuteRequestAsync_T_(RestRequest) 'Guilded.Base.BaseGuildedClient.ExecuteRequestAsync<T>(RestSharp.RestRequest)')** `Method`
    Executes a request and receives response or an error.
  - **[GetBanAsync(HashId, HashId)](BaseGuildedClient.GetBanAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member.
  - **[GetBansAsync(HashId)](BaseGuildedClient.GetBansAsync(HashId) 'Guilded.Base.BaseGuildedClient.GetBansAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of server bans.
  - **[GetChannelAsync(Guid)](BaseGuildedClient.GetChannelAsync(Guid) 'Guilded.Base.BaseGuildedClient.GetChannelAsync(Guid)')** `Method`
    Gets the channel.
  - **[GetDocAsync(Guid, uint)](BaseGuildedClient.GetDocAsync(Guid,uint) 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint)')** `Method`
    Gets the doc.
  - **[GetDocsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](BaseGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.Base.BaseGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [documents](Doc 'Guilded.Base.Content.Doc').
  - **[GetEventAsync(Guid, uint)](BaseGuildedClient.GetEventAsync(Guid,uint) 'Guilded.Base.BaseGuildedClient.GetEventAsync(Guid, uint)')** `Method`
    Gets the calendarEvent.
  - **[GetEventsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](BaseGuildedClient.GetEventsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.Base.BaseGuildedClient.GetEventsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[GetListItemAsync(Guid, Guid)](BaseGuildedClient.GetListItemAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid)')** `Method`
    Gets the listItem from a channel.
  - **[GetListItemsAsync(Guid)](BaseGuildedClient.GetListItemsAsync(Guid) 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid)')** `Method`
    Gets a set of [list items](ListItem 'Guilded.Base.Content.ListItem') from the channel.
  - **[GetMemberAsync(HashId, HashId)](BaseGuildedClient.GetMemberAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets full information about the member.
  - **[GetMemberRolesAsync(HashId, HashId)](BaseGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the list of roles member holds.
  - **[GetMembersAsync(HashId)](BaseGuildedClient.GetMembersAsync(HashId) 'Guilded.Base.BaseGuildedClient.GetMembersAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of all server[members](Member 'Guilded.Base.Servers.Member').
  - **[GetMessageAsync(Guid, Guid)](BaseGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.GetMessageAsync(Guid, Guid)')** `Method`
    Gets the message.
  - **[GetMessagesAsync(Guid, bool, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;DateTime&gt;)](BaseGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_) 'Guilded.Base.BaseGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [messages](Message 'Guilded.Base.Content.Message') from the channel.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](BaseGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[GetWebhookAsync(HashId, Guid)](BaseGuildedClient.GetWebhookAsync(HashId,Guid) 'Guilded.Base.BaseGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Gets the webhook.
  - **[GetWebhooksAsync(HashId, Nullable&lt;Guid&gt;)](BaseGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_) 'Guilded.Base.BaseGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>)')** `Method`
    Gets a list of [webhooks](Webhook 'Guilded.Base.Servers.Webhook').
  - **[KickMemberAsync(HashId, HashId)](BaseGuildedClient.KickMemberAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[OnWebsocketResponse(ResponseMessage)](BaseGuildedClient.OnWebsocketResponse(ResponseMessage) 'Guilded.Base.BaseGuildedClient.OnWebsocketResponse(Websocket.Client.ResponseMessage)')** `Method`
    Used for when any WebSocket receives a message.
  - **[RemoveMemberAsync(HashId, HashId)](BaseGuildedClient.RemoveMemberAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[RemoveMemberBanAsync(HashId, HashId)](BaseGuildedClient.RemoveMemberBanAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[RemoveMembershipAsync(HashId, HashId)](BaseGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes user from group.
  - **[RemoveReactionAsync(Guid, Guid, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, Guid, uint)')** `Method`
    Removes emote from the message.
  - **[RemoveReactionAsync(Guid, uint, uint)](BaseGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.Base.BaseGuildedClient.RemoveReactionAsync(Guid, uint, uint)')** `Method`
    Removes emote from the content.
  - **[RemoveRoleAsync(HashId, HashId, uint)](BaseGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.Base.BaseGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes role from [the user](User 'Guilded.Base.Users.User').
  - **[Serialize(object)](BaseGuildedClient.Serialize(object) 'Guilded.Base.BaseGuildedClient.Serialize(object)')** `Method`
    Serializes object with client's Guilded serializer.
  - **[UnbanMemberAsync(HashId, HashId)](BaseGuildedClient.UnbanMemberAsync(HashId,HashId) 'Guilded.Base.BaseGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[UncompleteListItemAsync(Guid, Guid)](BaseGuildedClient.UncompleteListItemAsync(Guid,Guid) 'Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[UpdateChannelAsync(Guid, string, string, Nullable&lt;bool&gt;)](BaseGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_) 'Guilded.Base.BaseGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>)')** `Method`
    Updates the channel.
  - **[UpdateDocAsync(Guid, uint, string, string)](BaseGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.Base.BaseGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits content or title of the doc.
  - **[UpdateEventAsync(Guid, uint, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;TimeSpan&gt;, Nullable&lt;bool&gt;)](BaseGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_TimeSpan_,Nullable_bool_) 'Guilded.Base.BaseGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<TimeSpan>, System.Nullable<bool>)')** `Method`
    Edits the calendarEvent.
  - **[UpdateEventAsync(Guid, uint, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](BaseGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.Base.BaseGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Edits the calendarEvent.
  - **[UpdateListItemAsync(Guid, Guid, string, string)](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string) 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string)')** `Method`
    Edits the message of the listItem.
  - **[UpdateMessageAsync(Guid, Guid, MessageContent)](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent) 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Edits the content of a message.
  - **[UpdateMessageAsync(Guid, Guid, Embed[])](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Embed[]) 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Embeds.Embed[])')** `Method`
    Edits the content of a message.
  - **[UpdateMessageAsync(Guid, Guid, string, Embed[])](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[]) 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[])')** `Method`
    Edits the content of a message.
  - **[UpdateMessageAsync(Guid, Guid, string)](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string) 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string)')** `Method`
    Edits the content of a message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](BaseGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.Base.BaseGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[UpdateWebhookAsync(HashId, Guid, string, Nullable&lt;Guid&gt;)](BaseGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_) 'Guilded.Base.BaseGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>)')** `Method`
    Edits the webhook.
  - **[UploadFileAsync(string, byte[], string)](BaseGuildedClient.UploadFileAsync(string,byte[],string) 'Guilded.Base.BaseGuildedClient.UploadFileAsync(string, byte[], string)')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(string, byte[])](BaseGuildedClient.UploadFileAsync(string,byte[]) 'Guilded.Base.BaseGuildedClient.UploadFileAsync(string, byte[])')** `Method`
    Uploads a file to Guilded.
  - **[UploadFileAsync(Uri)](BaseGuildedClient.UploadFileAsync(Uri) 'Guilded.Base.BaseGuildedClient.UploadFileAsync(Uri)')** `Method`
    Uploads a file to Guilded.
- **[BaseModel](BaseModel 'Guilded.Base.BaseModel')** `Class`
  Represents the base for all Guilded models.
  - **[Serialize(JsonConverter[])](BaseModel.Serialize(JsonConverter[]) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonConverter[])')** `Method`
    Returns the serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance.
  - **[Serialize(JsonSerializer)](BaseModel.Serialize(JsonSerializer) 'Guilded.Base.BaseModel.Serialize(Newtonsoft.Json.JsonSerializer)')** `Method`
    Returns serialized [BaseModel](BaseModel 'Guilded.Base.BaseModel') instance.
- **[ContentModel](ContentModel 'Guilded.Base.ContentModel')** `Class`
  Represents a base for Guilded models that require a [client](ContentModel.ParentClient 'Guilded.Base.ContentModel.ParentClient').
  - **[ParentClient](ContentModel.ParentClient 'Guilded.Base.ContentModel.ParentClient')** `Property`
    Gets [the parent client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') that adopts [this object](ContentModel 'Guilded.Base.ContentModel').
- **[DecimalColorConverter](DecimalColorConverter 'Guilded.Base.DecimalColorConverter')** `Class`
  Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format.
  - **[CanConvert(Type)](DecimalColorConverter.CanConvert(Type) 'Guilded.Base.DecimalColorConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](DecimalColorConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.Base.DecimalColorConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](DecimalColorConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.Base.DecimalColorConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormIdConverter](FormIdConverter 'Guilded.Base.FormIdConverter')** `Class`
  Converts a value to [FormId](FormId 'Guilded.Base.FormId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](FormIdConverter.CanConvertFrom(ITypeDescriptorContext,Type) 'Guilded.Base.FormIdConverter.CanConvertFrom(ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [FormId](FormId 'Guilded.Base.FormId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object) 'Guilded.Base.FormIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object)')** `Method`
    Converts string to [FormId](FormId 'Guilded.Base.FormId').
- **[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')** `Class`
  An authorization exception thrown by Guilded API.
  - **[GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException() 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException()')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with a [default message](https://docs.microsoft.com/en-us/dotnet/api/System.Exception.Message 'System.Exception.Message').
  - **[GuildedAuthorizationException(string, string, RestResponse)](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') from a response.
  - **[GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with inner explaining more.
  - **[GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)')** `Constructor`
    Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with only a message.
- **[GuildedException](GuildedException 'Guilded.Base.GuildedException')** `Class`
  Represents an exception thrown by Guilded API.
  - **[GuildedException()](GuildedException.GuildedException() 'Guilded.Base.GuildedException.GuildedException()')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with a default message.
  - **[GuildedException(SerializationInfo, StreamingContext)](GuildedException.GuildedException(SerializationInfo,StreamingContext) 'Guilded.Base.GuildedException.GuildedException(SerializationInfo, StreamingContext)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with serialization information.
  - **[GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse) 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') from a response.
  - **[GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception) 'Guilded.Base.GuildedException.GuildedException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with an inner explaining more.
  - **[GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.Base.GuildedException.GuildedException(string)')** `Constructor`
    Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with only a message.
  - **[Code](GuildedException.Code 'Guilded.Base.GuildedException.Code')** `Property`
    Gets the code name of Guilded error.
  - **[Response](GuildedException.Response 'Guilded.Base.GuildedException.Response')** `Property`
    Gets the response that was received from Guilded API.
  - **[StatusCode](GuildedException.StatusCode 'Guilded.Base.GuildedException.StatusCode')** `Property`
    Gets the HTTP status that was found in the response.
  - **[ToString()](GuildedException.ToString() 'Guilded.Base.GuildedException.ToString()')** `Method`
    Returns string representation of the exception thrown.
- **[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')** `Class`
  Represents an exception thrown by Guilded API when the client has no permission to perform a request.
  - **[GuildedPermissionException()](GuildedPermissionException.GuildedPermissionException() 'Guilded.Base.GuildedPermissionException.GuildedPermissionException()')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with default message.
  - **[GuildedPermissionException(string, string, RestResponse)](GuildedPermissionException.GuildedPermissionException(string,string,RestResponse) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with information from given parameters.
  - **[GuildedPermissionException(string, Exception)](GuildedPermissionException.GuildedPermissionException(string,Exception) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with an inner explaining more.
  - **[GuildedPermissionException(string)](GuildedPermissionException.GuildedPermissionException(string) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string)')** `Constructor`
    Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException').
- **[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')** `Class`
  Represents an exception thrown by Guilded API when a request has invalid parameters.
  - **[GuildedRequestException()](GuildedRequestException.GuildedRequestException() 'Guilded.Base.GuildedRequestException.GuildedRequestException()')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with default message.
  - **[GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with information from given parameters.
  - **[GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with an inner explaining more.
  - **[GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string)')** `Constructor`
    Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException').
- **[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')** `Class`
  Represents an exception thrown by Guilded API when a request has invalid path.
  - **[GuildedResourceException()](GuildedResourceException.GuildedResourceException() 'Guilded.Base.GuildedResourceException.GuildedResourceException()')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException') with default message.
  - **[GuildedResourceException(string, string, RestResponse)](GuildedResourceException.GuildedResourceException(string,string,RestResponse) 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.RestResponse)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException') with information from given parameters.
  - **[GuildedResourceException(string, Exception)](GuildedResourceException.GuildedResourceException(string,Exception) 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException') with an inner explaining more.
  - **[GuildedResourceException(string)](GuildedResourceException.GuildedResourceException(string) 'Guilded.Base.GuildedResourceException.GuildedResourceException(string)')** `Constructor`
    Initializes a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException').
- **[GuildedUrl](GuildedUrl 'Guilded.Base.GuildedUrl')** `Class`
  Defines a list of URLs to Guilded services.
  - **[Api](GuildedUrl.Api 'Guilded.Base.GuildedUrl.Api')** `Field`
    The base URL for Guilded's API requests.
  - **[ImageCdn](GuildedUrl.ImageCdn 'Guilded.Base.GuildedUrl.ImageCdn')** `Field`
    The URL to Guilded's image CDN.
  - **[Media](GuildedUrl.Media 'Guilded.Base.GuildedUrl.Media')** `Field`
    The base URL for Guilded's media API.
  - **[MediaFileUpload](GuildedUrl.MediaFileUpload 'Guilded.Base.GuildedUrl.MediaFileUpload')** `Field`
    The URL for to upload Guilded's media from files.
  - **[MediaUrlUpload](GuildedUrl.MediaUrlUpload 'Guilded.Base.GuildedUrl.MediaUrlUpload')** `Field`
    The URL to upload Guilded's media from URLs.
  - **[Websocket](GuildedUrl.Websocket 'Guilded.Base.GuildedUrl.Websocket')** `Field`
    The URL to Guilded's WebSockets.
- **[GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')** `Class`
  Represents an error received from Guilded WebSocket.
  - **[GuildedWebsocketException()](GuildedWebsocketException.GuildedWebsocketException() 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException()')** `Constructor`
    Initializes a new empty instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException').
  - **[GuildedWebsocketException(string, Exception)](GuildedWebsocketException.GuildedWebsocketException(string,Exception) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string, System.Exception)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') with an inner explaining more.
  - **[GuildedWebsocketException(string)](GuildedWebsocketException.GuildedWebsocketException(string) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(string)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') with a message.
  - **[GuildedWebsocketException(ResponseMessage, string)](GuildedWebsocketException.GuildedWebsocketException(ResponseMessage,string) 'Guilded.Base.GuildedWebsocketException.GuildedWebsocketException(Websocket.Client.ResponseMessage, string)')** `Constructor`
    Initializes a new instance of [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException') from WebSocket message.
  - **[Response](GuildedWebsocketException.Response 'Guilded.Base.GuildedWebsocketException.Response')** `Property`
    Gets the response message from Guilded WebSocket.
- **[HashIdConverter](HashIdConverter 'Guilded.Base.HashIdConverter')** `Class`
  Converts a value to [HashId](HashId 'Guilded.Base.HashId') where it is expected.
  - **[CanConvertFrom(ITypeDescriptorContext, Type)](HashIdConverter.CanConvertFrom(ITypeDescriptorContext,Type) 'Guilded.Base.HashIdConverter.CanConvertFrom(ITypeDescriptorContext, System.Type)')** `Method`
    Whether the type can be converted to [HashId](HashId 'Guilded.Base.HashId').
  - **[ConvertFrom(ITypeDescriptorContext, CultureInfo, object)](HashIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object) 'Guilded.Base.HashIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object)')** `Method`
    Converts string to [HashId](HashId 'Guilded.Base.HashId').
- **[IdConverter](IdConverter 'Guilded.Base.IdConverter')** `Class`
  Converts [HashId](HashId 'Guilded.Base.HashId') to string or vice versa in a JSON.
  - **[CanConvert(Type)](IdConverter.CanConvert(Type) 'Guilded.Base.IdConverter.CanConvert(System.Type)')** `Method`
    Returns whether the converter supports converting the given type.
  - **[ReadJson(JsonReader, Type, object, JsonSerializer)](IdConverter.ReadJson(JsonReader,Type,object,JsonSerializer) 'Guilded.Base.IdConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Reads the given JSON object as [HashId](HashId 'Guilded.Base.HashId') or [FormId](FormId 'Guilded.Base.FormId').
  - **[WriteJson(JsonWriter, object, JsonSerializer)](IdConverter.WriteJson(JsonWriter,object,JsonSerializer) 'Guilded.Base.IdConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)')** `Method`
    Writes given object as JSON.
- **[FormId](FormId 'Guilded.Base.FormId')** `Struct`
  An identifier for forms and media uploads.
  - **[FormId(string)](FormId.FormId(string) 'Guilded.Base.FormId.FormId(string)')** `Constructor`
    The identifier for forms and media uploads.
  - **[Random](FormId.Random 'Guilded.Base.FormId.Random')** `Property`
    Creates a random value of [FormId](FormId 'Guilded.Base.FormId').
  - **[Check(string)](FormId.Check(string) 'Guilded.Base.FormId.Check(string)')** `Method`
    Returns whether str is in the correct [FormId](FormId 'Guilded.Base.FormId') format.
  - **[Equals(FormId)](FormId.Equals(FormId) 'Guilded.Base.FormId.Equals(Guilded.Base.FormId)')** `Method`
    Returns whether this [FormId](FormId 'Guilded.Base.FormId') instance and other are equal.
  - **[Equals(object)](FormId.Equals(object) 'Guilded.Base.FormId.Equals(object)')** `Method`
    Returns whether this [FormId](FormId 'Guilded.Base.FormId') instance and obj are equal.
  - **[GetHashCode()](FormId.GetHashCode() 'Guilded.Base.FormId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](FormId.ToString() 'Guilded.Base.FormId.ToString()')** `Method`
    Returns the string representation of this [FormId](FormId 'Guilded.Base.FormId') instance.
  - **[operator ==(FormId, FormId)](FormId.operator(FormId,FormId) 'Guilded.Base.FormId.op_Equality(Guilded.Base.FormId, Guilded.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(FormId, FormId)](FormId.operator!(FormId,FormId) 'Guilded.Base.FormId.op_Inequality(Guilded.Base.FormId, Guilded.Base.FormId)')** `Operator`
    Returns whether id0 and id1 are not equal.
- **[HashId](HashId 'Guilded.Base.HashId')** `Struct`
  Represents an identifier for Guilded servers, users, etc.
  - **[HashId(string)](HashId.HashId(string) 'Guilded.Base.HashId.HashId(string)')** `Constructor`
    Initializes a new instance of [HashId](HashId 'Guilded.Base.HashId').
  - **[Check(string)](HashId.Check(string) 'Guilded.Base.HashId.Check(string)')** `Method`
    Returns whether str is in the correct [HashId](HashId 'Guilded.Base.HashId') format.
  - **[Equals(HashId)](HashId.Equals(HashId) 'Guilded.Base.HashId.Equals(Guilded.Base.HashId)')** `Method`
    Returns whether this [HashId](HashId 'Guilded.Base.HashId') instance and other are equal.
  - **[Equals(object)](HashId.Equals(object) 'Guilded.Base.HashId.Equals(object)')** `Method`
    Returns whether this [HashId](HashId 'Guilded.Base.HashId') instance and other are equal.
  - **[Equals(string)](HashId.Equals(string) 'Guilded.Base.HashId.Equals(string)')** `Method`
    Returns whether this [HashId](HashId 'Guilded.Base.HashId') instance and other are equal.
  - **[GetHashCode()](HashId.GetHashCode() 'Guilded.Base.HashId.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](HashId.ToString() 'Guilded.Base.HashId.ToString()')** `Method`
    Returns the string representation of [HashId](HashId 'Guilded.Base.HashId') instance.
  - **[operator ==(HashId, HashId)](HashId.operator(HashId,HashId) 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator ==(HashId, string)](HashId.operator(HashId,string) 'Guilded.Base.HashId.op_Equality(Guilded.Base.HashId, string)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator ==(string, HashId)](HashId.operator(string,HashId) 'Guilded.Base.HashId.op_Equality(string, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are equal.
  - **[operator !=(HashId, HashId)](HashId.operator!(HashId,HashId) 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are not equal.
  - **[operator !=(HashId, string)](HashId.operator!(HashId,string) 'Guilded.Base.HashId.op_Inequality(Guilded.Base.HashId, string)')** `Operator`
    Returns whether id0 and id1 are not equal.
  - **[operator !=(string, HashId)](HashId.operator!(string,HashId) 'Guilded.Base.HashId.op_Inequality(string, Guilded.Base.HashId)')** `Operator`
    Returns whether id0 and id1 are not equal.
- **[IModelHasId&lt;T&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')** `Interface`
  Represents a model that has [an identifier](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id').
  - **[Id](IModelHasId_T_.Id 'Guilded.Base.IModelHasId<T>.Id')** `Property`
    Gets the identifier of [the content](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>').