---
title: GetSocialLinkAsync(HashId, HashId, SocialLinkType)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the specified [member](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md#Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).member 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).member') social link based on given [linkType](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md#Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType')."
---

## AbstractGuildedClient.GetSocialLinkAsync(HashId, HashId, SocialLinkType) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the specified [member](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md#Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).member 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).member') social link based on given [linkType](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType).md#Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.Base.HashId server, Guilded.Base.HashId member, Guilded.Base.Users.SocialLinkType linkType);
```

### Remarks
  
This does not require any permissions to be given.
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).server'></a>

`server` [HashId](HashId.md 'Guilded.Base.HashId')

The server where to fetch user's information

<a name='Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).member'></a>

`member` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of [user](User.md 'Guilded.Base.Users.User')

<a name='Guilded.AbstractGuildedClient.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType'></a>

`linkType` [SocialLinkType](SocialLinkType.md 'Guilded.Base.Users.SocialLinkType')

The social link to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[Social Link](SocialLink.md 'Guilded.Base.Users.SocialLink')