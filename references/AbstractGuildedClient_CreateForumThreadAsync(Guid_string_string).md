
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateForumThreadAsync(Guid, string, string) Method

Creates a thread in forums.
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ForumThread> CreateForumThreadAsync(System.Guid channelId, string title, string content);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_CreateForumThreadAsync(System_Guid_string_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded_NET_AbstractGuildedClient_CreateForumThreadAsync(System_Guid_string_string)_title'></a>
`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the forum post

<a name='Guilded_NET_AbstractGuildedClient_CreateForumThreadAsync(System_Guid_string_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content of the forum post


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ForumThread](https://guilded-net.github.io/references/ForumThread 'Guilded.NET.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Forum thread created


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

### Remarks
  
Creates a forum thread/post in forums.