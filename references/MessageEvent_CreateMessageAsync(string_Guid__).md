
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.CreateMessageAsync(string, Guid[]) Method

Creates a message in a chat.
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(string content, params System.Guid[] replyMessageIds);
```

#### Parameters

<a name='Guilded_NET_Base_Events_MessageEvent_CreateMessageAsync(string_System_Guid__)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text

<a name='Guilded_NET_Base_Events_MessageEvent_CreateMessageAsync(string_System_Guid__)_replyMessageIds'></a>
`replyMessageIds` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')


#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent_CreateMessageAsync(string_Guid__)#Guilded_NET_Base_Events_MessageEvent_CreateMessageAsync(string_System_Guid__)_content 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, System.Guid[]).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](MessageEvent_CreateMessageAsync(string_Guid__)#Guilded_NET_Base_Events_MessageEvent_CreateMessageAsync(string_System_Guid__)_content 'Guilded.NET.Base.Events.MessageEvent.CreateMessageAsync(string, System.Guid[]).content') is above the message limit of 4000 characters

### Remarks
  
Creates a new message in the channel of identifier [ChannelId](ChannelContent_T__ChannelId 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;.ChannelId') where the message is.  
  
This does not automatically include the message in the reply list.