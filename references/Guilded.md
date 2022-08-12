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
  - **[MessageReactionAdded](AbstractGuildedClient.MessageReactionAdded 'Guilded.AbstractGuildedClient.MessageReactionAdded')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is added.
  - **[MessageReactionRemoved](AbstractGuildedClient.MessageReactionRemoved 'Guilded.AbstractGuildedClient.MessageReactionRemoved')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is removed.
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
  - **[RsvpDeleted](AbstractGuildedClient.RsvpDeleted 'Guilded.AbstractGuildedClient.RsvpDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is deleted.
  - **[RsvpManyUpdated](AbstractGuildedClient.RsvpManyUpdated 'Guilded.AbstractGuildedClient.RsvpManyUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') are edited or created.
  - **[RsvpUpdated](AbstractGuildedClient.RsvpUpdated 'Guilded.AbstractGuildedClient.RsvpUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is edited.
  - **[TopicCreated](AbstractGuildedClient.TopicCreated 'Guilded.AbstractGuildedClient.TopicCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a new [forum topic](Topic 'Guilded.Base.Content.Topic') is posted.
  - **[TopicDeleted](AbstractGuildedClient.TopicDeleted 'Guilded.AbstractGuildedClient.TopicDeleted')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is deleted.
  - **[TopicUpdated](AbstractGuildedClient.TopicUpdated 'Guilded.AbstractGuildedClient.TopicUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is edited.
  - **[WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new webhook](Webhook 'Guilded.Base.Servers.Webhook') is created.
  - **[WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a webhook](Webhook 'Guilded.Base.Servers.Webhook') is edited.
  - **[Welcome](AbstractGuildedClient.Welcome 'Guilded.AbstractGuildedClient.Welcome')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [WebSocket](BaseGuildedClient.Websocket 'Guilded.Base.BaseGuildedClient.Websocket') is connected.
  - **[XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')** `Property`
    Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [members](Member 'Guilded.Base.Servers.Member') receive [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').
  - **[AddMemberBanAsync(HashId, HashId, string)](AbstractGuildedClient.AddMemberBanAsync(HashId,HashId,string) 'Guilded.AbstractGuildedClient.AddMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the specified member.
  - **[AddMemberRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.AddMemberRoleAsync(HashId,HashId,uint) 'Guilded.AbstractGuildedClient.AddMemberRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Adds a role to [the user](User 'Guilded.Base.Users.User').
  - **[AddMembershipAsync(HashId, HashId)](AbstractGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Adds the user to the group.
  - **[AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint)')** `Method`
    Adds emote to the message.
  - **[AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint)')** `Method`
    Adds emote to the content.
  - **[AddXpAsync(HashId, HashId, short)](AbstractGuildedClient.AddXpAsync(HashId,HashId,short) 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, short)')** `Method`
    Gives amount to the specified member.
  - **[AddXpAsync(HashId, uint, short)](AbstractGuildedClient.AddXpAsync(HashId,uint,short) 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, short)')** `Method`
    Gives amount to the role members.
  - **[CompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the specified listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.AbstractGuildedClient.ConnectAsync()')** `Method`
    Connects [this client](AbstractGuildedClient 'Guilded.AbstractGuildedClient') to Guilded.
  - **[CreateChannelAsync(HashId, string, ChannelType, string, Nullable&lt;HashId&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_) 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Creates a new channel in the server.
  - **[CreateDocAsync(Guid, string, string)](AbstractGuildedClient.CreateDocAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a [new document](Doc 'Guilded.Base.Content.Doc').
  - **[CreateEventAsync(Guid, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;, bool)](AbstractGuildedClient.CreateEventAsync(Guid,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_uint_,bool) 'Guilded.AbstractGuildedClient.CreateEventAsync(Guid, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<uint>, bool)')** `Method`
    Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CreateHookMessageAsync(Uri, MessageContent)](AbstractGuildedClient.CreateHookMessageAsync(Uri,MessageContent) 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Uri, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') using the specified webhookUrl.
  - **[CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a new [list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.AbstractGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateTopicAsync(Guid, string, string)](AbstractGuildedClient.CreateTopicAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateTopicAsync(Guid, string, string)')** `Method`
    Creates a new [forum post](Topic 'Guilded.Base.Content.Topic').
  - **[CreateWebhookAsync(HashId, Guid, string)](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string) 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a new [webhook](Webhook 'Guilded.Base.Servers.Webhook') in the specified channel.
  - **[DeleteChannelAsync(Guid)](AbstractGuildedClient.DeleteChannelAsync(Guid) 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid)')** `Method`
    Deletes the specified channel.
  - **[DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes the doc.
  - **[DeleteEventAsync(Guid, uint)](AbstractGuildedClient.DeleteEventAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteEventAsync(Guid, uint)')** `Method`
    Deletes the specified calendarEvent.
  - **[DeleteListItemAsync(Guid, Guid)](AbstractGuildedClient.DeleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid, Guid)')** `Method`
    Deletes the specified listItem.
  - **[DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid, Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the specified member.
  - **[DeleteTopicAsync(Guid, uint)](AbstractGuildedClient.DeleteTopicAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteTopicAsync(Guid, uint)')** `Method`
    Deletes a [forum post](Topic 'Guilded.Base.Content.Topic').
  - **[DeleteWebhookAsync(HashId, Guid)](AbstractGuildedClient.DeleteWebhookAsync(HashId,Guid) 'Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Deletes the webhook.
  - **[GetBanAsync(HashId, HashId)](AbstractGuildedClient.GetBanAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of the member.
  - **[GetBansAsync(HashId)](AbstractGuildedClient.GetBansAsync(HashId) 'Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of server bans.
  - **[GetChannelAsync(Guid)](AbstractGuildedClient.GetChannelAsync(Guid) 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid)')** `Method`
    Gets the channel.
  - **[GetDocAsync(Guid, uint)](AbstractGuildedClient.GetDocAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetDocAsync(Guid, uint)')** `Method`
    Gets the doc.
  - **[GetDocsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [documents](Doc 'Guilded.Base.Content.Doc').
  - **[GetEventAsync(Guid, uint)](AbstractGuildedClient.GetEventAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetEventAsync(Guid, uint)')** `Method`
    Gets the specified calendarEvent.
  - **[GetEventsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetEventsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetEventsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[GetListItemAsync(Guid, Guid)](AbstractGuildedClient.GetListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid)')** `Method`
    Gets the specified listItem from a channel.
  - **[GetListItemsAsync(Guid)](AbstractGuildedClient.GetListItemsAsync(Guid) 'Guilded.AbstractGuildedClient.GetListItemsAsync(Guid)')** `Method`
    Gets a set of [list items](ListItem 'Guilded.Base.Content.ListItem') from the specified channel.
  - **[GetMemberAsync(HashId, HashId)](AbstractGuildedClient.GetMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets full information about the specified member.
  - **[GetMemberRolesAsync(HashId, HashId)](AbstractGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the list of roles member holds.
  - **[GetMembersAsync(HashId)](AbstractGuildedClient.GetMembersAsync(HashId) 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of all server[members](Member 'Guilded.Base.Servers.Member').
  - **[GetMessageAsync(Guid, Guid)](AbstractGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.GetMessageAsync(Guid, Guid)')** `Method`
    Gets the message.
  - **[GetMessagesAsync(Guid, bool, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [messages](Message 'Guilded.Base.Content.Message') from the specified channel.
  - **[GetRsvpAsync(Guid, uint, HashId)](AbstractGuildedClient.GetRsvpAsync(Guid,uint,HashId) 'Guilded.AbstractGuildedClient.GetRsvpAsync(Guid, uint, Guilded.Base.HashId)')** `Method`
    Gets the specified calendarEvent.
  - **[GetRsvpsAsync(Guid, uint)](AbstractGuildedClient.GetRsvpsAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetRsvpsAsync(Guid, uint)')** `Method`
    Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[GetServerAsync(HashId)](AbstractGuildedClient.GetServerAsync(HashId) 'Guilded.AbstractGuildedClient.GetServerAsync(Guilded.Base.HashId)')** `Method`
    Gets the specified [server](Server 'Guilded.Base.Servers.Server').
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[GetTopicAsync(Guid, uint)](AbstractGuildedClient.GetTopicAsync(Guid,uint) 'Guilded.AbstractGuildedClient.GetTopicAsync(Guid, uint)')** `Method`
    Gets the topic.
  - **[GetTopicsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetTopicsAsync(Guid,Nullable_uint_,Nullable_DateTime_) 'Guilded.AbstractGuildedClient.GetTopicsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [forum topics](Topic 'Guilded.Base.Content.Topic').
  - **[GetWebhookAsync(HashId, Guid)](AbstractGuildedClient.GetWebhookAsync(HashId,Guid) 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Gets the webhook.
  - **[GetWebhooksAsync(HashId, Nullable&lt;Guid&gt;)](AbstractGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_) 'Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>)')** `Method`
    Gets a list of [webhooks](Webhook 'Guilded.Base.Servers.Webhook').
  - **[OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) 'Guilded.AbstractGuildedClient.OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage)')** `Method`
    When the socket message event is invoked.
  - **[RemoveMemberAsync(HashId, HashId)](AbstractGuildedClient.RemoveMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the specified member from the server.
  - **[RemoveMemberBanAsync(HashId, HashId)](AbstractGuildedClient.RemoveMemberBanAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMemberBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the specified member.
  - **[RemoveMemberRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveMemberRoleAsync(HashId,HashId,uint) 'Guilded.AbstractGuildedClient.RemoveMemberRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes the specified role from [the user](User 'Guilded.Base.Users.User').
  - **[RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the user from the group.
  - **[RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid, Guid, uint)')** `Method`
    Removes emote from the message.
  - **[RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.AbstractGuildedClient.RemoveReactionAsync(Guid, uint, uint)')** `Method`
    Removes emote from the content.
  - **[RemoveRsvpAsync(Guid, uint, HashId)](AbstractGuildedClient.RemoveRsvpAsync(Guid,uint,HashId) 'Guilded.AbstractGuildedClient.RemoveRsvpAsync(Guid, uint, Guilded.Base.HashId)')** `Method`
    Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[SetRsvpAsync(Guid, uint, HashId, CalendarRsvpStatus)](AbstractGuildedClient.SetRsvpAsync(Guid,uint,HashId,CalendarRsvpStatus) 'Guilded.AbstractGuildedClient.SetRsvpAsync(Guid, uint, Guilded.Base.HashId, Guilded.Base.Content.CalendarRsvpStatus)')** `Method`
    Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[UncompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the specified listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[UpdateChannelAsync(Guid, string, string, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_) 'Guilded.AbstractGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>)')** `Method`
    Updates the specified channel.
  - **[UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits content or title of the doc.
  - **[UpdateEventAsync(Guid, uint, string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.AbstractGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Edits the specified calendarEvent.
  - **[UpdateListItemAsync(Guid, Guid, string, string)](AbstractGuildedClient.UpdateListItemAsync(Guid,Guid,string,string) 'Guilded.AbstractGuildedClient.UpdateListItemAsync(Guid, Guid, string, string)')** `Method`
    Edits the message of the specified listItem.
  - **[UpdateMessageAsync(Guid, Guid, MessageContent)](AbstractGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent) 'Guilded.AbstractGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Edits the content of a message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the specified member.
  - **[UpdateTopicAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string) 'Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string)')** `Method`
    Edits [forum post's](Topic 'Guilded.Base.Content.Topic')title and content.
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
- **[GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient')** `Class`
  Represents the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') for [webhook](Webhook 'Guilded.Base.Servers.Webhook') execution.
  - **[GuildedWebhookClient(Guid, string)](GuildedWebhookClient.GuildedWebhookClient(Guid,string) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guid, string)')** `Constructor`
    Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.
  - **[GuildedWebhookClient(IWebhook[])](GuildedWebhookClient.GuildedWebhookClient(IWebhook[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Guilded.Base.Servers.IWebhook[])')** `Constructor`
    Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.
  - **[GuildedWebhookClient(string[])](GuildedWebhookClient.GuildedWebhookClient(string[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(string[])')** `Constructor`
    Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.
  - **[GuildedWebhookClient(IList&lt;IWebhook&gt;)](GuildedWebhookClient.GuildedWebhookClient(IList_IWebhook_) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(System.Collections.Generic.IList<Guilded.Base.Servers.IWebhook>)')** `Constructor`
    Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.
  - **[GuildedWebhookClient(Uri[])](GuildedWebhookClient.GuildedWebhookClient(Uri[]) 'Guilded.GuildedWebhookClient.GuildedWebhookClient(Uri[])')** `Constructor`
    Creates a new [GuildedWebhookClient](GuildedWebhookClient 'Guilded.GuildedWebhookClient') instance from given webhooks.
  - **[Webhooks](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks')** `Property`
    Gets the list of all [webhooks](Webhook 'Guilded.Base.Servers.Webhook') this [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient') will execute.
  - **[CreateMessageAsync(MessageContent)](GuildedWebhookClient.CreateMessageAsync(MessageContent) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
  - **[CreateMessageAsync(Embed[])](GuildedWebhookClient.CreateMessageAsync(Embed[]) 'Guilded.GuildedWebhookClient.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
  - **[CreateMessageAsync(string, Embed[])](GuildedWebhookClient.CreateMessageAsync(string,Embed[]) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
  - **[CreateMessageAsync(string, IList&lt;Embed&gt;)](GuildedWebhookClient.CreateMessageAsync(string,IList_Embed_) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
  - **[CreateMessageAsync(string)](GuildedWebhookClient.CreateMessageAsync(string) 'Guilded.GuildedWebhookClient.CreateMessageAsync(string)')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
  - **[CreateMessageAsync(IList&lt;Embed&gt;)](GuildedWebhookClient.CreateMessageAsync(IList_Embed_) 'Guilded.GuildedWebhookClient.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a [message](Message 'Guilded.Base.Content.Message') for every [webhook](GuildedWebhookClient.Webhooks 'Guilded.GuildedWebhookClient.Webhooks') in the [client](GuildedWebhookClient 'Guilded.GuildedWebhookClient').
- **[WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton')** `Class`
  Represents the barebones of a [webhook](Webhook 'Guilded.Base.Servers.Webhook') that can be executed.
  - **[WebhookSkeleton(Guid, string)](WebhookSkeleton.WebhookSkeleton(Guid,string) 'Guilded.WebhookSkeleton.WebhookSkeleton(Guid, string)')** `Constructor`
    Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given token and webhook.
  - **[WebhookSkeleton(string, string)](WebhookSkeleton.WebhookSkeleton(string,string) 'Guilded.WebhookSkeleton.WebhookSkeleton(string, string)')** `Constructor`
    Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given token and webhook.
  - **[WebhookSkeleton(string)](WebhookSkeleton.WebhookSkeleton(string) 'Guilded.WebhookSkeleton.WebhookSkeleton(string)')** `Constructor`
    Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given url.
  - **[WebhookSkeleton(Uri)](WebhookSkeleton.WebhookSkeleton(Uri) 'Guilded.WebhookSkeleton.WebhookSkeleton(Uri)')** `Constructor`
    Initializes a new instance of [WebhookSkeleton](WebhookSkeleton 'Guilded.WebhookSkeleton') from given url.
  - **[Url](WebhookSkeleton.Url 'Guilded.WebhookSkeleton.Url')** `Property`
    Gets the URL for executing [webhooks](Webhook 'Guilded.Base.Servers.Webhook').
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