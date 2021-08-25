
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Events](index#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.UpdateMessageAsync(object) Method
Updates the contents of the message.  
```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Chat.Message> UpdateMessageAsync(object content);
```

#### Parameters
<a name='Guilded_NET_Base_Events_MessageEvent_UpdateMessageAsync(object)_content'></a>
`content` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
The new content of the message in Markdown plain text
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Chat.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message edited

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the given content only consists of whitespace or is null
[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the contents of the message are above the message limit of 4000 characters
### Example
```csharp
await message.UpdateMessageAsync(result);  
```