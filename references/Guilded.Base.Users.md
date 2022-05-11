---
title: Guilded.Base.Users
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Users Namespace
- **[Me](Me.md 'Guilded.Base.Users.Me')** `Class`
  Represents the currently logged in user.
  - **[Me(HashId, Guid, string, DateTime, HashId)](Me.Me(HashId,Guid,string,DateTime,HashId).md 'Guilded.Base.Users.Me.Me(Guilded.Base.HashId, Guid, string, System.DateTime, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [Me](Me.md 'Guilded.Base.Users.Me') from the specified JSON properties.
  - **[BotId](Me.BotId.md 'Guilded.Base.Users.Me.BotId')** `Property`
    Gets the identifier of the bot [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient') is logged into.
  - **[CreatedAt](Me.CreatedAt.md 'Guilded.Base.Users.Me.CreatedAt')** `Property`
    Gets the creation date of [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient').
  - **[CreatedBy](Me.CreatedBy.md 'Guilded.Base.Users.Me.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient').
  - **[Id](Me.Id.md 'Guilded.Base.Users.Me.Id')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User')[this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient') is logged into.
  - **[Name](Me.Name.md 'Guilded.Base.Users.Me.Name')** `Property`
    Gets the name of [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient').
- **[SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink')** `Class`
  Represents a social media link of a [user](User.md 'Guilded.Base.Users.User').
  - **[SocialLink(SocialLinkType, string, string)](SocialLink.SocialLink(SocialLinkType,string,string).md 'Guilded.Base.Users.SocialLink.SocialLink(Guilded.Base.Users.SocialLinkType, string, string)')** `Constructor`
    Initializes a new instance of [SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink') from the specified JSON properties.
  - **[Handle](SocialLink.Handle.md 'Guilded.Base.Users.SocialLink.Handle')** `Property`
    Gets the name, unique identifier or unique tag of the [user](User.md 'Guilded.Base.Users.User') in this social link.
  - **[ServiceId](SocialLink.ServiceId.md 'Guilded.Base.Users.SocialLink.ServiceId')** `Property`
    Gets the unique identifier of the [user](User.md 'Guilded.Base.Users.User') in this social link.
  - **[Type](SocialLink.Type.md 'Guilded.Base.Users.SocialLink.Type')** `Property`
    Gets the type of social link it is.
- **[User](User.md 'Guilded.Base.Users.User')** `Class`
  Represents the extended information about a user.
  - **[User(HashId, UserType, string, DateTime)](User.User(HashId,UserType,string,DateTime).md 'Guilded.Base.Users.User.User(Guilded.Base.HashId, Guilded.Base.Users.UserType, string, System.DateTime)')** `Constructor`
    Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') from the specified JSON properties.
  - **[CreatedAt](User.CreatedAt.md 'Guilded.Base.Users.User.CreatedAt')** `Property`
    Gets the date when the user has registered their account.
- **[UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary')** `Class`
  Global minimal information about a user.
  - **[UserSummary(HashId, Nullable&lt;UserType&gt;, string)](UserSummary.UserSummary(HashId,Nullable_UserType_,string).md 'Guilded.Base.Users.UserSummary.UserSummary(Guilded.Base.HashId, System.Nullable<Guilded.Base.Users.UserType>, string)')** `Constructor`
    Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') with specified properties.
  - **[Id](UserSummary.Id.md 'Guilded.Base.Users.UserSummary.Id')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User').
  - **[IsBot](UserSummary.IsBot.md 'Guilded.Base.Users.UserSummary.IsBot')** `Property`
    Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[Name](UserSummary.Name.md 'Guilded.Base.Users.UserSummary.Name')** `Property`
    Gets the global username of the user.
  - **[Type](UserSummary.Type.md 'Guilded.Base.Users.UserSummary.Type')** `Property`
    Gets the type of the user they are.
  - **[AddRoleAsync(HashId, uint)](UserSummary.AddRoleAsync(HashId,uint).md 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint)')** `Method`
    Adds a role to the user.
  - **[AddXpAsync(HashId, short)](UserSummary.AddXpAsync(HashId,short).md 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short)')** `Method`
    Gives amount to the specified member.
  - **[BanAsync(HashId, string)](UserSummary.BanAsync(HashId,string).md 'Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId, string)')** `Method`
    Bans the specified member.
  - **[DeleteNicknameAsync(HashId)](UserSummary.DeleteNicknameAsync(HashId).md 'Guilded.Base.Users.UserSummary.DeleteNicknameAsync(Guilded.Base.HashId)')** `Method`
    Deletes a message from a channel.
  - **[GetBanAsync(HashId)](UserSummary.GetBanAsync(HashId).md 'Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId)')** `Method`
    Gets the information about the ban of the member.
  - **[GetSocialLinkAsync(HashId, SocialLinkType)](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType).md 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[KickAsync(HashId)](UserSummary.KickAsync(HashId).md 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId)')** `Method`
    Removes the specified member from the server.
  - **[RemoveRoleAsync(HashId, uint)](UserSummary.RemoveRoleAsync(HashId,uint).md 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint)')** `Method`
    Removes a role from the user.
  - **[ToString()](UserSummary.ToString().md 'Guilded.Base.Users.UserSummary.ToString()')** `Method`
    Returns the string representation of this [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') instance.
  - **[UnbanAsync(HashId)](UserSummary.UnbanAsync(HashId).md 'Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId)')** `Method`
    Unbans the specified member.
  - **[UpdateNicknameAsync(HashId, string)](UserSummary.UpdateNicknameAsync(HashId,string).md 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string)')** `Method`
    Changes the nickname of the specified member in the server.
- **[SocialLinkType](SocialLinkType.md 'Guilded.Base.Users.SocialLinkType')** `Enum`
  Represents the type of a [social link](SocialLink.md 'Guilded.Base.Users.SocialLink').
  - **[Bnet](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Bnet 'Guilded.Base.Users.SocialLinkType.Bnet')** `Field`
    User's Battle.NET launcher profile socials.
  - **[Facebook](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Facebook 'Guilded.Base.Users.SocialLinkType.Facebook')** `Field`
    User's Facebook social media platform socials.
  - **[Origin](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Origin 'Guilded.Base.Users.SocialLinkType.Origin')** `Field`
    User's Origin profile socials.
  - **[Patreon](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Patreon 'Guilded.Base.Users.SocialLinkType.Patreon')** `Field`
    User's Patreon profile socials.
  - **[Psn](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Psn 'Guilded.Base.Users.SocialLinkType.Psn')** `Field`
    User's PlayStation Network profile socials.
  - **[Roblox](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Roblox 'Guilded.Base.Users.SocialLinkType.Roblox')** `Field`
    User's Roblox profile socials.
  - **[Steam](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Steam 'Guilded.Base.Users.SocialLinkType.Steam')** `Field`
    User's Steam game store profile socials.
  - **[Switch](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Switch 'Guilded.Base.Users.SocialLinkType.Switch')** `Field`
    User's Nintendo Switch profile socials.
  - **[Twitch](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Twitch 'Guilded.Base.Users.SocialLinkType.Twitch')** `Field`
    User's Twitch streaming platform socials.
  - **[Twitter](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Twitter 'Guilded.Base.Users.SocialLinkType.Twitter')** `Field`
    User's Twitter social media platform socials.
  - **[Xbox](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.Xbox 'Guilded.Base.Users.SocialLinkType.Xbox')** `Field`
    User's XBOX One profile socials.
  - **[YouTube](SocialLinkType.md#Guilded.Base.Users.SocialLinkType.YouTube 'Guilded.Base.Users.SocialLinkType.YouTube')** `Field`
    User's YouTube video sharing platform socials.
- **[UserType](UserType.md 'Guilded.Base.Users.UserType')** `Enum`
  Represents the type of user someone is.
  - **[Bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot')** `Field`
    The user is an API bot.
  - **[User](UserType.md#Guilded.Base.Users.UserType.User 'Guilded.Base.Users.UserType.User')** `Field`
    The user is a normal user.