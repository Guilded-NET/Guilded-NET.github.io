
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.GetMessagesAsync(Guid, uint) Method
Gets messages with a specific limit.  
```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Content.Message>> GetMessagesAsync(System.Guid channelId, uint limit=50u);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_GetMessagesAsync(System_Guid_uint)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_GetMessagesAsync(System_Guid_uint)_limit'></a>
`limit` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
How many messages it should get
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of messages

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Gets a list of messages in a specified channel of identifier [channelId](AbstractGuildedClient_GetMessagesAsync(Guid_uint)#Guilded_NET_AbstractGuildedClient_GetMessagesAsync(System_Guid_uint)_channelId 'Guilded.NET.AbstractGuildedClient.GetMessagesAsync(System.Guid, uint).channelId').
