
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.RemoveReactionAsync(uint) Method
Removes a reaction from a message.  
```csharp
public System.Threading.Tasks.Task RemoveReactionAsync(uint emoteId);
```

#### Parameters
<a name='Guilded_NET_Base_Events_MessageEvent_RemoveReactionAsync(uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
The identifier of the emote to remove
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')  
[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
### Remarks
Remove a reaction of identifier [emoteId](MessageEvent_RemoveReactionAsync(uint)#Guilded_NET_Base_Events_MessageEvent_RemoveReactionAsync(uint)_emoteId 'Guilded.NET.Base.Events.MessageEvent.RemoveReactionAsync(uint).emoteId') from the message.
