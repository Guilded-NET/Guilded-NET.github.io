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
- **[AbstractGuildedClient](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')** `Class`
  Represents the base for all Guilded clients.
  - **[AbstractGuildedClient()](AbstractGuildedClient.AbstractGuildedClient().md 'Guilded.AbstractGuildedClient.AbstractGuildedClient()')** `Constructor`
    Initializes a new base instance of [AbstractGuildedClient](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient') children types.
  - **[PreparedSubject](AbstractGuildedClient.PreparedSubject.md 'Guilded.AbstractGuildedClient.PreparedSubject')** `Field`
    An observable event that occurs once Guilded client has connected and added finishing touches.
  - **[ChannelCreated](AbstractGuildedClient.ChannelCreated.md 'Guilded.AbstractGuildedClient.ChannelCreated')** `Property`
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[ChannelDeleted](AbstractGuildedClient.ChannelDeleted.md 'Guilded.AbstractGuildedClient.ChannelDeleted')** `Property`
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[ChannelUpdated](AbstractGuildedClient.ChannelUpdated.md 'Guilded.AbstractGuildedClient.ChannelUpdated')** `Property`
    Represents an event with the name `TeamChannelCreated`, `TeamChannelUpdated` or `TeamChannelDeleted` and opcode `0` that occurs once someone creates, edits or deletes a [channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel').
  - **[DocCreated](AbstractGuildedClient.DocCreated.md 'Guilded.AbstractGuildedClient.DocCreated')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[DocDeleted](AbstractGuildedClient.DocDeleted.md 'Guilded.AbstractGuildedClient.DocDeleted')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[DocUpdated](AbstractGuildedClient.DocUpdated.md 'Guilded.AbstractGuildedClient.DocUpdated')** `Property`
    Represents an event with the name `DocCreated`, `DocUpdated` or `DocDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId').
  - **[GuildedEvents](AbstractGuildedClient.GuildedEvents.md 'Guilded.AbstractGuildedClient.GuildedEvents')** `Property`
    Gets the dictionary of Guilded events, their names and other event information.
  - **[IsPrepared](AbstractGuildedClient.IsPrepared.md 'Guilded.AbstractGuildedClient.IsPrepared')** `Property`
    Whether the client is [prepared](AbstractGuildedClient.Prepared.md 'Guilded.AbstractGuildedClient.Prepared').
  - **[ListItemCompleted](AbstractGuildedClient.ListItemCompleted.md 'Guilded.AbstractGuildedClient.ListItemCompleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemCreated](AbstractGuildedClient.ListItemCreated.md 'Guilded.AbstractGuildedClient.ListItemCreated')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemDeleted](AbstractGuildedClient.ListItemDeleted.md 'Guilded.AbstractGuildedClient.ListItemDeleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemUncompleted](AbstractGuildedClient.ListItemUncompleted.md 'Guilded.AbstractGuildedClient.ListItemUncompleted')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[ListItemUpdated](AbstractGuildedClient.ListItemUpdated.md 'Guilded.AbstractGuildedClient.ListItemUpdated')** `Property`
    Represents an event with the name `ListItemCreated`, `ListItemUpdated`, `ListItemCompleted`, `ListItemUncompleted` or `ListItemDeleted` and opcode `0` that occurs once someone posts, edits or deletes a [doc](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc') in [a channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Events.ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId').
  - **[Me](AbstractGuildedClient.Me.md 'Guilded.AbstractGuildedClient.Me')** `Property`
    Gets the currently logged in user.
  - **[MemberBanned](AbstractGuildedClient.MemberBanned.md 'Guilded.AbstractGuildedClient.MemberBanned')** `Property`
    Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.
  - **[MemberJoined](AbstractGuildedClient.MemberJoined.md 'Guilded.AbstractGuildedClient.MemberJoined')** `Property`
    Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId').
  - **[MemberRemoved](AbstractGuildedClient.MemberRemoved.md 'Guilded.AbstractGuildedClient.MemberRemoved')** `Property`
    Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick').
  - **[MemberUnbanned](AbstractGuildedClient.MemberUnbanned.md 'Guilded.AbstractGuildedClient.MemberUnbanned')** `Property`
    Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.
  - **[MemberUpdated](AbstractGuildedClient.MemberUpdated.md 'Guilded.AbstractGuildedClient.MemberUpdated')** `Property`
    Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent').
  - **[MessageCreated](AbstractGuildedClient.MessageCreated.md 'Guilded.AbstractGuildedClient.MessageCreated')** `Property`
    Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId').
  - **[MessageDeleted](AbstractGuildedClient.MessageDeleted.md 'Guilded.AbstractGuildedClient.MessageDeleted')** `Property`
    Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.
  - **[MessageUpdated](AbstractGuildedClient.MessageUpdated.md 'Guilded.AbstractGuildedClient.MessageUpdated')** `Property`
    Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId').
  - **[Prepared](AbstractGuildedClient.Prepared.md 'Guilded.AbstractGuildedClient.Prepared')** `Property`
    An observable event that occurs once Guilded client has connected and added finishing touches.
  - **[Resume](AbstractGuildedClient.Resume.md 'Guilded.AbstractGuildedClient.Resume')** `Property`
    Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier.
  - **[RolesUpdated](AbstractGuildedClient.RolesUpdated.md 'Guilded.AbstractGuildedClient.RolesUpdated')** `Property`
    Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it.
  - **[WebhookCreated](AbstractGuildedClient.WebhookCreated.md 'Guilded.AbstractGuildedClient.WebhookCreated')** `Property`
    Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.
  - **[WebhookUpdated](AbstractGuildedClient.WebhookUpdated.md 'Guilded.AbstractGuildedClient.WebhookUpdated')** `Property`
    Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.
  - **[Welcome](AbstractGuildedClient.Welcome.md 'Guilded.AbstractGuildedClient.Welcome')** `Property`
    Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.
  - **[XpAdded](AbstractGuildedClient.XpAdded.md 'Guilded.AbstractGuildedClient.XpAdded')** `Property`
    Represents an event with the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user.
  - **[AddMembershipAsync(HashId, HashId)](AbstractGuildedClient.AddMembershipAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.AddMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Adds user to group.
  - **[AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint).md 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, Guid, uint)')** `Method`
    Adds emote to the message.
  - **[AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint).md 'Guilded.AbstractGuildedClient.AddReactionAsync(Guid, uint, uint)')** `Method`
    Adds emote to the content.
  - **[AddRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint).md 'Guilded.AbstractGuildedClient.AddRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Adds a role to [the user](User.md 'Guilded.Base.Users.User').
  - **[AddXpAsync(HashId, HashId, long)](AbstractGuildedClient.AddXpAsync(HashId,HashId,long).md 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, Guilded.Base.HashId, long)')** `Method`
    Gives amount to the specified member.
  - **[AddXpAsync(HashId, uint, long)](AbstractGuildedClient.AddXpAsync(HashId,uint,long).md 'Guilded.AbstractGuildedClient.AddXpAsync(Guilded.Base.HashId, uint, long)')** `Method`
    Gives amount to the role members.
  - **[BanMemberAsync(HashId, HashId, string)](AbstractGuildedClient.BanMemberAsync(HashId,HashId,string).md 'Guilded.AbstractGuildedClient.BanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[CompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [completed](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemBase-1.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[ConnectAsync()](AbstractGuildedClient.ConnectAsync().md 'Guilded.AbstractGuildedClient.ConnectAsync()')** `Method`
    Connects [this client](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient') to Guilded.
  - **[CreateChannelAsync(HashId, string, ChannelType, string, Nullable&lt;HashId&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](AbstractGuildedClient.CreateChannelAsync(HashId,string,ChannelType,string,Nullable_HashId_,Nullable_uint_,Nullable_bool_).md 'Guilded.AbstractGuildedClient.CreateChannelAsync(Guilded.Base.HashId, string, Guilded.Base.Servers.ChannelType, string, System.Nullable<Guilded.Base.HashId>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Creates a new channel in the server.
  - **[CreateDocAsync(Guid, string, string)](AbstractGuildedClient.CreateDocAsync(Guid,string,string).md 'Guilded.AbstractGuildedClient.CreateDocAsync(Guid, string, string)')** `Method`
    Creates a [new document](Doc.md 'Guilded.Base.Content.Doc').
  - **[CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string).md 'Guilded.AbstractGuildedClient.CreateForumThreadAsync(Guid, string, string)')** `Method`
    Creates a [new forum post](ForumThread.md 'Guilded.Base.Content.ForumThread').
  - **[CreateHookMessageAsync(Guid, string, MessageContent)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,MessageContent).md 'Guilded.AbstractGuildedClient.CreateHookMessageAsync(Guid, string, Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message.md 'Guilded.Base.Content.Message') using webhook.
  - **[CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string).md 'Guilded.AbstractGuildedClient.CreateListItemAsync(Guid, string, string)')** `Method`
    Creates a [new list item](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem').
  - **[CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent).md 'Guilded.AbstractGuildedClient.CreateMessageAsync(Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Creates a [new message](Message.md 'Guilded.Base.Content.Message').
  - **[CreateWebhookAsync(HashId, Guid, string)](AbstractGuildedClient.CreateWebhookAsync(HashId,Guid,string).md 'Guilded.AbstractGuildedClient.CreateWebhookAsync(Guilded.Base.HashId, Guid, string)')** `Method`
    Creates a [new webhook](Webhook.md 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteChannelAsync(Guid)](AbstractGuildedClient.DeleteChannelAsync(Guid).md 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid)')** `Method`
    Deletes the channel.
  - **[DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint).md 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint)')** `Method`
    Deletes the doc.
  - **[DeleteListItemAsync(Guid, Guid)](AbstractGuildedClient.DeleteListItemAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid, Guid)')** `Method`
    Deletes the listItem.
  - **[DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.DeleteMessageAsync(Guid, Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.DeleteNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes [the nickname](Member.Nickname.md 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[DeleteWebhookAsync(HashId, Guid)](AbstractGuildedClient.DeleteWebhookAsync(HashId,Guid).md 'Guilded.AbstractGuildedClient.DeleteWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Deletes the webhook.
  - **[DisconnectAsync()](AbstractGuildedClient.DisconnectAsync().md 'Guilded.AbstractGuildedClient.DisconnectAsync()')** `Method`
    Disconnects [this client](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient') from Guilded.
  - **[Dispose()](AbstractGuildedClient.Dispose().md 'Guilded.AbstractGuildedClient.Dispose()')** `Method`
    Disposes [this client](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient').
  - **[GetBanAsync(HashId, HashId)](AbstractGuildedClient.GetBanAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.GetBanAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets [the information](MemberBan.md 'Guilded.Base.Servers.MemberBan') about the ban of member.
  - **[GetBansAsync(HashId)](AbstractGuildedClient.GetBansAsync(HashId).md 'Guilded.AbstractGuildedClient.GetBansAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of server bans.
  - **[GetChannelAsync(Guid)](AbstractGuildedClient.GetChannelAsync(Guid).md 'Guilded.AbstractGuildedClient.GetChannelAsync(Guid)')** `Method`
    Gets the channel.
  - **[GetDocAsync(Guid, uint)](AbstractGuildedClient.GetDocAsync(Guid,uint).md 'Guilded.AbstractGuildedClient.GetDocAsync(Guid, uint)')** `Method`
    Gets the doc.
  - **[GetDocsAsync(Guid, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetDocsAsync(Guid,Nullable_uint_,Nullable_DateTime_).md 'Guilded.AbstractGuildedClient.GetDocsAsync(Guid, System.Nullable<uint>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [documents](Doc.md 'Guilded.Base.Content.Doc').
  - **[GetListItemAsync(Guid, Guid)](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid)')** `Method`
    Gets the listItem from a channel.
  - **[GetListItemsAsync(Guid)](AbstractGuildedClient.GetListItemsAsync(Guid).md 'Guilded.AbstractGuildedClient.GetListItemsAsync(Guid)')** `Method`
    Gets a set of [list items](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem') from the channel.
  - **[GetMemberAsync(HashId, HashId)](AbstractGuildedClient.GetMemberAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.GetMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets full information about the member.
  - **[GetMemberRolesAsync(HashId, HashId)](AbstractGuildedClient.GetMemberRolesAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.GetMemberRolesAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Gets the list of roles member holds.
  - **[GetMembersAsync(HashId)](AbstractGuildedClient.GetMembersAsync(HashId).md 'Guilded.AbstractGuildedClient.GetMembersAsync(Guilded.Base.HashId)')** `Method`
    Gets the list of all server[members](Member.md 'Guilded.Base.Servers.Member').
  - **[GetMessageAsync(Guid, Guid)](AbstractGuildedClient.GetMessageAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.GetMessageAsync(Guid, Guid)')** `Method`
    Gets the message.
  - **[GetMessagesAsync(Guid, bool, Nullable&lt;uint&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;DateTime&gt;)](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_).md 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>)')** `Method`
    Gets a list of [messages](Message.md 'Guilded.Base.Content.Message') from the channel.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[GetWebhookAsync(HashId, Guid)](AbstractGuildedClient.GetWebhookAsync(HashId,Guid).md 'Guilded.AbstractGuildedClient.GetWebhookAsync(Guilded.Base.HashId, Guid)')** `Method`
    Gets the webhook.
  - **[GetWebhooksAsync(HashId, Nullable&lt;Guid&gt;)](AbstractGuildedClient.GetWebhooksAsync(HashId,Nullable_Guid_).md 'Guilded.AbstractGuildedClient.GetWebhooksAsync(Guilded.Base.HashId, System.Nullable<Guid>)')** `Method`
    Gets a list of [webhooks](Webhook.md 'Guilded.Base.Servers.Webhook').
  - **[KickMemberAsync(HashId, HashId)](AbstractGuildedClient.KickMemberAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.KickMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage).md 'Guilded.AbstractGuildedClient.OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage)')** `Method`
    When the socket message event is invoked.
  - **[RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.RemoveMembershipAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Removes user from group.
  - **[RemoveRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint).md 'Guilded.AbstractGuildedClient.RemoveRoleAsync(Guilded.Base.HashId, Guilded.Base.HashId, uint)')** `Method`
    Removes role from [the user](User.md 'Guilded.Base.Users.User').
  - **[UnbanMemberAsync(HashId, HashId)](AbstractGuildedClient.UnbanMemberAsync(HashId,HashId).md 'Guilded.AbstractGuildedClient.UnbanMemberAsync(Guilded.Base.HashId, Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[UncompleteListItemAsync(Guid, Guid)](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).md 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid)')** `Method`
    Marks the listItem as [not completed](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemBase-1.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').
  - **[UpdateChannelAsync(Guid, string, string, Nullable&lt;bool&gt;)](AbstractGuildedClient.UpdateChannelAsync(Guid,string,string,Nullable_bool_).md 'Guilded.AbstractGuildedClient.UpdateChannelAsync(Guid, string, string, System.Nullable<bool>)')** `Method`
    Updates the channel.
  - **[UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string).md 'Guilded.AbstractGuildedClient.UpdateDocAsync(Guid, uint, string, string)')** `Method`
    Edits content or title of the doc.
  - **[UpdateListItemAsync(Guid, Guid, string, string)](AbstractGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md 'Guilded.AbstractGuildedClient.UpdateListItemAsync(Guid, Guid, string, string)')** `Method`
    Edits the message of the listItem.
  - **[UpdateMessageAsync(Guid, Guid, MessageContent)](AbstractGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent).md 'Guilded.AbstractGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent)')** `Method`
    Edits the content of a message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string).md 'Guilded.AbstractGuildedClient.UpdateNicknameAsync(Guilded.Base.HashId, Guilded.Base.HashId, string)')** `Method`
    Changes [the nickname](Member.Nickname.md 'Guilded.Base.Servers.Member.Nickname') of the member.
  - **[UpdateWebhookAsync(HashId, Guid, string, Nullable&lt;Guid&gt;)](AbstractGuildedClient.UpdateWebhookAsync(HashId,Guid,string,Nullable_Guid_).md 'Guilded.AbstractGuildedClient.UpdateWebhookAsync(Guilded.Base.HashId, Guid, string, System.Nullable<Guid>)')** `Method`
    Edits the webhook.
- **[EventInfo&lt;T&gt;](EventInfo_T_.md 'Guilded.EventInfo<T>')** `Class`
  efines a new Guilded event that can be used in [GuildedEvents](AbstractGuildedClient.GuildedEvents.md 'Guilded.AbstractGuildedClient.GuildedEvents')
  - **[EventInfo()](EventInfo_T_.EventInfo().md 'Guilded.EventInfo<T>.EventInfo()')** `Constructor`
    Initializes a new instance of [EventInfo&lt;T&gt;](EventInfo_T_.md 'Guilded.EventInfo<T>').
  - **[Subject](EventInfo_T_.Subject.md 'Guilded.EventInfo<T>.Subject')** `Field`
    The subject that will be used for subscribing to this event.
  - **[ArgumentType](EventInfo_T_.ArgumentType.md 'Guilded.EventInfo<T>.ArgumentType')** `Property`
    Gets the type of the observer's argument.
  - **[Observable](EventInfo_T_.Observable.md 'Guilded.EventInfo<T>.Observable')** `Property`
    Gets the observable event that can be used to subscribe to the event.
  - **[OnError(Exception)](EventInfo_T_.OnError(Exception).md 'Guilded.EventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with an exception.
  - **[OnNext(object)](EventInfo_T_.OnNext(object).md 'Guilded.EventInfo<T>.OnNext(object)')** `Method`
    Notifies the observers with new value.
- **[GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient')** `Class`
  Represents the client type for Guilded bots.
  - **[GuildedBotClient()](GuildedBotClient.GuildedBotClient().md 'Guilded.GuildedBotClient.GuildedBotClient()')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient') instance without authentication token.
  - **[GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string).md 'Guilded.GuildedBotClient.GuildedBotClient(string)')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient') instance with given auth.
  - **[AuthToken](GuildedBotClient.AuthToken.md 'Guilded.GuildedBotClient.AuthToken')** `Property`
    An authentication token used to log into a bot in Guilded.
  - **[ConnectAsync()](GuildedBotClient.ConnectAsync().md 'Guilded.GuildedBotClient.ConnectAsync()')** `Method`
    Connects to Guilded using defined auth.
  - **[ConnectAsync(string)](GuildedBotClient.ConnectAsync(string).md 'Guilded.GuildedBotClient.ConnectAsync(string)')** `Method`
    Connects to Guilded bot using parameter as an auth.
- **[IEventInfo&lt;T&gt;](IEventInfo_T_.md 'Guilded.IEventInfo<T>')** `Interface`
  Represents the base interface for event info.
  - **[ArgumentType](IEventInfo_T_.ArgumentType.md 'Guilded.IEventInfo<T>.ArgumentType')** `Property`
    The type of the arguments that should be used.
  - **[Observable](IEventInfo_T_.Observable.md 'Guilded.IEventInfo<T>.Observable')** `Property`
    An observable that can be subscribed.
  - **[OnError(Exception)](IEventInfo_T_.OnError(Exception).md 'Guilded.IEventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with OnError.
  - **[OnNext(object)](IEventInfo_T_.OnNext(object).md 'Guilded.IEventInfo<T>.OnNext(object)')** `Method`
    Notifies observers with OnNext.