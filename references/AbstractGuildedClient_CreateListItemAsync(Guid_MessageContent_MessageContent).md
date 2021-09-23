
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateListItemAsync(Guid, MessageContent, MessageContent) Method
Creates a list item.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ListItem> CreateListItemAsync(System.Guid channelId, Guilded.NET.Base.Chat.MessageContent message, Guilded.NET.Base.Chat.MessageContent note=null);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_message'></a>
`message` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The title content of this list item
  
<a name='Guilded_NET_AbstractGuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_note'></a>
`note` [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The note of this list item
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List item created

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Creates a new list item in list/task channel.

<blockquote class="warning">  
    Rich text markup will be removed from use eventually and only be used internally  
    in Guilded API  
</blockquote>
