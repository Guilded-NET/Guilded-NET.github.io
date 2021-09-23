
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.DeleteMessageAsync(Guid, Guid) Method
Deletes a specified message.  
```csharp
public override System.Threading.Tasks.Task DeleteMessageAsync(System.Guid channelId, System.Guid messageId);
```

#### Parameters
<a name='Guilded_NET_AbstractGuildedClient_DeleteMessageAsync(System_Guid_System_Guid)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_AbstractGuildedClient_DeleteMessageAsync(System_Guid_System_Guid)_messageId'></a>
`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the message to delete
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Removes the message of identifier [messageId](AbstractGuildedClient_DeleteMessageAsync(Guid_Guid)#Guilded_NET_AbstractGuildedClient_DeleteMessageAsync(System_Guid_System_Guid)_messageId 'Guilded.NET.AbstractGuildedClient.DeleteMessageAsync(System.Guid, System.Guid).messageId'), whether it be from the client or  
another user.
