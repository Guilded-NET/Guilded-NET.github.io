#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Events](Guilded_NET_Base.md#Guilded_NET_Base_Events 'Guilded.NET.Base.Events').[MessageEvent](MessageEvent.md 'Guilded.NET.Base.Events.MessageEvent')
## MessageEvent.DeleteMessageAsync() Method
Deletes this message.  
```csharp
public System.Threading.Tasks.Task DeleteMessageAsync();
```
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
```csharp
await message.DeleteMessageAsync();  
```
