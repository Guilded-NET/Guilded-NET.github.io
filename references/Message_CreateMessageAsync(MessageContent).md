
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Content](Guilded_NET_Base#Guilded_NET_Base_Content 'Guilded.NET.Base.Content').[Message](Message 'Guilded.NET.Base.Content.Message')
## Message.CreateMessageAsync(MessageContent) Method
Creates a message in a chat.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(Guilded.NET.Base.Chat.MessageContent content);
```

#### Parameters
<a name='Guilded_NET_Base_Content_Message_CreateMessageAsync(Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The contents of the message in rich text markup
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Creates a new message in the channel of identifier [ChannelId](ChannelContent_T__ChannelId 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.ChannelId') where the message is.



This does not automatically include the message in the reply list.

<blockquote class="warning">  
    Rich text markup will be removed from use eventually and only be used internally  
    in Guilded API  
</blockquote>
