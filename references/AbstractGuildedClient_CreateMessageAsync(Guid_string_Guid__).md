
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateMessageAsync(Guid, string, Guid[]) Method
Creates a message in a chat.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content, params System.Guid[] replyMessageIds);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The contents of the message in Markdown plain text
  
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_replyMessageIds'></a>
`replyMessageIds` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](AbstractGuildedClient_CreateMessageAsync(Guid_string_Guid__)#Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_content 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](AbstractGuildedClient_CreateMessageAsync(Guid_string_Guid__)#Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_content 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') is above the message limit of 4000 characters
### Remarks
Creates a new message with [content](AbstractGuildedClient_CreateMessageAsync(Guid_string_Guid__)#Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_string_System_Guid__)_content 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') formatted in Markdown.
