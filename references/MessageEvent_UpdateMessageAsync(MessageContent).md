#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base.md#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent.md 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.UpdateMessageAsync(MessageContent) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(Guilded.NET.Base.Chat.MessageContent content);
```
#### Parameters
<a name='Guilded_NET_Base_Events_MessageEvent_UpdateMessageAsync(Guilded_NET_Base_Chat_MessageContent)_content'></a>
`content` [MessageContent](MessageContent.md 'Guilded.NET.Base.Chat.MessageContent')  
The new content of the message in rich text markup
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.UpdateMessageAsync(new MessageContent("Edited message"));  
```
