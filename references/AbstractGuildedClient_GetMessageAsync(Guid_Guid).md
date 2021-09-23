
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.GetMessageAsync(Guid, Guid) Method
Gets a message in a specific channel.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> GetMessageAsync(System.Guid channelId, System.Guid messageId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_GetMessageAsync(System_Guid_System_Guid)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_GetMessageAsync(System_Guid_System_Guid)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of message it should get
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Gets a specified message with an identifier [messageId](AbstractGuildedClient_GetMessageAsync(Guid_Guid)#Guilded_NET_AbstractGuildedClient_GetMessageAsync(System_Guid_System_Guid)_messageId 'Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid, System.Guid).messageId').
