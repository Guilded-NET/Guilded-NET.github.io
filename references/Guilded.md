---
title: Guilded
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded Namespace
- **[AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')** `Class`
  Represents the base for all Guilded clients.
  - **[AbstractGuildedClient()](AbstractGuildedClient.AbstractGuildedClient() 'Guilded.AbstractGuildedClient.AbstractGuildedClient()')** `Constructor`
    Initializes a new base instance of [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient') children types.
  - **[PreparedSubject](AbstractGuildedClient.PreparedSubject 'Guilded.AbstractGuildedClient.PreparedSubject')** `Field`
    An observable event that occurs once Guilded client has connected and added finishing touches.
  - **[ChannelCreated](AbstractGuildedClient.ChannelCreated 'Guilded.AbstractGuildedClient.ChannelCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is created.
  - **[ChannelDeleted](AbstractGuildedClient.ChannelDeleted 'Guilded.AbstractGuildedClient.ChannelDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is deleted.
  - **[ChannelUpdated](AbstractGuildedClient.ChannelUpdated 'Guilded.AbstractGuildedClient.ChannelUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') is edited.
  - **[DocCreated](AbstractGuildedClient.DocCreated 'Guilded.AbstractGuildedClient.DocCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new document](Doc 'Guilded.Base.Content.Doc') is posted.
  - **[DocDeleted](AbstractGuildedClient.DocDeleted 'Guilded.AbstractGuildedClient.DocDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is deleted.
  - **[DocUpdated](AbstractGuildedClient.DocUpdated 'Guilded.AbstractGuildedClient.DocUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a document](Doc 'Guilded.Base.Content.Doc') is edited.
  - **[EventCreated](AbstractGuildedClient.EventCreated 'Guilded.AbstractGuildedClient.EventCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is posted.
  - **[EventDeleted](AbstractGuildedClient.EventDeleted 'Guilded.AbstractGuildedClient.EventDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted.
  - **[EventUpdated](AbstractGuildedClient.EventUpdated 'Guilded.AbstractGuildedClient.EventUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited.
  - **[GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.AbstractGuildedClient.GuildedEvents')** `Property`
    Gets the dictionary of Guilded events, their names and other event information.
  - **[IsPrepared](AbstractGuildedClient.IsPrepared 'Guilded.AbstractGuildedClient.IsPrepared')** `Property`
    Whether the client is [prepared](AbstractGuildedClient.Prepared 'Guilded.AbstractGuildedClient.Prepared').
  - **[ListItemCompleted](AbstractGuildedClient.ListItemCompleted 'Guilded.AbstractGuildedClient.ListItemCompleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is set as completed.
  - **[ListItemCreated](AbstractGuildedClient.ListItemCreated 'Guilded.AbstractGuildedClient.ListItemCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new list item](ListItem 'Guilded.Base.Content.ListItem') is posted.
  - **[ListItemDeleted](AbstractGuildedClient.ListItemDeleted 'Guilded.AbstractGuildedClient.ListItemDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is deleted.
  - **[ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted 'Guilded.AbstractGuildedClient.ListItemUncompleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is set as not completed.
  - **[ListItemUpdated](AbstractGuildedClient.ListItemUpdated 'Guilded.AbstractGuildedClient.ListItemUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a list item](ListItem 'Guilded.Base.Content.ListItem') is edited.
  - **[Me](AbstractGuildedClient.Me 'Guilded.AbstractGuildedClient.Me')** `Property`
    Gets the currently logged in user.
  - **[MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a member](Member 'Guilded.Base.Servers.Member') gets banned from [the server](Server 'Guilded.Base.Servers.Server').
  - **[MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a member](Member 'Guilded.Base.Servers.Member') joins [a server](Server 'Guilded.Base.Servers.Server').
  - **[MemberRemoved](AbstractGuildedClient.MemberRemoved 'Guilded.AbstractGuildedClient.MemberRemoved')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server'), gets kicked or gets banned from [a server](Server 'Guilded.Base.Servers.Server').
  - **[MemberUnbanned](AbstractGuildedClient.MemberUnbanned 'Guilded.AbstractGuildedClient.MemberUnbanned')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [user](User 'Guilded.Base.Users.User') gets unbanned in [a server](Server 'Guilded.Base.Servers.Server').
  - **[MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.AbstractGuildedClient.MemberUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when server-wide profile of [a member](Member 'Guilded.Base.Servers.Member') gets changed.
  - **[MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new message](Message 'Guilded.Base.Content.Message') is sent.
  - **[MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.AbstractGuildedClient.MessageDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a message](Message 'Guilded.Base.Content.Message') is deleted.
  - **[MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a message](Message 'Guilded.Base.Content.Message') is edited.
  - **[Prepared](AbstractGuildedClient.Prepared 'Guilded.AbstractGuildedClient.Prepared')** `Property`
    An observable event that occurs once Guilded client has connected and added finishing touches.
  - **[ReactionAdded](AbstractGuildedClient.ReactionAdded 'Guilded.AbstractGuildedClient.ReactionAdded')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is added.
  - **[ReactionRemoved](AbstractGuildedClient.ReactionRemoved 'Guilded.AbstractGuildedClient.ReactionRemoved')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is removed.
  - **[Resume](AbstractGuildedClient.Resume 'Guilded.AbstractGuildedClient.Resume')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when all lost [WebSocket messages](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') get re-sent.
  - **[RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [members](Member 'Guilded.Base.Servers.Member') receive or lose roles.
  - **[WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new webhook](Webhook 'Guilded.Base.Servers.Webhook') is created.
  - **[WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a webhook](Webhook 'Guilded.Base.Servers.Webhook') is edited.
  - **[Welcome](AbstractGuildedClient.Welcome 'Guilded.AbstractGuildedClient.Welcome')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [WebSocket](BaseGuildedClient.Websocket 'Guilded.Base.BaseGuildedClient.Websocket') is connected.
  - **[XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [members](Member 'Guilded.Base.Servers.Member') receive [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').
  - **[AddMemberBanAsync(HashId, HashId, string)](AbstractGuildedClient.AddMemberBanAsync(HashId,HashId,string) 'Guilded.AbstractGuildedClient.AddMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[AddMembershipAsync(HashId, HashId)](AbstractGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Adds user to group.
  - **[AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint)')** `Method`
    Adds emote to the message.
  - **[AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint)')** `Method`
    Adds emote to the content.
  - **[AddRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Adds a role to [the user](User 'Guilded.Base.Users.User').
  - **[AddXpAsync(HashId, HashId, long)](AbstractGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, long)')** `Method`
    Gives amount to the specified member.
  - **[AddXpAsync(HashId, uint, long)](AbstractGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long)')** `Method`
    Gives amount to the role members.
  - **[CompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.AbstractGuildedClient.ConnectAsync()')** `Method`
    Connects [this client](AbstractGuildedClient 'Guilded.AbstractGuildedClient') to Guilded.
  - **[CreateChannelAsync(HashId, string, ChannelType, string, Nullable&lt;HashId&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_) 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Creates a new channel in the server.
  - **[CreateDocAsync(Guid, string, string)](AbstractGuildedClient.CreateDocAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a [new document](Doc 'Guilded.Base.Content.Doc').
  - **[CreateEventAsync(Guid, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, bool)](AbstractGuildedClient.CreateEventAsync(Guid,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,bool) 'Guilded.AbstractGuildedClient.CreateEventAsync(Guid, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, bool)')** `Method`
    Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CreateHookMessageAsync(Uri, MessageContent)](AbstractGuildedClient.CreateHookMessageAsync(Uri,MessageContent) 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhookUrl.
  - **[CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a [new list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.AbstractGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateTopicAsync(Guid, string, string)](AbstractGuildedClient.CreateTopicAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateTopicAsync(Guid, string, string)')** `Method`
    Creates a [new forum post](Topic 'Guilded.Base.Content.Topic').
  - **[CreateWebhookAsync(HashId, Guid, string)](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string) 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteChannelAsync(Guid)](AbstractGuildedClient.DeleteChannelAsync(Guid) 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid)')** `Method`
    Deletes the channel.
  - **[DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes the doc.
  - **[DeleteEventAsync(Guid, uint)](AbstractGuildedClient.DeleteEventAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteEventAsync(Guid, uint)')** `Method`
    Deletes the calendarEvent.
  - **[DeleteListItemAsync(Guid, Guid)](AbstractGuildedClient.DeleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid, Guid)')** `Method`
    Deletes the listItem.
  - **[DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid, Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[DeleteWebhookAsync(HashId, Guid)](AbstractGuildedClient.DeleteWebhookAsync(HashId,Guid) 'Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Deletes the webhook.
  - **[DisconnectAsync()](AbstractGuildedClient.DisconnectAsync() 'Guilded.AbstractGuildedClient.DisconnectAsync()')** `Method`
    Disconnects [this client](AbstractGuildedClient 'Guilded.AbstractGuildedClient') from Guilded.
  - **[DisposeAsync()](AbstractGuildedClient.DisposeAsync() 'Guilded.AbstractGuildedClient.DisposeAsync()')** `Method`
    Disposes [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') instance.
  - **[GetBanAsync(HashId, HashId)](AbstractGuildedClient.GetBanAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member.
  - **[GetBansAsync(HashId)](AbstractGuildedClient.GetBansAsync(HashId) 'Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of server bans.
  - **[GetChannelAsync(Guid)](AbstractGuildedClient.GetChannelAsync(Guid) 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid)')** `Method`
    Gets the channel.
  - **[GetDocAsync(Guid, uint)](AbstractGuildedClient.GetDocAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetDocAsync(Guid, uint)')** `Method`
    Gets the doc.
  - **[GetDocsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [documents](Doc 'Guilded.Base.Content.Doc').
  - **[GetEventAsync(Guid, uint)](AbstractGuildedClient.GetEventAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetEventAsync(Guid, uint)')** `Method`
    Gets the calendarEvent.
  - **[GetEventsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetEventsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetEventsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[GetListItemAsync(Guid, Guid)](AbstractGuildedClient.GetListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid)')** `Method`
    Gets the listItem from a channel.
  - **[GetListItemsAsync(Guid)](AbstractGuildedClient.GetListItemsAsync(Guid) 'Guilded.AbstractGuildedClient.GetListItemsAsync(Guid)')** `Method`
    Gets a set of [list items](ListItem 'Guilded.Base.Content.ListItem') from the channel.
  - **[GetMemberAsync(HashId, HashId)](AbstractGuildedClient.GetMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets full information about the member.
  - **[GetMemberRolesAsync(HashId, HashId)](AbstractGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the list of roles member holds.
  - **[GetMembersAsync(HashId)](AbstractGuildedClient.GetMembersAsync(HashId) 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of all server[members](Member 'Guilded.Base.Servers.Member').
  - **[GetMessageAsync(Guid, Guid)](AbstractGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.GetMessageAsync(Guid, Guid)')** `Method`
    Gets the message.
  - **[GetMessagesAsync(Guid, bool, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [messages](Message 'Guilded.Base.Content.Message') from the channel.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[GetWebhookAsync(HashId, Guid)](AbstractGuildedClient.GetWebhookAsync(HashId,Guid) 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Gets the webhook.
  - **[GetWebhooksAsync(HashId, Nullable&lt;Guid&gt;)](AbstractGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_) 'Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>)')** `Method`
    Gets a list of [webhooks](Webhook 'Guilded.Base.Servers.Webhook').
  - **[OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) 'Guilded.AbstractGuildedClient.OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage)')** `Method`
    When the socket message event is invoked.
  - **[RemoveMemberAsync(HashId, HashId)](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[RemoveMemberBanAsync(HashId, HashId)](AbstractGuildedClient.RemoveMemberBanAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes user from group.
  - **[RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid, Guid, uint)')** `Method`
    Removes emote from the message.
  - **[RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid, uint, uint)')** `Method`
    Removes emote from the content.
  - **[RemoveRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes role from [the user](User 'Guilded.Base.Users.User').
  - **[UncompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[UpdateChannelAsync(Guid, string, string, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_) 'Guilded.AbstractGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>)')** `Method`
    Updates the channel.
  - **[UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits content or title of the doc.
  - **[UpdateEventAsync(Guid, uint, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.AbstractGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Edits the calendarEvent.
  - **[UpdateListItemAsync(Guid, Guid, string, string)](AbstractGuildedClient.UpdateListItemAsync(Guid,Guid,string,string) 'Guilded.AbstractGuildedClient.UpdateListItemAsync(Guid, Guid, string, string)')** `Method`
    Edits the message of the listItem.
  - **[UpdateMessageAsync(Guid, Guid, MessageContent)](AbstractGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent) 'Guilded.AbstractGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Edits the content of a message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[UpdateWebhookAsync(HashId, Guid, string, Nullable&lt;Guid&gt;)](AbstractGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_) 'Guilded.AbstractGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>)')** `Method`
    Edits the webhook.
- **[EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.EventInfo<T>')** `Class`
  efines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.AbstractGuildedClient.GuildedEvents')
  - **[EventInfo()](EventInfo_T_.EventInfo() 'Guilded.EventInfo<T>.EventInfo()')** `Constructor`
    Initializes a new instance of [EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.EventInfo<T>').
  - **[Subject](EventInfo_T_.Subject 'Guilded.EventInfo<T>.Subject')** `Field`
    The subject that will be used for subscribing to this event.
  - **[ArgumentType](EventInfo_T_.ArgumentType 'Guilded.EventInfo<T>.ArgumentType')** `Property`
    Gets the type of the observer's argument.
  - **[Observable](EventInfo_T_.Observable 'Guilded.EventInfo<T>.Observable')** `Property`
    Gets the observable event that can be used to subscribe to the event.
  - **[OnError(Exception)](EventInfo_T_.OnError(Exception) 'Guilded.EventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with an exception.
  - **[OnNext(object)](EventInfo_T_.OnNext(object) 'Guilded.EventInfo<T>.OnNext(object)')** `Method`
    Notifies the observers with new value.
- **[GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient')** `Class`
  Represents the client type for Guilded bots.
  - **[GuildedBotClient()](GuildedBotClient.GuildedBotClient() 'Guilded.GuildedBotClient.GuildedBotClient()')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance without authentication token.
  - **[GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string) 'Guilded.GuildedBotClient.GuildedBotClient(string)')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance with given auth.
  - **[AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken')** `Property`
    An authentication token used to log into a bot in Guilded.
  - **[ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.GuildedBotClient.ConnectAsync()')** `Method`
    Connects to Guilded using defined auth.
  - **[ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)')** `Method`
    Connects to Guilded bot using parameter as an auth.
- **[IEventInfo&lt;T&gt;](IEventInfo_T_ 'Guilded.IEventInfo<T>')** `Interface`
  Represents the base interface for event info.
  - **[ArgumentType](IEventInfo_T_.ArgumentType 'Guilded.IEventInfo<T>.ArgumentType')** `Property`
    The type of the arguments that should be used.
  - **[Observable](IEventInfo_T_.Observable 'Guilded.IEventInfo<T>.Observable')** `Property`
    An observable that can be subscribed.
  - **[OnError(Exception)](IEventInfo_T_.OnError(Exception) 'Guilded.IEventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with OnError.
  - **[OnNext(object)](IEventInfo_T_.OnNext(object) 'Guilded.IEventInfo<T>.OnNext(object)')** `Method`
    Notifies observers with OnNext.