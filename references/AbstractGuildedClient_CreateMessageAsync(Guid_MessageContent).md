
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateMessageAsync(Guid, MessageContent) Method
Creates a message in a chat.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, Guilded.NET.Base.Chat.MessageContent content);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Creates a new message with [content](AbstractGuildedClient_CreateMessageAsync(Guid_MessageContent)#Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent)_content 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent).content').

<blockquote class="warning">  
    Rich text markup will be removed from use eventually and only be used internally  
    in Guilded API  
</blockquote>
