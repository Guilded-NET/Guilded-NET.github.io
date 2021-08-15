#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.CreateForumThreadAsync(Guid, string, string) Method
Creates a forum post in a forum channel.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ForumThread> CreateForumThreadAsync(System.Guid channelId, string title, string content);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_CreateForumThreadAsync(System_Guid_string_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateForumThreadAsync(System_Guid_string_string)_title'></a>
`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The title of the forum post
  
<a name='Guilded_NET_GuildedClient_CreateForumThreadAsync(System_Guid_string_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The content of the forum post
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Content.ForumThread](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Content.ForumThread 'Guilded.NET.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Forum post created
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.CreateForumThreadAsync(channelId, "Daily post #1", "The first daily post ever!");  
```
