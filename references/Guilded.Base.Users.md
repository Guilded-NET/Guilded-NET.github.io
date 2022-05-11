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
- **[Me](Me 'Guilded.Base.Users.Me')** `Class`
  Represents the currently logged in user.
  - **[Me(HashId, Guid, string, DateTime, HashId)](Me.Me(HashId,Guid,string,DateTime,HashId) 'Guilded.Base.Users.Me.Me(Guilded.Base.HashId, Guid, string, System.DateTime, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [Me](Me 'Guilded.Base.Users.Me') from the specified JSON properties.
  - **[BotId](Me.BotId 'Guilded.Base.Users.Me.BotId')** `Property`
    Gets the identifier of the bot [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into.
  - **[CreatedAt](Me.CreatedAt 'Guilded.Base.Users.Me.CreatedAt')** `Property`
    Gets the creation date of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').
  - **[CreatedBy](Me.CreatedBy 'Guilded.Base.Users.Me.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').
  - **[Id](Me.Id 'Guilded.Base.Users.Me.Id')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User')[this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') is logged into.
  - **[Name](Me.Name 'Guilded.Base.Users.Me.Name')** `Property`
    Gets the name of [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').
- **[SocialLink](SocialLink 'Guilded.Base.Users.SocialLink')** `Class`
  Represents a social media link of a [user](User 'Guilded.Base.Users.User').
  - **[SocialLink(SocialLinkType, string, string)](SocialLink.SocialLink(SocialLinkType,string,string) 'Guilded.Base.Users.SocialLink.SocialLink(Guilded.Base.Users.SocialLinkType, string, string)')** `Constructor`
    Initializes a new instance of [SocialLink](SocialLink 'Guilded.Base.Users.SocialLink') from the specified JSON properties.
  - **[Handle](SocialLink.Handle 'Guilded.Base.Users.SocialLink.Handle')** `Property`
    Gets the name, unique identifier or unique tag of the [user](User 'Guilded.Base.Users.User') in this social link.
  - **[ServiceId](SocialLink.ServiceId 'Guilded.Base.Users.SocialLink.ServiceId')** `Property`
    Gets the unique identifier of the [user](User 'Guilded.Base.Users.User') in this social link.
  - **[Type](SocialLink.Type 'Guilded.Base.Users.SocialLink.Type')** `Property`
    Gets the type of social link it is.
- **[User](User 'Guilded.Base.Users.User')** `Class`
  Represents the extended information about a user.
  - **[User(HashId, string, DateTime, Uri, Uri, UserType)](User.User(HashId,string,DateTime,Uri,Uri,UserType) 'Guilded.Base.Users.User.User(Guilded.Base.HashId, string, System.DateTime, Uri, Uri, Guilded.Base.Users.UserType)')** `Constructor`
    Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') from the specified JSON properties.
  - **[Banner](User.Banner 'Guilded.Base.Users.User.Banner')** `Property`
    Gets the global banner of [the user](User 'Guilded.Base.Users.User').
  - **[CreatedAt](User.CreatedAt 'Guilded.Base.Users.User.CreatedAt')** `Property`
    Gets the date when [the user](User 'Guilded.Base.Users.User') has registered their account.
- **[UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')** `Class`
  Global minimal information about a user.
  - **[UserSummary(HashId, string, Uri, UserType)](UserSummary.UserSummary(HashId,string,Uri,UserType) 'Guilded.Base.Users.UserSummary.UserSummary(Guilded.Base.HashId, string, Uri, Guilded.Base.Users.UserType)')** `Constructor`
    Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') with specified properties.
  - **[Avatar](UserSummary.Avatar 'Guilded.Base.Users.UserSummary.Avatar')** `Property`
    Gets the global avatar of [the user](User 'Guilded.Base.Users.User').
  - **[Id](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User').
  - **[IsBot](UserSummary.IsBot 'Guilded.Base.Users.UserSummary.IsBot')** `Property`
    Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[Name](UserSummary.Name 'Guilded.Base.Users.UserSummary.Name')** `Property`
    Gets the global username of [the user](User 'Guilded.Base.Users.User').
  - **[Type](UserSummary.Type 'Guilded.Base.Users.UserSummary.Type')** `Property`
    Gets the type of [the user](User 'Guilded.Base.Users.User') they are.
  - **[AddRoleAsync(HashId, uint)](UserSummary.AddRoleAsync(HashId,uint) 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint)')** `Method`
    Adds a role to [the user](User 'Guilded.Base.Users.User').
  - **[AddXpAsync(HashId, short)](UserSummary.AddXpAsync(HashId,short) 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short)')** `Method`
    Gives amount to the specified member.
  - **[BanAsync(HashId, string)](UserSummary.BanAsync(HashId,string) 'Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId, string)')** `Method`
    Bans the member.
  - **[DeleteNicknameAsync(HashId)](UserSummary.DeleteNicknameAsync(HashId) 'Guilded.Base.Users.UserSummary.DeleteNicknameAsync(Guilded.Base.HashId)')** `Method`
    Deletes the message.
  - **[GetBanAsync(HashId)](UserSummary.GetBanAsync(HashId) 'Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId)')** `Method`
    Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member.
  - **[GetSocialLinkAsync(HashId, SocialLinkType)](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType) 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)')** `Method`
    Gets the specified member social link based on given linkType.
  - **[KickAsync(HashId)](UserSummary.KickAsync(HashId) 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId)')** `Method`
    Removes the member from the server.
  - **[RemoveRoleAsync(HashId, uint)](UserSummary.RemoveRoleAsync(HashId,uint) 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint)')** `Method`
    Removes role from [the user](User 'Guilded.Base.Users.User').
  - **[ToString()](UserSummary.ToString() 'Guilded.Base.Users.UserSummary.ToString()')** `Method`
    Returns the string representation of this [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') instance.
  - **[UnbanAsync(HashId)](UserSummary.UnbanAsync(HashId) 'Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId)')** `Method`
    Unbans the member.
  - **[UpdateNicknameAsync(HashId, string)](UserSummary.UpdateNicknameAsync(HashId,string) 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string)')** `Method`
    Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member.
- **[SocialLinkType](SocialLinkType 'Guilded.Base.Users.SocialLinkType')** `Enum`
  Represents the type of a [social link](SocialLink 'Guilded.Base.Users.SocialLink').
  - **[Bnet](SocialLinkType#Guilded.Base.Users.SocialLinkType.Bnet 'Guilded.Base.Users.SocialLinkType.Bnet')** `Field`
    User's Battle.NET launcher profile socials.
  - **[Facebook](SocialLinkType#Guilded.Base.Users.SocialLinkType.Facebook 'Guilded.Base.Users.SocialLinkType.Facebook')** `Field`
    User's Facebook social media platform socials.
  - **[Origin](SocialLinkType#Guilded.Base.Users.SocialLinkType.Origin 'Guilded.Base.Users.SocialLinkType.Origin')** `Field`
    User's Origin profile socials.
  - **[Patreon](SocialLinkType#Guilded.Base.Users.SocialLinkType.Patreon 'Guilded.Base.Users.SocialLinkType.Patreon')** `Field`
    User's Patreon profile socials.
  - **[Psn](SocialLinkType#Guilded.Base.Users.SocialLinkType.Psn 'Guilded.Base.Users.SocialLinkType.Psn')** `Field`
    User's PlayStation Network profile socials.
  - **[Roblox](SocialLinkType#Guilded.Base.Users.SocialLinkType.Roblox 'Guilded.Base.Users.SocialLinkType.Roblox')** `Field`
    User's Roblox profile socials.
  - **[Steam](SocialLinkType#Guilded.Base.Users.SocialLinkType.Steam 'Guilded.Base.Users.SocialLinkType.Steam')** `Field`
    User's Steam game store profile socials.
  - **[Switch](SocialLinkType#Guilded.Base.Users.SocialLinkType.Switch 'Guilded.Base.Users.SocialLinkType.Switch')** `Field`
    User's Nintendo Switch profile socials.
  - **[Twitch](SocialLinkType#Guilded.Base.Users.SocialLinkType.Twitch 'Guilded.Base.Users.SocialLinkType.Twitch')** `Field`
    User's Twitch streaming platform socials.
  - **[Twitter](SocialLinkType#Guilded.Base.Users.SocialLinkType.Twitter 'Guilded.Base.Users.SocialLinkType.Twitter')** `Field`
    User's Twitter social media platform socials.
  - **[Xbox](SocialLinkType#Guilded.Base.Users.SocialLinkType.Xbox 'Guilded.Base.Users.SocialLinkType.Xbox')** `Field`
    User's XBOX One profile socials.
  - **[YouTube](SocialLinkType#Guilded.Base.Users.SocialLinkType.YouTube 'Guilded.Base.Users.SocialLinkType.YouTube')** `Field`
    User's YouTube video sharing platform socials.
- **[UserType](UserType 'Guilded.Base.Users.UserType')** `Enum`
  Represents the type of user someone is.
  - **[Bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot')** `Field`
    [The user](User 'Guilded.Base.Users.User') is an API bot.
  - **[User](UserType#Guilded.Base.Users.UserType.User 'Guilded.Base.Users.UserType.User')** `Field`
    [The user](User 'Guilded.Base.Users.User') is a normal user.