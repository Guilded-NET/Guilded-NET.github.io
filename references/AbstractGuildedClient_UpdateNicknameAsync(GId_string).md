
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.UpdateNicknameAsync(GId, string) Method
Updates member's nickname.  
```csharp
public override System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.NET.Base.GId memberId, string nickname);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_memberId'></a>
`memberId` [GId](GId 'Guilded.NET.Base.GId')  
The identifier of the member to update
  
<a name='Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname'></a>
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
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When [nickname](AbstractGuildedClient_UpdateNicknameAsync(GId_string)#Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string).nickname') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null'), empty or full of whitespace
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When [nickname](AbstractGuildedClient_UpdateNicknameAsync(GId_string)#Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string).nickname') is above 32 characters
### Remarks
Changes given member's nickname to set [nickname](AbstractGuildedClient_UpdateNicknameAsync(GId_string)#Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string).nickname') parameter.
