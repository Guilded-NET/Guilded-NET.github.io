---
title: Guilded.Base.Events
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Events Namespace
- **[GuildedSocketMessage](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage')** `Class`
  Message that was received from a WebSocket client.
  - **[GuildedSocketMessage(byte, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(byte,string,JObject,string).md 'Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte, string, Newtonsoft.Json.Linq.JObject, string)')** `Constructor`
    Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties.
  - **[EventName](GuildedSocketMessage.EventName.md 'Guilded.Base.Events.GuildedSocketMessage.EventName')** `Property`
    Gets the name of the event received.
  - **[MessageId](GuildedSocketMessage.MessageId.md 'Guilded.Base.Events.GuildedSocketMessage.MessageId')** `Property`
    Gets an identifier that allows the event to be replayed.
  - **[Opcode](GuildedSocketMessage.Opcode.md 'Guilded.Base.Events.GuildedSocketMessage.Opcode')** `Property`
    Gets an operation code that tells about the message.
  - **[RawData](GuildedSocketMessage.RawData.md 'Guilded.Base.Events.GuildedSocketMessage.RawData')** `Property`
    Gets the data associated with the event.
- **[MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')** `Class`
  Represents an event with the name `TeamMemberBanned` or `TeamMemberUnbanned` and opcode `0` that occurs once [member](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') gets banned or unbanned.
  - **[MemberBanEvent(HashId, MemberBan)](MemberBanEvent.MemberBanEvent(HashId,MemberBan).md 'Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId, Guilded.Base.Servers.MemberBan)')** `Constructor`
    Initializes a new instance of [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties.
  - **[CreatedAt](MemberBanEvent.CreatedAt.md 'Guilded.Base.Events.MemberBanEvent.CreatedAt')** `Property`
    Gets the date of when the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') was banned
  - **[CreatedBy](MemberBanEvent.CreatedBy.md 'Guilded.Base.Events.MemberBanEvent.CreatedBy')** `Property`
    Gets the identifier of the staff who banned.
  - **[MemberBan](MemberBanEvent.MemberBan.md 'Guilded.Base.Events.MemberBanEvent.MemberBan')** `Property`
    Gets the information about the member's ban.
  - **[Reason](MemberBanEvent.Reason.md 'Guilded.Base.Events.MemberBanEvent.Reason')** `Property`
    Gets the reason why the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified.
  - **[ServerId](MemberBanEvent.ServerId.md 'Guilded.Base.Events.MemberBanEvent.ServerId')** `Property`
    Gets the identifier of the server where member has been banned/unbanned.
  - **[User](MemberBanEvent.User.md 'Guilded.Base.Events.MemberBanEvent.User')** `Property`
    Gets the banned user.
- **[MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')** `Class`
  Represents an event with the name `TeamMemberJoined` and opcode `0` that occurs once [member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member') joins a [server](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId').
  - **[MemberJoinedEvent(HashId, Member)](MemberJoinedEvent.MemberJoinedEvent(HashId,Member).md 'Guilded.Base.Events.MemberJoinedEvent.MemberJoinedEvent(Guilded.Base.HashId, Guilded.Base.Servers.Member)')** `Constructor`
    Initializes a new instance of [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent') from the specified JSON properties.
  - **[IsBot](MemberJoinedEvent.IsBot.md 'Guilded.Base.Events.MemberJoinedEvent.IsBot')** `Property`
    Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[JoinedAt](MemberJoinedEvent.JoinedAt.md 'Guilded.Base.Events.MemberJoinedEvent.JoinedAt')** `Property`
    Gets the date of when the member joined.
  - **[Member](MemberJoinedEvent.Member.md 'Guilded.Base.Events.MemberJoinedEvent.Member')** `Property`
    Gets the member who has joined.
  - **[Name](MemberJoinedEvent.Name.md 'Guilded.Base.Events.MemberJoinedEvent.Name')** `Property`
    Gets the global username of the user.
  - **[ServerId](MemberJoinedEvent.ServerId.md 'Guilded.Base.Events.MemberJoinedEvent.ServerId')** `Property`
    Gets the identifier of the server where the member has joined.
  - **[Type](MemberJoinedEvent.Type.md 'Guilded.Base.Events.MemberJoinedEvent.Type')** `Property`
    Gets the type of the user they are.
  - **[UserId](MemberJoinedEvent.UserId.md 'Guilded.Base.Events.MemberJoinedEvent.UserId')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User').
- **[MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')** `Class`
  Represents an event with the name `TeamMemberRemoved` and opcode `0` that occurs once member leaves or gets [kicked](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick').
  - **[MemberRemovedEvent(HashId, HashId, bool, bool)](MemberRemovedEvent.MemberRemovedEvent(HashId,HashId,bool,bool).md 'Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId, Guilded.Base.HashId, bool, bool)')** `Constructor`
    Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties.
  - **[IsBan](MemberRemovedEvent.IsBan.md 'Guilded.Base.Events.MemberRemovedEvent.IsBan')** `Property`
    Gets whether the user has been banned.
  - **[IsKick](MemberRemovedEvent.IsKick.md 'Guilded.Base.Events.MemberRemovedEvent.IsKick')** `Property`
    Gets whether the user has been kicked.
  - **[ServerId](MemberRemovedEvent.ServerId.md 'Guilded.Base.Events.MemberRemovedEvent.ServerId')** `Property`
    Gets the identifier of the server where the member has been kicked or has left.
  - **[UserId](MemberRemovedEvent.UserId.md 'Guilded.Base.Events.MemberRemovedEvent.UserId')** `Property`
    Gets the identifier of the member who has been kicked or has left.
- **[MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')** `Class`
  Represents an event with the name `TeamMemberUpdated` and opcode `0` that occurs once member receives any update, apart from [role update](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent').
  - **[MemberUpdatedEvent(HashId, MemberUpdate)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,MemberUpdate).md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId, Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate)')** `Constructor`
    Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties.
  - **[ServerId](MemberUpdatedEvent.ServerId.md 'Guilded.Base.Events.MemberUpdatedEvent.ServerId')** `Property`
    The identifier of the server where the [member](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') has been updated.
  - **[UserId](MemberUpdatedEvent.UserId.md 'Guilded.Base.Events.MemberUpdatedEvent.UserId')** `Property`
    Gets the identifier of the [member](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo').
  - **[UserInfo](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo')** `Property`
    Gets the properties that have been updated in the member.
- **[MemberUpdatedEvent.MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')** `Class`
  Represents the properties that have been updated in the member.
  - **[MemberUpdate(HashId, string)](MemberUpdatedEvent.MemberUpdate.MemberUpdate(HashId,string).md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.MemberUpdate(Guilded.Base.HashId, string)')** `Constructor`
    Initializes a new instance of [MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate') from the specified JSON properties.
  - **[Id](MemberUpdatedEvent.MemberUpdate.Id.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Id')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User').
  - **[Nickname](MemberUpdatedEvent.MemberUpdate.Nickname.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Nickname')** `Property`
    Gets the set nickname of the user in the server.
- **[MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')** `Class`
  Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.
  - **[MessageDeletedEvent(Nullable&lt;HashId&gt;, MessageDeleted)](MessageDeletedEvent.MessageDeletedEvent(Nullable_HashId_,MessageDeleted).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(System.Nullable<Guilded.Base.HashId>, Guilded.Base.Events.MessageDeletedEvent.MessageDeleted)')** `Constructor`
    Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties.
  - **[ChannelId](MessageDeletedEvent.ChannelId.md 'Guilded.Base.Events.MessageDeletedEvent.ChannelId')** `Property`
    Gets the identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.DeletedAt.md 'Guilded.Base.Events.MessageDeletedEvent.DeletedAt')** `Property`
    Gets the date of when the message was deleted.
  - **[Id](MessageDeletedEvent.Id.md 'Guilded.Base.Events.MessageDeletedEvent.Id')** `Property`
    Gets the identifier of the message.
- **[MessageDeletedEvent.MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')** `Class`
  Represents a message that was recently deleted/removed.
  - **[MessageDeleted(Guid, Guid, Nullable&lt;HashId&gt;, DateTime)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,Nullable_HashId_,DateTime).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid, Guid, System.Nullable<Guilded.Base.HashId>, System.DateTime)')** `Constructor`
    The identifier of the message.
  - **[ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId')** `Property`
    Gets the identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt')** `Property`
    Gets the date of when the message was deleted.
  - **[Id](MessageDeletedEvent.MessageDeleted.Id.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Id')** `Property`
    Gets the identifier of the message.
  - **[ServerId](MessageDeletedEvent.MessageDeleted.ServerId.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId')** `Property`
    Gets the identifier of the server where the message was.
  - **[Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object).md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode().md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](MessageDeletedEvent.MessageDeleted.ToString().md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()')** `Method`
    Creates string equivalent of the message.
- **[MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')** `Class`
  Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone creates/posts or updates/edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message') in a channel.
  - **[MessageEvent(Nullable&lt;HashId&gt;, Message)](MessageEvent.MessageEvent(Nullable_HashId_,Message).md 'Guilded.Base.Events.MessageEvent.MessageEvent(System.Nullable<Guilded.Base.HashId>, Guilded.Base.Content.Message)')** `Constructor`
    Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.
  - **[ChannelId](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId')** `Property`
    Gets the identifier of the channel where the content is.
  - **[Content](MessageEvent.Content.md 'Guilded.Base.Events.MessageEvent.Content')** `Property`
    Gets the text contents of the message.
  - **[CreatedAt](MessageEvent.CreatedAt.md 'Guilded.Base.Events.MessageEvent.CreatedAt')** `Property`
    Gets the date of when the content was created.
  - **[CreatedBy](MessageEvent.CreatedBy.md 'Guilded.Base.Events.MessageEvent.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content.
  - **[CreatedByWebhook](MessageEvent.CreatedByWebhook.md 'Guilded.Base.Events.MessageEvent.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the message.
  - **[IsReply](MessageEvent.IsReply.md 'Guilded.Base.Events.MessageEvent.IsReply')** `Property`
    Gets whether the specified message is a reply
  - **[IsSystemMessage](MessageEvent.IsSystemMessage.md 'Guilded.Base.Events.MessageEvent.IsSystemMessage')** `Property`
    Gets whether the specified message is a system message.
  - **[Type](MessageEvent.Type.md 'Guilded.Base.Events.MessageEvent.Type')** `Property`
    Gets the type of the message.
  - **[UpdatedAt](MessageEvent.UpdatedAt.md 'Guilded.Base.Events.MessageEvent.UpdatedAt')** `Property`
    Gets the date of when the message was edited.
  - **[AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint).md 'Guilded.Base.Events.MessageEvent.AddReactionAsync(uint)')** `Method`
    Adds a emote to a message in a channel.
  - **[CreateMessageAsync(bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(MessageContent)](MessageEvent.CreateMessageAsync(MessageContent).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(Embed[])](MessageEvent.CreateMessageAsync(Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool)](MessageEvent.CreateMessageAsync(string,bool,bool).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Embed[])](MessageEvent.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string).md 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[DeleteAsync()](MessageEvent.DeleteAsync().md 'Guilded.Base.Events.MessageEvent.DeleteAsync()')** `Method`
    Deletes a message from a channel.
  - **[ReplyAsync(bool, bool, Embed[])](MessageEvent.ReplyAsync(bool,bool,Embed[]).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool, Embed[])](MessageEvent.ReplyAsync(string,bool,bool,Embed[]).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool)](MessageEvent.ReplyAsync(string,bool,bool).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string)](MessageEvent.ReplyAsync(string).md 'Guilded.Base.Events.MessageEvent.ReplyAsync(string)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[UpdateAsync(string)](MessageEvent.UpdateAsync(string).md 'Guilded.Base.Events.MessageEvent.UpdateAsync(string)')** `Method`
    Edits the content of a message in a channel.
- **[MessageEvent&lt;T&gt;](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>')** `Class`
  Represents the base for message-related events.
  - **[MessageEvent(Nullable&lt;HashId&gt;, T)](MessageEvent_T_.MessageEvent(Nullable_HashId_,T).md 'Guilded.Base.Events.MessageEvent<T>.MessageEvent(System.Nullable<Guilded.Base.HashId>, T)')** `Constructor`
    Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.
  - **[Message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent<T>.Message')** `Property`
    The message received from the event.
- **[ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')** `Class`
  Represents an event with an event opcode of `2` that occurs when the client passes last event message identifier.
  - **[ResumeEvent(string)](ResumeEvent.ResumeEvent(string).md 'Guilded.Base.Events.ResumeEvent.ResumeEvent(string)')** `Constructor`
    Initializes a new instance of [ResumeEvent](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent') from the specified JSON properties.
  - **[MessageId](ResumeEvent.MessageId.md 'Guilded.Base.Events.ResumeEvent.MessageId')** `Property`
    Gets the identifier of the last received event.
- **[RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')** `Class`
  Represents an event with the name `teamRolesUpdated` and opcode `0` that occurs once [role holder](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') either loses a [role](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds') or receives it.
  - **[RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_).md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId, System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated>)')** `Constructor`
    Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties.
  - **[MemberRoleIds](RolesUpdatedEvent.MemberRoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds')** `Property`
    The list of receiving/losing member and current roles.
  - **[ServerId](RolesUpdatedEvent.ServerId.md 'Guilded.Base.Events.RolesUpdatedEvent.ServerId')** `Property`
    The identifier of the server where roles were updated.
  - **[UpdatedUsers](RolesUpdatedEvent.UpdatedUsers.md 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers')** `Property`
    The array of updated users.
- **[RolesUpdatedEvent.RolesUpdated](RolesUpdatedEvent.RolesUpdated.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')** `Class`
  Defines a role list holder and their role list.
  - **[RolesUpdated(HashId, IList&lt;uint&gt;)](RolesUpdatedEvent.RolesUpdated.RolesUpdated(HashId,IList_uint_).md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.Base.HashId, System.Collections.Generic.IList<uint>)')** `Constructor`
    Initializes a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated') from the specified JSON properties.
  - **[RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds')** `Property`
    Gets the list of roles that [member](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding.
  - **[UserId](RolesUpdatedEvent.RolesUpdated.UserId.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that lost or received [roles](RolesUpdatedEvent.RolesUpdated.RoleIds.md 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds').
- **[WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')** `Class`
  Represents an event with the name `TeamWebhookCreated` or `TeamWebhookUpdated` and opcode `0` that occurs once [webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook') gets created or updated.
  - **[WebhookEvent(HashId, Webhook)](WebhookEvent.WebhookEvent(HashId,Webhook).md 'Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId, Guilded.Base.Servers.Webhook)')** `Constructor`
    Initializes a new instance of [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties.
  - **[ChannelId](WebhookEvent.ChannelId.md 'Guilded.Base.Events.WebhookEvent.ChannelId')** `Property`
    Gets the identifier of the channel where the webhook is.
  - **[CreatedAt](WebhookEvent.CreatedAt.md 'Guilded.Base.Events.WebhookEvent.CreatedAt')** `Property`
    Gets the date when the webhook was created.
  - **[CreatedBy](WebhookEvent.CreatedBy.md 'Guilded.Base.Events.WebhookEvent.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the webhook.
  - **[Name](WebhookEvent.Name.md 'Guilded.Base.Events.WebhookEvent.Name')** `Property`
    Gets the name of the webhook.
  - **[ServerId](WebhookEvent.ServerId.md 'Guilded.Base.Events.WebhookEvent.ServerId')** `Property`
    Gets the identifier of the server where the webhook has been created/updated.
  - **[Token](WebhookEvent.Token.md 'Guilded.Base.Events.WebhookEvent.Token')** `Property`
    Gets the token of the webhook.
  - **[Webhook](WebhookEvent.Webhook.md 'Guilded.Base.Events.WebhookEvent.Webhook')** `Property`
    Gets the webhook that has been created or updated.
  - **[CreateMessageAsync(MessageContent)](WebhookEvent.CreateMessageAsync(MessageContent).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in a chat using a webhook.
  - **[CreateMessageAsync(Embed[])](WebhookEvent.CreateMessageAsync(Embed[]).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[CreateMessageAsync(string, Embed[])](WebhookEvent.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateMessageAsync(string, IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(string,IList_Embed_).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateMessageAsync(string)](WebhookEvent.CreateMessageAsync(string).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string)')** `Method`
    Creates a message with content containing only content in a chat using a webhook.
  - **[CreateMessageAsync(IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(IList_Embed_).md 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[DeleteAsync()](WebhookEvent.DeleteAsync().md 'Guilded.Base.Events.WebhookEvent.DeleteAsync()')** `Method`
    Deletes the specified webhook.
  - **[UpdateAsync(string)](WebhookEvent.UpdateAsync(string).md 'Guilded.Base.Events.WebhookEvent.UpdateAsync(string)')** `Method`
    Updates the specified webhook in the specified server.
- **[WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent')** `Class`
  Represents an event with the opcode `1` that is received once WebSocket connects or reconnects.
  - **[WelcomeEvent(int, Me, string)](WelcomeEvent.WelcomeEvent(int,Me,string).md 'Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int, Guilded.Base.Users.Me, string)')** `Constructor`
    Initializes a new instance of [WelcomeEvent](WelcomeEvent.md 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties.
  - **[HeartbeatInterval](WelcomeEvent.HeartbeatInterval.md 'Guilded.Base.Events.WelcomeEvent.HeartbeatInterval')** `Property`
    Gets the time duration between heartbeats in milliseconds.
  - **[LastMessageId](WelcomeEvent.LastMessageId.md 'Guilded.Base.Events.WelcomeEvent.LastMessageId')** `Property`
    Gets the identifier of the last received WebSocket message.
  - **[User](WelcomeEvent.User.md 'Guilded.Base.Events.WelcomeEvent.User')** `Property`
    Gets the currently logged in user.
- **[XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent')** `Class`
  Represents an event with the name `TeamXpAdded` and opcode `0` that occurs once [Amount](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount') XP is given to [Users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users'). This can be given to a couple users, instead of it being restricted to one user.
  - **[XpAddedEvent(IList&lt;HashId&gt;, long)](XpAddedEvent.XpAddedEvent(IList_HashId_,long).md 'Guilded.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.IList<Guilded.Base.HashId>, long)')** `Constructor`
    Initializes a new instance of [XpAddedEvent](XpAddedEvent.md 'Guilded.Base.Events.XpAddedEvent') from the specified JSON properties.
  - **[Amount](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount')** `Property`
    Gets the amount of XP given to the [users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[FirstUser](XpAddedEvent.FirstUser.md 'Guilded.Base.Events.XpAddedEvent.FirstUser')** `Property`
    Gets the first XP receiving [user](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[LastUser](XpAddedEvent.LastUser.md 'Guilded.Base.Events.XpAddedEvent.LastUser')** `Property`
    Gets the last XP receiving [user](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[Users](XpAddedEvent.Users.md 'Guilded.Base.Events.XpAddedEvent.Users')** `Property`
    Gets the identifiers of the users who received [XP](XpAddedEvent.Amount.md 'Guilded.Base.Events.XpAddedEvent.Amount').
- **[IServerEvent](IServerEvent.md 'Guilded.Base.Events.IServerEvent')** `Interface`
  Represents the interface for server-based events.
  - **[ServerId](IServerEvent.ServerId.md 'Guilded.Base.Events.IServerEvent.ServerId')** `Property`
    Gets the identifier of the server where the event occurred.