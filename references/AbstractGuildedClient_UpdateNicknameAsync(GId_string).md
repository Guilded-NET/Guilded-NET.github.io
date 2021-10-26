
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.UpdateNicknameAsync(GId, string) Method

Updates the member's nickname.
```csharp
public override System.Threading.Tasks.Task<string> UpdateNicknameAsync(Guilded.NET.Base.GId memberId, string nickname);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_memberId'></a>
`memberId` [GId](https://guilded-net.github.io/references/GId 'Guilded.NET.Base.GId')

The identifier of the member to update

<a name='Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname'></a>
`nickname` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new nickname of the member


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Nickname


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](https://guilded-net.github.io/references/GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Changes the specified member's nickname. New nickname will be set as [nickname](AbstractGuildedClient_UpdateNicknameAsync(GId_string)#Guilded_NET_AbstractGuildedClient_UpdateNicknameAsync(Guilded_NET_Base_GId_string)_nickname 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string).nickname') parameter.