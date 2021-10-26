
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams').[Member](Member 'Guilded.NET.Base.Teams.Member')
## Member.GetSocialLinkAsync(SocialLinkType) Method

Gets the specified user's social links.
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Users.SocialLink> GetSocialLinkAsync(Guilded.NET.Base.Users.SocialLinkType linkType);
```

#### Parameters

<a name='Guilded_NET_Base_Teams_Member_GetSocialLinkAsync(Guilded_NET_Base_Users_SocialLinkType)_linkType'></a>
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
  
Gets the specified user's social link based on given [linkType](Member_GetSocialLinkAsync(SocialLinkType)#Guilded_NET_Base_Teams_Member_GetSocialLinkAsync(Guilded_NET_Base_Users_SocialLinkType)_linkType 'Guilded.NET.Base.Teams.Member.GetSocialLinkAsync(Guilded.NET.Base.Users.SocialLinkType).linkType').  
  
This does not require any permissions to be given, as it is not team-based.