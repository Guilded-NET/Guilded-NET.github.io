#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[Message](Message.md 'Guilded.NET.Base.Chat.Message')
## Message.RemoveReactionAsync(uint) Method
Removes a reaction from this message.  
```csharp
public System.Threading.Tasks.Task RemoveReactionAsync(uint emoteId);
```
#### Parameters
<a name='Guilded_NET_Base_Chat_Message_RemoveReactionAsync(uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
ID of the emote to remove
  
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.RemoveReactionAsync(90002569);  
```
