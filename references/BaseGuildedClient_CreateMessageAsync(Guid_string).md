
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateMessageAsync(Guid, string) Method

Creates a message in the chat.
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient_CreateMessageAsync(Guid_string)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string)_content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient_CreateMessageAsync(Guid_string)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string)_content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') is above the message limit of 4000 characters

### Remarks
  
Creates a new chat messsage in the specified channel.  
  
The [content](BaseGuildedClient_CreateMessageAsync(Guid_string)#Guilded_NET_Base_BaseGuildedClient_CreateMessageAsync(System_Guid_string)_content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') will be formatted in Markdown.