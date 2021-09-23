
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateMessageAsync(Guid, MessageContent, Guid[]) Method
Creates a message in a chat.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, Guilded.NET.Base.Chat.MessageContent content, params System.Guid[] replyMessageIds);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_System_Guid__)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_System_Guid__)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  
<a name='Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_System_Guid__)_replyMessageIds'></a>
`replyMessageIds` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Creates a new message with [content](AbstractGuildedClient_CreateMessageAsync(Guid_MessageContent_Guid__)#Guilded_NET_AbstractGuildedClient_CreateMessageAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_System_Guid__)_content 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Chat.MessageContent, System.Guid[]).content').

<blockquote class="warning">  
    Rich text markup will be removed from use eventually and only be used internally  
    in Guilded API  
</blockquote>
