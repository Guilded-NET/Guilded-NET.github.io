---
title: Guilded.Base.Servers
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Servers Namespace
- **[Member](Member 'Guilded.Base.Servers.Member')** `Class`
  Represents information about [the user](User 'Guilded.Base.Users.User') in [a server](Server 'Guilded.Base.Servers.Server').
  - **[Member(User, IList&lt;uint&gt;, DateTime, string, bool)](Member.Member(User,IList_uint_,DateTime,string,bool) 'Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User, System.Collections.Generic.IList<uint>, System.DateTime, string, bool)')** `Constructor`
    Initializes a new instance of [Member](Member 'Guilded.Base.Servers.Member')f rom the specified JSON properties.
  - **[IsOwner](Member.IsOwner 'Guilded.Base.Servers.Member.IsOwner')** `Property`
    Gets whether [the member](Member 'Guilded.Base.Servers.Member') is the owner of [the server](Server 'Guilded.Base.Servers.Server').
  - **[JoinedAt](Member.JoinedAt 'Guilded.Base.Servers.Member.JoinedAt')** `Property`
    Gets the date when [the member](Member 'Guilded.Base.Servers.Member') joined.
  - **[Nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname')** `Property`
    Gets the set nickname of [the member](Member 'Guilded.Base.Servers.Member') in [the server](Server 'Guilded.Base.Servers.Server').
- **[MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan')** `Class`
  Represents the information of [user's](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') ban.
  - **[MemberBan(UserSummary, HashId, DateTime, string)](MemberBan.MemberBan(UserSummary,HashId,DateTime,string) 'Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary, Guilded.Base.HashId, System.DateTime, string)')** `Constructor`
    Initializes a new instance of [MemberBan](MemberBan 'Guilded.Base.Servers.MemberBan') with the provided details.
  - **[CreatedAt](MemberBan.CreatedAt 'Guilded.Base.Servers.MemberBan.CreatedAt')** `Property`
    Gets the date when the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') was banned
  - **[CreatedBy](MemberBan.CreatedBy 'Guilded.Base.Servers.MemberBan.CreatedBy')** `Property`
    Gets the identifier of the staff who banned.
  - **[Reason](MemberBan.Reason 'Guilded.Base.Servers.MemberBan.Reason')** `Property`
    Gets the reason why the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified.
  - **[User](MemberBan.User 'Guilded.Base.Servers.MemberBan.User')** `Property`
    Gets the banned user.
- **[MemberSummary](MemberSummary 'Guilded.Base.Servers.MemberSummary')** `Class`
  Represents the summary of [a member](Member 'Guilded.Base.Servers.Member').
  - **[MemberSummary(UserSummary, IList&lt;uint&gt;)](MemberSummary.MemberSummary(UserSummary,IList_uint_) 'Guilded.Base.Servers.MemberSummary.MemberSummary(Guilded.Base.Users.UserSummary, System.Collections.Generic.IList<uint>)')** `Constructor`
    Initializes a new instance of [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>').
- **[MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>')** `Class`
  Represents the base type for [member models](Member 'Guilded.Base.Servers.Member').
  - **[MemberSummary(T, IList&lt;uint&gt;)](MemberSummary_T_.MemberSummary(T,IList_uint_) 'Guilded.Base.Servers.MemberSummary<T>.MemberSummary(T, System.Collections.Generic.IList<uint>)')** `Constructor`
    Initializes a new instance of [MemberSummary&lt;T&gt;](MemberSummary_T_ 'Guilded.Base.Servers.MemberSummary<T>').
  - **[Id](MemberSummary_T_.Id 'Guilded.Base.Servers.MemberSummary<T>.Id')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User').
  - **[IsBot](MemberSummary_T_.IsBot 'Guilded.Base.Servers.MemberSummary<T>.IsBot')** `Property`
    Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[Name](MemberSummary_T_.Name 'Guilded.Base.Servers.MemberSummary<T>.Name')** `Property`
    Gets the global username of [the user](User 'Guilded.Base.Users.User').
  - **[RoleIds](MemberSummary_T_.RoleIds 'Guilded.Base.Servers.MemberSummary<T>.RoleIds')** `Property`
    Gets the list of roles [member](Member 'Guilded.Base.Servers.Member') holds.
  - **[Type](MemberSummary_T_.Type 'Guilded.Base.Servers.MemberSummary<T>.Type')** `Property`
    Gets the type of [the user](User 'Guilded.Base.Users.User') they are.
  - **[User](MemberSummary_T_.User 'Guilded.Base.Servers.MemberSummary<T>.User')** `Property`
    Gets [the user](User 'Guilded.Base.Users.User') they are.
- **[Server](Server 'Guilded.Base.Servers.Server')** `Class`
  /// Represents a team or a guild in Guilded.
  - **[Server(HashId, HashId, string, DateTime, Nullable&lt;ServerType&gt;, string, string, Uri, Uri, string, bool, Nullable&lt;Guid&gt;)](Server.Server(HashId,HashId,string,DateTime,Nullable_ServerType_,string,string,Uri,Uri,string,bool,Nullable_Guid_) 'Guilded.Base.Servers.Server.Server(Guilded.Base.HashId, Guilded.Base.HashId, string, System.DateTime, System.Nullable<Guilded.Base.Servers.ServerType>, string, string, Uri, Uri, string, bool, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [Server](Server 'Guilded.Base.Servers.Server') from specified JSON properties.
  - **[About](Server.About 'Guilded.Base.Servers.Server.About')** `Property`
    Gets the description of [the server](Server 'Guilded.Base.Servers.Server').
  - **[Avatar](Server.Avatar 'Guilded.Base.Servers.Server.Avatar')** `Property`
    Gets [the URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the icon image of [the server](Server 'Guilded.Base.Servers.Server').
  - **[Banner](Server.Banner 'Guilded.Base.Servers.Server.Banner')** `Property`
    Gets [the URL](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri') to the banner image of [the server](Server 'Guilded.Base.Servers.Server').
  - **[CreatedAt](Server.CreatedAt 'Guilded.Base.Servers.Server.CreatedAt')** `Property`
    Gets the date when [the server](Server 'Guilded.Base.Servers.Server') was created.
  - **[DefaultChannelId](Server.DefaultChannelId 'Guilded.Base.Servers.Server.DefaultChannelId')** `Property`
    Gets [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') of [the server](Server 'Guilded.Base.Servers.Server') that is the main channel.
  - **[Id](Server.Id 'Guilded.Base.Servers.Server.Id')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server').
  - **[IsVerified](Server.IsVerified 'Guilded.Base.Servers.Server.IsVerified')** `Property`
    Gets whether [the server](Server 'Guilded.Base.Servers.Server') is verified by the Guilded staff team.
  - **[Name](Server.Name 'Guilded.Base.Servers.Server.Name')** `Property`
    Gets the displayed name of [the server](Server 'Guilded.Base.Servers.Server').
  - **[OwnerId](Server.OwnerId 'Guilded.Base.Servers.Server.OwnerId')** `Property`
    Gets [the user](User 'Guilded.Base.Users.User') that created [the server](Server 'Guilded.Base.Servers.Server').
  - **[Timezone](Server.Timezone 'Guilded.Base.Servers.Server.Timezone')** `Property`
    Gets the set timezone of [the server](Server 'Guilded.Base.Servers.Server').
  - **[Type](Server.Type 'Guilded.Base.Servers.Server.Type')** `Property`
    Gets the selected [type](ServerType 'Guilded.Base.Servers.ServerType') of [the server](Server 'Guilded.Base.Servers.Server').
  - **[Url](Server.Url 'Guilded.Base.Servers.Server.Url')** `Property`
    Gets the part of URL to the [the server](Server 'Guilded.Base.Servers.Server').
- **[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')** `Class`
  Represents a navigatable item that contains content.
  - **[ServerChannel(Guid, HashId, HashId, ChannelType, string, HashId, DateTime, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, string, Nullable&lt;Guid&gt;, Nullable&lt;uint&gt;)](ServerChannel.ServerChannel(Guid,HashId,HashId,ChannelType,string,HashId,DateTime,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,string,Nullable_Guid_,Nullable_uint_) 'Guilded.Base.Servers.ServerChannel.ServerChannel(Guid, Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Servers.ChannelType, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, string, System.Nullable<Guid>, System.Nullable<uint>)')** `Constructor`
    Initializes a new instance of [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel') from the specified JSON properties.
  - **[NameLimit](ServerChannel.NameLimit 'Guilded.Base.Servers.ServerChannel.NameLimit')** `Field`
    The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [channel's name](ServerChannel.Name 'Guilded.Base.Servers.ServerChannel.Name').
  - **[TopicLimit](ServerChannel.TopicLimit 'Guilded.Base.Servers.ServerChannel.TopicLimit')** `Field`
    The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [channel's topic](ServerChannel.Topic 'Guilded.Base.Servers.ServerChannel.Topic').
  - **[ArchivedAt](ServerChannel.ArchivedAt 'Guilded.Base.Servers.ServerChannel.ArchivedAt')** `Property`
    Gets the date when the channel was archived.
  - **[ArchivedBy](ServerChannel.ArchivedBy 'Guilded.Base.Servers.ServerChannel.ArchivedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that archived the channel.
  - **[CategoryId](ServerChannel.CategoryId 'Guilded.Base.Servers.ServerChannel.CategoryId')** `Property`
    Gets the identifier of the parent category of this channel.
  - **[CreatedAt](ServerChannel.CreatedAt 'Guilded.Base.Servers.ServerChannel.CreatedAt')** `Property`
    Gets the date when the channel was created.
  - **[CreatedBy](ServerChannel.CreatedBy 'Guilded.Base.Servers.ServerChannel.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created the channel.
  - **[GroupId](ServerChannel.GroupId 'Guilded.Base.Servers.ServerChannel.GroupId')** `Property`
    Gets the identifier of the parent group of this channel.
  - **[Id](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')** `Property`
    Gets the identifier of the channel.
  - **[IsArchived](ServerChannel.IsArchived 'Guilded.Base.Servers.ServerChannel.IsArchived')** `Property`
    Gets whether the channel has been archived.
  - **[IsCategorized](ServerChannel.IsCategorized 'Guilded.Base.Servers.ServerChannel.IsCategorized')** `Property`
    Gets whether the channel is in a category.
  - **[IsPublic](ServerChannel.IsPublic 'Guilded.Base.Servers.ServerChannel.IsPublic')** `Property`
    Gets whether the channel is globally viewable.
  - **[IsThread](ServerChannel.IsThread 'Guilded.Base.Servers.ServerChannel.IsThread')** `Property`
    Gets whether the channel is a thread of [a channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Name](ServerChannel.Name 'Guilded.Base.Servers.ServerChannel.Name')** `Property`
    Gets the name of the channel.
  - **[ParentId](ServerChannel.ParentId 'Guilded.Base.Servers.ServerChannel.ParentId')** `Property`
    Gets the identifier of the parent channel of this channel.
  - **[ServerId](ServerChannel.ServerId 'Guilded.Base.Servers.ServerChannel.ServerId')** `Property`
    Gets the identifier of the parent server of this channel.
  - **[Topic](ServerChannel.Topic 'Guilded.Base.Servers.ServerChannel.Topic')** `Property`
    Gets the topic describing what the channel is about.
  - **[Type](ServerChannel.Type 'Guilded.Base.Servers.ServerChannel.Type')** `Property`
    Gets the type of content the channel holds.
  - **[UpdatedAt](ServerChannel.UpdatedAt 'Guilded.Base.Servers.ServerChannel.UpdatedAt')** `Property`
    Gets the date when the channel was edited.
  - **[CreateWebhookAsync(string)](ServerChannel.CreateWebhookAsync(string) 'Guilded.Base.Servers.ServerChannel.CreateWebhookAsync(string)')** `Method`
    Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteAsync()](ServerChannel.DeleteAsync() 'Guilded.Base.Servers.ServerChannel.DeleteAsync()')** `Method`
    Deletes the channel.
  - **[UpdateAsync(string, string, Nullable&lt;bool&gt;)](ServerChannel.UpdateAsync(string,string,Nullable_bool_) 'Guilded.Base.Servers.ServerChannel.UpdateAsync(string, string, System.Nullable<bool>)')** `Method`
    Deletes the channel.
- **[Webhook](Webhook 'Guilded.Base.Servers.Webhook')** `Class`
  Represents a channel webhook. This is a bot-like [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') member that creates messages, list items or forum threads once its URL is invoked.
  - **[Webhook(Guid, string, Guid, HashId, DateTime, HashId, string, Nullable&lt;DateTime&gt;)](Webhook.Webhook(Guid,string,Guid,HashId,DateTime,HashId,string,Nullable_DateTime_) 'Guilded.Base.Servers.Webhook.Webhook(Guid, string, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.HashId, string, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [Webhook](Webhook 'Guilded.Base.Servers.Webhook') from the specified JSON properties.
  - **[ChannelId](Webhook.ChannelId 'Guilded.Base.Servers.Webhook.ChannelId')** `Property`
    Gets the identifier of the channel where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is.
  - **[CreatedAt](Webhook.CreatedAt 'Guilded.Base.Servers.Webhook.CreatedAt')** `Property`
    Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was created.
  - **[CreatedBy](Webhook.CreatedBy 'Guilded.Base.Servers.Webhook.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[DeletedAt](Webhook.DeletedAt 'Guilded.Base.Servers.Webhook.DeletedAt')** `Property`
    Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was deleted.
  - **[Id](Webhook.Id 'Guilded.Base.Servers.Webhook.Id')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[Name](Webhook.Name 'Guilded.Base.Servers.Webhook.Name')** `Property`
    Gets the name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[ServerId](Webhook.ServerId 'Guilded.Base.Servers.Webhook.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is.
  - **[Token](Webhook.Token 'Guilded.Base.Servers.Webhook.Token')** `Property`
    Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[CreateMessageAsync(MessageContent)](Webhook.CreateMessageAsync(MessageContent) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhook.
  - **[CreateMessageAsync(Embed[])](Webhook.CreateMessageAsync(Embed[]) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[CreateMessageAsync(string, Embed[])](Webhook.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateMessageAsync(string, IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(string,IList_Embed_) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateMessageAsync(string)](Webhook.CreateMessageAsync(string) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook.
  - **[CreateMessageAsync(IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(IList_Embed_) 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[DeleteAsync()](Webhook.DeleteAsync() 'Guilded.Base.Servers.Webhook.DeleteAsync()')** `Method`
    Deletes the webhook.
  - **[UpdateAsync(string)](Webhook.UpdateAsync(string) 'Guilded.Base.Servers.Webhook.UpdateAsync(string)')** `Method`
    Edits the webhook.
- **[ChannelType](ChannelType 'Guilded.Base.Servers.ChannelType')** `Enum`
  Represents the type of content that [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') serves.
  - **[Announcements](ChannelType#Guilded.Base.Servers.ChannelType.Announcements 'Guilded.Base.Servers.ChannelType.Announcements')** `Field`
    Announcement posts containing news and new information.
  - **[Calendar](ChannelType#Guilded.Base.Servers.ChannelType.Calendar 'Guilded.Base.Servers.ChannelType.Calendar')** `Field`
    Events in calendar system.
  - **[Chat](ChannelType#Guilded.Base.Servers.ChannelType.Chat 'Guilded.Base.Servers.ChannelType.Chat')** `Field`
    Chat with messages and threaded messages.
  - **[Docs](ChannelType#Guilded.Base.Servers.ChannelType.Docs 'Guilded.Base.Servers.ChannelType.Docs')** `Field`
    Documents containing any information.
  - **[Forums](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums')** `Field`
    Traditional forum threads with replies in them.
  - **[List](ChannelType#Guilded.Base.Servers.ChannelType.List 'Guilded.Base.Servers.ChannelType.List')** `Field`
    A list of completable tasks.
  - **[Media](ChannelType#Guilded.Base.Servers.ChannelType.Media 'Guilded.Base.Servers.ChannelType.Media')** `Field`
    Posts containing images and videos.
  - **[Scheduling](ChannelType#Guilded.Base.Servers.ChannelType.Scheduling 'Guilded.Base.Servers.ChannelType.Scheduling')** `Field`
    People's availability time.
  - **[Stream](ChannelType#Guilded.Base.Servers.ChannelType.Stream 'Guilded.Base.Servers.ChannelType.Stream')** `Field`
    A [voice channel](ChannelType#Guilded.Base.Servers.ChannelType.Voice 'Guilded.Base.Servers.ChannelType.Voice') without voice rooms and with screensharing and camera capibilities.
  - **[Voice](ChannelType#Guilded.Base.Servers.ChannelType.Voice 'Guilded.Base.Servers.ChannelType.Voice')** `Field`
    A normal [chat channel](ChannelType#Guilded.Base.Servers.ChannelType.Chat 'Guilded.Base.Servers.ChannelType.Chat') with voice chat capibilities.
- **[ServerType](ServerType 'Guilded.Base.Servers.ServerType')** `Enum`
  Gets the type of [the server](Server 'Guilded.Base.Servers.Server'). This does not affect anything about the server.
  - **[Clan](ServerType#Guilded.Base.Servers.ServerType.Clan 'Guilded.Base.Servers.ServerType.Clan')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is a small clan in a video game.
  - **[Community](ServerType#Guilded.Base.Servers.ServerType.Community 'Guilded.Base.Servers.ServerType.Community')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is any kind of gaming or non-gaming community for a game or anything else.
  - **[Friends](ServerType#Guilded.Base.Servers.ServerType.Friends 'Guilded.Base.Servers.ServerType.Friends')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is for a friends circle.
  - **[Guild](ServerType#Guilded.Base.Servers.ServerType.Guild 'Guilded.Base.Servers.ServerType.Guild')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is a big guild in a video game.
  - **[Organization](ServerType#Guilded.Base.Servers.ServerType.Organization 'Guilded.Base.Servers.ServerType.Organization')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is for some kind of organization.
  - **[Other](ServerType#Guilded.Base.Servers.ServerType.Other 'Guilded.Base.Servers.ServerType.Other')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is any other type of group.
  - **[Streaming](ServerType#Guilded.Base.Servers.ServerType.Streaming 'Guilded.Base.Servers.ServerType.Streaming')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is dedicated to live content or streaming.
  - **[Team](ServerType#Guilded.Base.Servers.ServerType.Team 'Guilded.Base.Servers.ServerType.Team')** `Field`
    [The server](Server 'Guilded.Base.Servers.Server') is for a team of a certain product or is gaming group.