
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateForumThreadAsync(Guid, string, IFormatProvider, string, object[]) Method
Creates a forum post in a forum channel.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.ForumThread> CreateForumThreadAsync(System.Guid channelId, string title, System.IFormatProvider provider, string format, params object[] args);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_CreateForumThreadAsync(System_Guid_string_System_IFormatProvider_string_object__)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateForumThreadAsync(System_Guid_string_System_IFormatProvider_string_object__)_title'></a>
`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The title of the forum post
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateForumThreadAsync(System_Guid_string_System_IFormatProvider_string_object__)_provider'></a>
`provider` [System.IFormatProvider](https://docs.microsoft.com/en-us/dotnet/api/System.IFormatProvider 'System.IFormatProvider')  
The provider that gives the format string information about the culture
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateForumThreadAsync(System_Guid_string_System_IFormatProvider_string_object__)_format'></a>
`format` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The composite format string
  
<a name='Guilded_NET_Base_BaseGuildedClient_CreateForumThreadAsync(System_Guid_string_System_IFormatProvider_string_object__)_args'></a>
`args` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
The arguments of the format string
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Forum post created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await client.CreateForumThreadAsync(channelId, "Daily post #1", cultureInfo, "The current date: {0}.", DateTime.Now);  
```
