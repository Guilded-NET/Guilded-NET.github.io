
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.UpdateMessageAsync(Guid, Guid, string) Method

Updates the message.
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, string content);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to edit

<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](https://guilded-net.github.io/references/Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message updated


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](https://guilded-net.github.io/references/GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](https://guilded-net.github.io/references/GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_string)#Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_string)#Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string).content') is above the message limit of 4000 characters

### Remarks
  
Edits the contents of the specified message.  
  
The [content](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_string)#Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_string)_content 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string).content') will be formatted in Markdown.