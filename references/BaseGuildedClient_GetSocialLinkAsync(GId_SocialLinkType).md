
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.GetSocialLinkAsync(GId, SocialLinkType) Method
Gets user's social links.  
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.NET.Base.GId userId, Guilded.NET.Base.Users.SocialLinkType linkType);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_GetSocialLinkAsync(Guilded_NET_Base_GId_Guilded_NET_Base_Users_SocialLinkType)_userId'></a>
`userId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the user
  
<a name='Guilded_NET_Base_BaseGuildedClient_GetSocialLinkAsync(Guilded_NET_Base_GId_Guilded_NET_Base_Users_SocialLinkType)_linkType'></a>
`linkType` [SocialLinkType](SocialLinkType 'Guilded.NET.Base.Users.SocialLinkType')  
The social link to get
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
User's social link

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Gets user's(from [userId](BaseGuildedClient_GetSocialLinkAsync(GId_SocialLinkType)#Guilded_NET_Base_BaseGuildedClient_GetSocialLinkAsync(Guilded_NET_Base_GId_Guilded_NET_Base_Users_SocialLinkType)_userId 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType).userId')) social link based on given [linkType](BaseGuildedClient_GetSocialLinkAsync(GId_SocialLinkType)#Guilded_NET_Base_BaseGuildedClient_GetSocialLinkAsync(Guilded_NET_Base_GId_Guilded_NET_Base_Users_SocialLinkType)_linkType 'Guilded.NET.Base.BaseGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType).linkType').



This does not require any permissions to be given, as it is not team-based.
