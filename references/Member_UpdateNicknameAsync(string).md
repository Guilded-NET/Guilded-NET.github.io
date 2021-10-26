
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Teams](Guilded_NET_Base#Guilded_NET_Base_Teams 'Guilded.NET.Base.Teams').[Member](Member 'Guilded.NET.Base.Teams.Member')
## Member.UpdateNicknameAsync(string) Method

Updates the member's nickname.
```csharp
public System.Threading.Tasks.Task<string> UpdateNicknameAsync(string nickname);
```

#### Parameters

<a name='Guilded_NET_Base_Teams_Member_UpdateNicknameAsync(string)_nickname'></a>
`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new nickname of the member


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Nickname


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Changes the specified member's nickname. New nickname will be set as [nickname](Member_UpdateNicknameAsync(string)#Guilded_NET_Base_Teams_Member_UpdateNicknameAsync(string)_nickname 'Guilded.NET.Base.Teams.Member.UpdateNicknameAsync(string).nickname') parameter.