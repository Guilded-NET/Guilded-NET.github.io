
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.UpdateMessageAsync(Guid, Guid, MessageContent) Method
Updates the contents of the message.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> UpdateMessageAsync(System.Guid channelId, System.Guid messageId, Guilded.NET.Base.Chat.MessageContent content);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to edit
  
<a name='Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The new content of the message in rich text markup
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message updated

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Edits the message [messageId](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_MessageContent)#Guilded_NET_AbstractGuildedClient_UpdateMessageAsync(System_Guid_System_Guid_Guilded_NET_Base_Chat_MessageContent)_messageId 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, Guilded.NET.Base.Chat.MessageContent).messageId') if the specified message is from  
the client. This does not work if the client is not the creator of the message.

<blockquote class="warning">  
    Rich text markup will be removed from use eventually and only be used internally  
    in Guilded API  
</blockquote>
