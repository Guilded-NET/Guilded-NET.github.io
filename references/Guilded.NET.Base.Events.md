---
title: Guilded.NET.Base.Events
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.NET.Base.Events Namespace
- **[GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')** `Class`
  Message that was received from a WebSocket client.
  - **[GuildedSocketMessage(byte, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(byte,string,JObject,string) 'Guilded.NET.Base.Events.GuildedSocketMessage.GuildedSocketMessage(byte, string, Newtonsoft.Json.Linq.JObject, string)')** `Constructor`
    Creates a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage') with given information.
  - **[EventName](GuildedSocketMessage.EventName 'Guilded.NET.Base.Events.GuildedSocketMessage.EventName')** `Property`
    The name of the event received.
  - **[MessageId](GuildedSocketMessage.MessageId 'Guilded.NET.Base.Events.GuildedSocketMessage.MessageId')** `Property`
    An identifier that allows the event to be replayed.
  - **[Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode')** `Property`
    An operation code that tells about the message.
  - **[RawData](GuildedSocketMessage.RawData 'Guilded.NET.Base.Events.GuildedSocketMessage.RawData')** `Property`
    The data associated with the event.
- **[MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')** `Class`
  An event that occurs once a member gets updated.
  - **[MemberUpdatedEvent(HashId, Member)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,Member) 'Guilded.NET.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.NET.Base.HashId, Guilded.NET.Base.Servers.Member)')** `Constructor`
    Creates a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent'). This is currently only used in deserialization.
  - **[MemberId](MemberUpdatedEvent.MemberId 'Guilded.NET.Base.Events.MemberUpdatedEvent.MemberId')** `Property`
    The identifier of the member.
  - **[ServerId](MemberUpdatedEvent.ServerId 'Guilded.NET.Base.Events.MemberUpdatedEvent.ServerId')** `Property`
    The identifier of the server where member was updated.
  - **[UserInfo](MemberUpdatedEvent.UserInfo 'Guilded.NET.Base.Events.MemberUpdatedEvent.UserInfo')** `Property`
    The info about updated member.
- **[MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')** `Class`
  An event that occurs once someone creates a message.
  - **[MessageCreatedEvent(Message)](MessageCreatedEvent.MessageCreatedEvent(Message) 'Guilded.NET.Base.Events.MessageCreatedEvent.MessageCreatedEvent(Guilded.NET.Base.Content.Message)')** `Constructor`
    Creates a new instance of [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent'). This is currently only used in deserialization.
- **[MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')** `Class`
  An event that occurs once someone deletes a message.
  - **[MessageDeletedEvent(MessageDeleted)](MessageDeletedEvent.MessageDeletedEvent(MessageDeleted) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted)')** `Constructor`
    Creates a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent'). This is currently only used in deserialization.
  - **[ChannelId](MessageDeletedEvent.ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.ChannelId')** `Property`
    The identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.DeletedAt')** `Property`
    The date of when the message was deleted.
  - **[Id](MessageDeletedEvent.Id 'Guilded.NET.Base.Events.MessageDeletedEvent.Id')** `Property`
    The identifier of the message.
- **[MessageDeletedEvent.MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')** `Class`
  A message that was recently deleted/removed.
  - **[MessageDeleted(Guid, Guid, HashId, DateTime)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,HashId,DateTime) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(System.Guid, System.Guid, Guilded.NET.Base.HashId, System.DateTime)')** `Constructor`
    The identifier of the message.
  - **[ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId')** `Property`
    The identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt')** `Property`
    The date of when the message was deleted.
  - **[Id](MessageDeletedEvent.MessageDeleted.Id 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Id')** `Property`
    The identifier of the message.
  - **[ServerId](MessageDeletedEvent.MessageDeleted.ServerId 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId')** `Property`
    The identifier of the server where the message was.
  - **[Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object) 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](MessageDeletedEvent.MessageDeleted.ToString() 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()')** `Method`
    Creates string equivalent of the message.
- **[MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')** `Class`
  The base for message-related events.
  - **[MessageEvent(Message)](MessageEvent.MessageEvent(Message) 'Guilded.NET.Base.Events.MessageEvent.MessageEvent(Guilded.NET.Base.Content.Message)')** `Constructor`
    Creates a new instance of [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent'). This is currently only used in deserialization.
  - **[ChannelId](MessageEvent.ChannelId 'Guilded.NET.Base.Events.MessageEvent.ChannelId')** `Property`
    The identifier of the channel where the content is.
  - **[Content](MessageEvent.Content 'Guilded.NET.Base.Events.MessageEvent.Content')** `Property`
    The contents of the message.
  - **[CreatedAt](MessageEvent.CreatedAt 'Guilded.NET.Base.Events.MessageEvent.CreatedAt')** `Property`
    The date of when the content was created.
  - **[CreatedBy](MessageEvent.CreatedBy 'Guilded.NET.Base.Events.MessageEvent.CreatedBy')** `Property`
    The identifier of the user creator of the content.
  - **[CreatedByWebhook](MessageEvent.CreatedByWebhook 'Guilded.NET.Base.Events.MessageEvent.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the message.
  - **[ServerId](MessageEvent.ServerId 'Guilded.NET.Base.Events.MessageEvent.ServerId')** `Property`
    The identifier of the server where the content is.
  - **[Type](MessageEvent.Type 'Guilded.NET.Base.Events.MessageEvent.Type')** `Property`
    The type of the message.
  - **[AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.AddReactionAsync(uint)')** `Method`
    Adds a reaction to the message.
  - **[CreateMessageAsync(string, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,Guid[]) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, bool, System.Guid[])')** `Method`
    Creates a message in a chat.
  - **[CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, System.Guid[])')** `Method`
    Creates a message in a chat.
  - **[CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string)')** `Method`
    Creates a message in a chat.
  - **[DeleteMessageAsync()](MessageEvent.DeleteMessageAsync() 'Guilded.NET.Base.Events.MessageEvent.DeleteMessageAsync()')** `Method`
    Deletes the message.
  - **[RemoveReactionAsync(uint)](MessageEvent.RemoveReactionAsync(uint) 'Guilded.NET.Base.Events.MessageEvent.RemoveReactionAsync(uint)')** `Method`
    Removes a reaction from the message.
  - **[ReplyAsync(string, bool)](MessageEvent.ReplyAsync(string,bool) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string, bool)')** `Method`
    Replies to the message in the chat.
  - **[ReplyAsync(string)](MessageEvent.ReplyAsync(string) 'Guilded.NET.Base.Events.MessageEvent.ReplyAsync(string)')** `Method`
    Replies to the message in the chat.
  - **[UpdateMessageAsync(string)](MessageEvent.UpdateMessageAsync(string) 'Guilded.NET.Base.Events.MessageEvent.UpdateMessageAsync(string)')** `Method`
    Updates the message.
- **[MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent<T>')** `Class`
  The base for message-related events.
  - **[MessageEvent(T)](MessageEvent_T_.MessageEvent(T) 'Guilded.NET.Base.Events.MessageEvent<T>.MessageEvent(T)')** `Constructor`
    Creates a new instance of [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent'). This is currently only used in deserialization.
  - **[Message](MessageEvent_T_.Message 'Guilded.NET.Base.Events.MessageEvent<T>.Message')** `Property`
    The message received from the event.
- **[MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')** `Class`
  An event that occurs once someone edits a message.
  - **[MessageUpdatedEvent(Message)](MessageUpdatedEvent.MessageUpdatedEvent(Message) 'Guilded.NET.Base.Events.MessageUpdatedEvent.MessageUpdatedEvent(Guilded.NET.Base.Content.Message)')** `Constructor`
    Creates a new instance of [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent'). This is currently only used in deserialization.
  - **[UpdatedAt](MessageUpdatedEvent.UpdatedAt 'Guilded.NET.Base.Events.MessageUpdatedEvent.UpdatedAt')** `Property`
    The date of when the message was updated.
- **[ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')** `Class`
  Event that occurs when client passes last event message identifier.
  - **[ResumeEvent(string)](ResumeEvent.ResumeEvent(string) 'Guilded.NET.Base.Events.ResumeEvent.ResumeEvent(string)')** `Constructor`
    Creates a new instance of [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent'). This is currently only used in deserialization.
  - **[MessageId](ResumeEvent.MessageId 'Guilded.NET.Base.Events.ResumeEvent.MessageId')** `Property`
    The identifier of the last received event.
- **[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent')** `Class`
  An event that occurs once someone receives or loses a role.
  - **[RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_) 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.NET.Base.HashId, System.Collections.Generic.IList<Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated>)')** `Constructor`
    Creates a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent'). This is currently only used in deserialization.
  - **[MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.MemberRoleIds')** `Property`
    The list of receiving/losing member and current roles.
  - **[ServerId](RolesUpdatedEvent.ServerId 'Guilded.NET.Base.Events.RolesUpdatedEvent.ServerId')** `Property`
    The identifier of the server where roles were updated.
  - **[UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.NET.Base.Events.RolesUpdatedEvent.UpdatedUsers')** `Property`
    The array of updated users.
- **[RolesUpdatedEvent.RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated')** `Class`
  Defines a role list holder and their role list.
  - **[RolesUpdated(HashId, IList&lt;uint&gt;)](RolesUpdatedEvent.RolesUpdated.RolesUpdated(HashId,IList_uint_) 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.NET.Base.HashId, System.Collections.Generic.IList<uint>)')** `Constructor`
    Creates a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated'). This is currently only used in deserialization.
  - **[RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds')** `Property`
    The list of roles [UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') holds.
  - **[UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId')** `Property`
    The identifier of the role holder.
- **[WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')** `Class`
  An event that is received once WebSocket is initiated.
  - **[WelcomeEvent(int, string)](WelcomeEvent.WelcomeEvent(int,string) 'Guilded.NET.Base.Events.WelcomeEvent.WelcomeEvent(int, string)')** `Constructor`
    Creates a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'). This is currently only used in deserialization.
  - **[HeartbeatInterval](WelcomeEvent.HeartbeatInterval 'Guilded.NET.Base.Events.WelcomeEvent.HeartbeatInterval')** `Property`
    The duration between heartbeats.
  - **[LastMessageId](WelcomeEvent.LastMessageId 'Guilded.NET.Base.Events.WelcomeEvent.LastMessageId')** `Property`
    The identifier of the last event sent.
- **[XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent')** `Class`
  An event that occurs once XP is given to a set of users.
  - **[XpAddedEvent(ISet&lt;HashId&gt;, long)](XpAddedEvent.XpAddedEvent(ISet_HashId_,long) 'Guilded.NET.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.ISet<Guilded.NET.Base.HashId>, long)')** `Constructor`
    Creates a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent'). This is currently only used in deserialization.
  - **[Amount](XpAddedEvent.Amount 'Guilded.NET.Base.Events.XpAddedEvent.Amount')** `Property`
    The amount of XP given to the users.
  - **[FirstUser](XpAddedEvent.FirstUser 'Guilded.NET.Base.Events.XpAddedEvent.FirstUser')** `Property`
    Gets the first XP receiving user.
  - **[LastUser](XpAddedEvent.LastUser 'Guilded.NET.Base.Events.XpAddedEvent.LastUser')** `Property`
    Gets the last XP receiving user.
  - **[Users](XpAddedEvent.Users 'Guilded.NET.Base.Events.XpAddedEvent.Users')** `Property`
    The identifiers of users who received XP.