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
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[ChannelDeleted](AbstractGuildedClient.ChannelDeleted 'Guilded.AbstractGuildedClient.ChannelDeleted')** `Property`
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[ChannelUpdated](AbstractGuildedClient.ChannelUpdated 'Guilded.AbstractGuildedClient.ChannelUpdated')** `Property`
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[DocCreated](AbstractGuildedClient.DocCreated 'Guilded.AbstractGuildedClient.DocCreated')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[DocDeleted](AbstractGuildedClient.DocDeleted 'Guilded.AbstractGuildedClient.DocDeleted')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[DocUpdated](AbstractGuildedClient.DocUpdated 'Guilded.AbstractGuildedClient.DocUpdated')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.AbstractGuildedClient.GuildedEvents')** `Property`
    Gets the dictionary of Guilded events, their names and other event information.
  - **[IsPrepared](AbstractGuildedClient.IsPrepared 'Guilded.AbstractGuildedClient.IsPrepared')** `Property`
    Whether the client is [prepared](AbstractGuildedClient.Prepared 'Guilded.AbstractGuildedClient.Prepared').
  - **[ListItemCompleted](AbstractGuildedClient.ListItemCompleted 'Guilded.AbstractGuildedClient.ListItemCompleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemCreated](AbstractGuildedClient.ListItemCreated 'Guilded.AbstractGuildedClient.ListItemCreated')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemDeleted](AbstractGuildedClient.ListItemDeleted 'Guilded.AbstractGuildedClient.ListItemDeleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted 'Guilded.AbstractGuildedClient.ListItemUncompleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemUpdated](AbstractGuildedClient.ListItemUpdated 'Guilded.AbstractGuildedClient.ListItemUpdated')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[Me](AbstractGuildedClient.Me 'Guilded.AbstractGuildedClient.Me')** `Property`
    Gets the currently logged in user.
  - **[MemberBanned](AbstractGuildedClient.MemberBanned 'Guilded.AbstractGuildedClient.MemberBanned')** `Property`
    Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.
  - **[MemberJoined](AbstractGuildedClient.MemberJoined 'Guilded.AbstractGuildedClient.MemberJoined')** `Property`
    Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId 'Guilded.Base.Events.MemberJoinedEvent.ServerId').
  - **[MemberRemoved](AbstractGuildedClient.MemberRemoved 'Guilded.AbstractGuildedClient.MemberRemoved')** `Property`
    Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick').
  - **[MemberUnbanned](AbstractGuildedClient.MemberUnbanned 'Guilded.AbstractGuildedClient.MemberUnbanned')** `Property`
    Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.
  - **[MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.AbstractGuildedClient.MemberUpdated')** `Property`
    Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent').
  - **[MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')** `Property`
    Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId').
  - **[MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.AbstractGuildedClient.MessageDeleted')** `Property`
    Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.
  - **[MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')** `Property`
    Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId').
  - **[Prepared](AbstractGuildedClient.Prepared 'Guilded.AbstractGuildedClient.Prepared')** `Property`
    An observable event that occurs once Guilded client has connected and added finishing touches.
  - **[Resume](AbstractGuildedClient.Resume 'Guilded.AbstractGuildedClient.Resume')** `Property`
    Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier.
  - **[RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.AbstractGuildedClient.RolesUpdated')** `Property`
    Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it.
  - **[WebhookCreated](AbstractGuildedClient.WebhookCreated 'Guilded.AbstractGuildedClient.WebhookCreated')** `Property`
    Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.
  - **[WebhookUpdated](AbstractGuildedClient.WebhookUpdated 'Guilded.AbstractGuildedClient.WebhookUpdated')** `Property`
    Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.
  - **[Welcome](AbstractGuildedClient.Welcome 'Guilded.AbstractGuildedClient.Welcome')** `Property`
    Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.
  - **[XpAdded](AbstractGuildedClient.XpAdded 'Guilded.AbstractGuildedClient.XpAdded')** `Property`
    Represents an event with the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user.
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
  - **[BanMemberAsync(HashId, HashId, string)](AbstractGuildedClient.BanMemberAsync(HashId,HashId,string) 'Guilded.AbstractGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[CompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.AbstractGuildedClient.ConnectAsync()')** `Method`
    Connects [this client](AbstractGuildedClient 'Guilded.AbstractGuildedClient') to Guilded.
  - **[CreateChannelAsync(HashId, string, ChannelType, string, Nullable&lt;HashId&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_) 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Creates a new channel in the server.
  - **[CreateDocAsync(Guid, string, string)](AbstractGuildedClient.CreateDocAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a [new document](Doc 'Guilded.Base.Content.Doc').
  - **[CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateForumThreadAsync(Guid, string, string)')** `Method`
    Creates a [new forum post](ForumThread 'Guilded.Base.Content.ForumThread').
  - **[CreateHookMessageAsync(Guid, string, MessageContent)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent) 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhook.
  - **[CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.AbstractGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a [new list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.AbstractGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [new message](Message 'Guilded.Base.Content.Message').
  - **[CreateWebhookAsync(HashId, Guid, string)](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string) 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteChannelAsync(Guid)](AbstractGuildedClient.DeleteChannelAsync(Guid) 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid)')** `Method`
    Deletes the channel.
  - **[DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes the doc.
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
  - **[Dispose()](AbstractGuildedClient.Dispose() 'Guilded.AbstractGuildedClient.Dispose()')** `Method`
    Disposes [this client](AbstractGuildedClient 'Guilded.AbstractGuildedClient').
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
  - **[KickMemberAsync(HashId, HashId)](AbstractGuildedClient.KickMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) 'Guilded.AbstractGuildedClient.OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage)')** `Method`
    When the socket message event is invoked.
  - **[RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes user from group.
  - **[RemoveRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes role from [the user](User 'Guilded.Base.Users.User').
  - **[UnbanMemberAsync(HashId, HashId)](AbstractGuildedClient.UnbanMemberAsync(HashId,HashId) 'Guilded.AbstractGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[UncompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid) 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[UpdateChannelAsync(Guid, string, string, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_) 'Guilded.AbstractGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>)')** `Method`
    Updates the channel.
  - **[UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits content or title of the doc.
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