---
title: Guilded.NET
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.NET Namespace
- **[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')** `Class`
  A base for all Guilded clients.
  - **[AbstractGuildedClient()](AbstractGuildedClient.AbstractGuildedClient() 'Guilded.NET.AbstractGuildedClient.AbstractGuildedClient()')** `Constructor`
    A base constructor for creating Guilded clients.
  - **[PreparedEvent](AbstractGuildedClient.PreparedEvent 'Guilded.NET.AbstractGuildedClient.PreparedEvent')** `Field`
    An event when the client is prepared.
  - **[GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents')** `Property`
    A dictionary of Guilded events.
  - **[MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.NET.AbstractGuildedClient.MemberUpdated')** `Property`
    An event that occurs once a member gets updated.
  - **[MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated')** `Property`
    An event that occurs once someone creates a message.
  - **[MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.NET.AbstractGuildedClient.MessageDeleted')** `Property`
    An event that occurs once someone deletes a message.
  - **[MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated')** `Property`
    An event that occurs once someone edits a message.
  - **[Resume](AbstractGuildedClient.Resume 'Guilded.NET.AbstractGuildedClient.Resume')** `Property`
    Event that occurs when client passes last event message identifier.
  - **[RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.NET.AbstractGuildedClient.RolesUpdated')** `Property`
    An event that occurs once someone receives or loses a role.
  - **[Welcome](AbstractGuildedClient.Welcome 'Guilded.NET.AbstractGuildedClient.Welcome')** `Property`
    An event that is received once WebSocket is initiated.
  - **[XpAdded](AbstractGuildedClient.XpAdded 'Guilded.NET.AbstractGuildedClient.XpAdded')** `Property`
    An event that occurs once XP is given to a set of users.
  - **[AddMembershipAsync(HashId, HashId)](AbstractGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Adds a member to the group.
  - **[AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)')** `Method`
    Adds a reaction to the message.
  - **[AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint)')** `Method`
    Adds a reaction to the content.
  - **[AddRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.NET.AbstractGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)')** `Method`
    Adds a role to the user.
  - **[AddXpAsync(HashId, HashId, long)](AbstractGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, long)')** `Method`
    Adds XP to the user.
  - **[AddXpAsync(HashId, uint, long)](AbstractGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, uint, long)')** `Method`
    Adds XP to the role.
  - **[ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.NET.AbstractGuildedClient.ConnectAsync()')** `Method`
    Connects this client to Guilded.
  - **[CreatedDocAsync(Guid, string, string)](AbstractGuildedClient.CreatedDocAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreatedDocAsync(System.Guid, string, string)')** `Method`
    Creates a document in document list.
  - **[CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid, string, string)')** `Method`
    Creates a thread in forums.
  - **[CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, string)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)')** `Method`
    Creates a message in a chat using provided webhook.
  - **[CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid, string, string)')** `Method`
    Creates an item in the list.
  - **[CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Content.MessageContent)')** `Method`
    Creates a message in chat.
  - **[DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.NET.AbstractGuildedClient.DeleteDocAsync(System.Guid, uint)')** `Method`
    Deletes the document.
  - **[DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.NET.AbstractGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)')** `Method`
    Deletes the message.
  - **[DeleteNicknameAsync(HashId, HashId)](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Deletes member's nickname.
  - **[DisconnectAsync()](AbstractGuildedClient.DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()')** `Method`
    Disconnects this client from Guilded.
  - **[Dispose()](AbstractGuildedClient.Dispose() 'Guilded.NET.AbstractGuildedClient.Dispose()')** `Method`
    Disposes [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') instance.
  - **[GetDocAsync(Guid, uint)](AbstractGuildedClient.GetDocAsync(Guid,uint) 'Guilded.NET.AbstractGuildedClient.GetDocAsync(System.Guid, uint)')** `Method`
    Gets the specified document.
  - **[GetDocsAsync(Guid)](AbstractGuildedClient.GetDocsAsync(Guid) 'Guilded.NET.AbstractGuildedClient.GetDocsAsync(System.Guid)')** `Method`
    Gets a list of documents.
  - **[GetMemberRolesAsync(HashId, HashId)](AbstractGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Gets the member's roles.
  - **[GetMessageAsync(Guid, Guid)](AbstractGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid, System.Guid)')** `Method`
    Gets a message.
  - **[GetMessagesAsync(Guid, bool)](AbstractGuildedClient.GetMessagesAsync(Guid,bool) 'Guilded.NET.AbstractGuildedClient.GetMessagesAsync(System.Guid, bool)')** `Method`
    Gets a set of messages.
  - **[GetSocialLinkAsync(HashId, HashId, SocialLinkType)](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType)')** `Method`
    Gets the specified user's social links.
  - **[OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) 'Guilded.NET.AbstractGuildedClient.OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage)')** `Method`
    When the socket message event is invoked.
  - **[RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)')** `Method`
    Removes a member from the group.
  - **[RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)')** `Method`
    Removes a reaction from the message.
  - **[RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)')** `Method`
    Removes a reaction from the content.
  - **[RemoveRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)')** `Method`
    Removes a role from the user.
  - **[UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid, uint, string, string)')** `Method`
    Updates the document.
  - **[UpdateMessageAsync(Guid, Guid, string)](AbstractGuildedClient.UpdateMessageAsync(Guid,Guid,string) 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)')** `Method`
    Updates the message.
  - **[UpdateNicknameAsync(HashId, HashId, string)](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, string)')** `Method`
    Updates the member's nickname.
  - **[Prepared](AbstractGuildedClient.Prepared 'Guilded.NET.AbstractGuildedClient.Prepared')** `Event`
    An event when the client is prepared.
- **[EventInfo&lt;T&gt;](EventInfo_T_ 'Guilded.NET.EventInfo<T>')** `Class`
  Defines a Guilded event.
  - **[EventInfo()](EventInfo_T_.EventInfo() 'Guilded.NET.EventInfo<T>.EventInfo()')** `Constructor`
    Creates a new Guilded event.
  - **[Subject](EventInfo_T_.Subject 'Guilded.NET.EventInfo<T>.Subject')** `Field`
    A subject that will be used as an observable.
  - **[ArgumentType](EventInfo_T_.ArgumentType 'Guilded.NET.EventInfo<T>.ArgumentType')** `Property`
    The type of the arguments that should be used.
  - **[Observable](EventInfo_T_.Observable 'Guilded.NET.EventInfo<T>.Observable')** `Property`
    An observable that can be subscribed.
  - **[OnError(Exception)](EventInfo_T_.OnError(Exception) 'Guilded.NET.EventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with OnError.
  - **[OnNext(object)](EventInfo_T_.OnNext(object) 'Guilded.NET.EventInfo<T>.OnNext(object)')** `Method`
    Notifies observers with OnNext.
- **[GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')** `Class`
  A client type for Guilded bots.
  - **[GuildedBotClient()](GuildedBotClient.GuildedBotClient() 'Guilded.NET.GuildedBotClient.GuildedBotClient()')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance without authentication token.
  - **[GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string) 'Guilded.NET.GuildedBotClient.GuildedBotClient(string)')** `Constructor`
    Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance with given auth.
  - **[AuthToken](GuildedBotClient.AuthToken 'Guilded.NET.GuildedBotClient.AuthToken')** `Property`
    An authentication token used to log into a bot in Guilded.
  - **[ConnectAsync()](GuildedBotClient.ConnectAsync() 'Guilded.NET.GuildedBotClient.ConnectAsync()')** `Method`
    Connects to Guilded using defined auth.
  - **[ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)')** `Method`
    Connects to Guilded bot using parameter as an auth.
- **[IEventInfo&lt;T&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')** `Interface`
  The base interface for event info.
  - **[ArgumentType](IEventInfo_T_.ArgumentType 'Guilded.NET.IEventInfo<T>.ArgumentType')** `Property`
    The type of the arguments that should be used.
  - **[Observable](IEventInfo_T_.Observable 'Guilded.NET.IEventInfo<T>.Observable')** `Property`
    An observable that can be subscribed.
  - **[OnError(Exception)](IEventInfo_T_.OnError(Exception) 'Guilded.NET.IEventInfo<T>.OnError(System.Exception)')** `Method`
    Notifies observers with OnError.
  - **[OnNext(object)](IEventInfo_T_.OnNext(object) 'Guilded.NET.IEventInfo<T>.OnNext(object)')** `Method`
    Notifies observers with OnNext.