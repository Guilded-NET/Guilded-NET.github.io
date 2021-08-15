#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[Message](Message.md 'Guilded.NET.Base.Chat.Message')
## Message.AddReactionAsync(uint) Method
Add a reaction to this message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Reaction> AddReactionAsync(uint emoteId);
```
#### Parameters
<a name='Guilded_NET_Base_Chat_Message_AddReactionAsync(uint)_emoteId'></a>
`emoteId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
ID of the emote to add
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Reaction](Reaction.md 'Guilded.NET.Base.Reaction')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Reaction added
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.AddReactionAsync(90002569);  
```
