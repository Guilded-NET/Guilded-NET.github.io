---
title: GetSocialLinkAsync(HashId, HashId, SocialLinkType)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the specified user's social links.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, Guilded.NET.Base.Users.SocialLinkType linkType);
```"
---

## AbstractGuildedClient.GetSocialLinkAsync(HashId, HashId, SocialLinkType) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Gets the specified user's social links.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.NET.Base.HashId serverId, Guilded.NET.Base.HashId memberId, Guilded.NET.Base.Users.SocialLinkType linkType);
```

### Remarks
  
Gets the specified user's social link based on given [linkType](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType)#Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,Guilded.NET.Base.Users.SocialLinkType).linkType 'Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType).linkType').  
  
This does not require any permissions to be given, as it is not team-based.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,Guilded.NET.Base.Users.SocialLinkType).serverId'></a>

`serverId` [HashId](HashId 'Guilded.NET.Base.HashId')

The server where to fetch user's information

<a name='Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,Guilded.NET.Base.Users.SocialLinkType).memberId'></a>

`memberId` [HashId](HashId 'Guilded.NET.Base.HashId')

The identifier of the user

<a name='Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId,Guilded.NET.Base.HashId,Guilded.NET.Base.Users.SocialLinkType).linkType'></a>

`linkType` [SocialLinkType](SocialLinkType 'Guilded.NET.Base.Users.SocialLinkType')

The social link to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
User's social link