#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base.md#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent.md 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.UpdateMessageAsync(string) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(string content);
```
#### Parameters
<a name='Guilded_NET_Base_Events_MessageEvent_UpdateMessageAsync(string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The new content of the message in Markdown plain text
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the given content only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the contents of the message are above the message limit of 4000 characters
### Example
```csharp
await message.UpdateMessageAsync("Edited message");  
```
