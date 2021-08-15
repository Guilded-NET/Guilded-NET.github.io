
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[Message](Message 'Guilded.NET.Base.Chat.Message')
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
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.RemoveReactionAsync(90002569);  
```
