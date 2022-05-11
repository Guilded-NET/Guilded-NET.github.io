---
title: GetSocialLinkAsync(HashId, SocialLinkType)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the specified member social link based on given [linkType](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType)#Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType')."
---

## UserSummary.GetSocialLinkAsync(HashId, SocialLinkType) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`UserSummary`](UserSummary 'Guilded.Base.Users.UserSummary')

Gets the specified member social link based on given [linkType](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType)#Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.Base.HashId server, Guilded.Base.Users.SocialLinkType linkType);
```

### Remarks
  
This does not require any permissions to be given.
#### Parameters

<a name='Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The server where to fetch user's information

<a name='Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType'></a>

`linkType` [SocialLinkType](SocialLinkType 'Guilded.Base.Users.SocialLinkType')

The social link to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[SocialLink](SocialLink 'Guilded.Base.Users.SocialLink')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[Social Link](SocialLink 'Guilded.Base.Users.SocialLink')