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
- **[Member](Member.md 'Guilded.Base.Servers.Member')** `Class`
  A server member.
  - **[Member(User, IList&lt;uint&gt;, string, DateTime)](Member.Member(User,IList_uint_,string,DateTime).md 'Guilded.Base.Servers.Member.Member(Guilded.Base.Users.User, System.Collections.Generic.IList<uint>, string, System.DateTime)')** `Constructor`
    Initializes a new instance of [Member](Member.md 'Guilded.Base.Servers.Member').
  - **[JoinedAt](Member.JoinedAt.md 'Guilded.Base.Servers.Member.JoinedAt')** `Property`
    Gets the date of when the member joined.
  - **[Nickname](Member.Nickname.md 'Guilded.Base.Servers.Member.Nickname')** `Property`
    Gets the set nickname of the user in the server.
- **[MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')** `Class`
  Represents the information of [user's](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') ban.
  - **[MemberBan(UserSummary, HashId, DateTime, string)](MemberBan.MemberBan(UserSummary,HashId,DateTime,string).md 'Guilded.Base.Servers.MemberBan.MemberBan(Guilded.Base.Users.UserSummary, Guilded.Base.HashId, System.DateTime, string)')** `Constructor`
    Initializes a new instance of [MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan') with the provided details.
  - **[CreatedAt](MemberBan.CreatedAt.md 'Guilded.Base.Servers.MemberBan.CreatedAt')** `Property`
    Gets the date of when the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') was banned
  - **[CreatedBy](MemberBan.CreatedBy.md 'Guilded.Base.Servers.MemberBan.CreatedBy')** `Property`
    Gets the identifier of the staff who banned.
  - **[Reason](MemberBan.Reason.md 'Guilded.Base.Servers.MemberBan.Reason')** `Property`
    Gets the reason why the [user](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified.
  - **[User](MemberBan.User.md 'Guilded.Base.Servers.MemberBan.User')** `Property`
    Gets the banned user.
- **[MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>')** `Class`
  Represents the summary about a member.
  - **[MemberSummary(T, IList&lt;uint&gt;)](MemberSummary_T_.MemberSummary(T,IList_uint_).md 'Guilded.Base.Servers.MemberSummary<T>.MemberSummary(T, System.Collections.Generic.IList<uint>)')** `Constructor`
    Initializes a new instance of [MemberSummary&lt;T&gt;](MemberSummary_T_.md 'Guilded.Base.Servers.MemberSummary<T>').
  - **[Id](MemberSummary_T_.Id.md 'Guilded.Base.Servers.MemberSummary<T>.Id')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User').
  - **[IsBot](MemberSummary_T_.IsBot.md 'Guilded.Base.Servers.MemberSummary<T>.IsBot')** `Property`
    Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[Name](MemberSummary_T_.Name.md 'Guilded.Base.Servers.MemberSummary<T>.Name')** `Property`
    Gets the global username of the user.
  - **[RoleIds](MemberSummary_T_.RoleIds.md 'Guilded.Base.Servers.MemberSummary<T>.RoleIds')** `Property`
    Gets the list of roles user holds.
  - **[Type](MemberSummary_T_.Type.md 'Guilded.Base.Servers.MemberSummary<T>.Type')** `Property`
    Gets the type of the user they are.
  - **[User](MemberSummary_T_.User.md 'Guilded.Base.Servers.MemberSummary<T>.User')** `Property`
    Gets the user they are.
- **[Webhook](Webhook.md 'Guilded.Base.Servers.Webhook')** `Class`
  A channel webhook.
  - **[Webhook(Guid, string, string, Guid, HashId, DateTime, HashId, Nullable&lt;DateTime&gt;)](Webhook.Webhook(Guid,string,string,Guid,HashId,DateTime,HashId,Nullable_DateTime_).md 'Guilded.Base.Servers.Webhook.Webhook(Guid, string, string, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.HashId, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [Webhook](Webhook.md 'Guilded.Base.Servers.Webhook') with the specified properties.
  - **[ChannelId](Webhook.ChannelId.md 'Guilded.Base.Servers.Webhook.ChannelId')** `Property`
    Gets the identifier of the channel where the webhook is.
  - **[CreatedAt](Webhook.CreatedAt.md 'Guilded.Base.Servers.Webhook.CreatedAt')** `Property`
    Gets the date when the webhook was created.
  - **[CreatedBy](Webhook.CreatedBy.md 'Guilded.Base.Servers.Webhook.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the webhook.
  - **[DeletedAt](Webhook.DeletedAt.md 'Guilded.Base.Servers.Webhook.DeletedAt')** `Property`
    Gets the date when the webhook was deleted.
  - **[Id](Webhook.Id.md 'Guilded.Base.Servers.Webhook.Id')** `Property`
    Gets the identifier of the webhook.
  - **[Name](Webhook.Name.md 'Guilded.Base.Servers.Webhook.Name')** `Property`
    Gets the name of the webhook.
  - **[ServerId](Webhook.ServerId.md 'Guilded.Base.Servers.Webhook.ServerId')** `Property`
    Gets the identifier of the server where the webhook is.
  - **[Token](Webhook.Token.md 'Guilded.Base.Servers.Webhook.Token')** `Property`
    Gets the token of the webhook.
  - **[CreateMessageAsync(MessageContent)](Webhook.CreateMessageAsync(MessageContent).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in a chat using a webhook.
  - **[CreateMessageAsync(Embed[])](Webhook.CreateMessageAsync(Embed[]).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[CreateMessageAsync(string, Embed[])](Webhook.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateMessageAsync(string, IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(string,IList_Embed_).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds and content in a chat using a webhook.
  - **[CreateMessageAsync(string)](Webhook.CreateMessageAsync(string).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(string)')** `Method`
    Creates a message with content containing only content in a chat using a webhook.
  - **[CreateMessageAsync(IList&lt;Embed&gt;)](Webhook.CreateMessageAsync(IList_Embed_).md 'Guilded.Base.Servers.Webhook.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates a message with content containing embeds in a chat using a webhook.
  - **[DeleteAsync()](Webhook.DeleteAsync().md 'Guilded.Base.Servers.Webhook.DeleteAsync()')** `Method`
    Deletes the specified webhook.
  - **[UpdateAsync(string)](Webhook.UpdateAsync(string).md 'Guilded.Base.Servers.Webhook.UpdateAsync(string)')** `Method`
    Updates the specified webhook in the specified server.