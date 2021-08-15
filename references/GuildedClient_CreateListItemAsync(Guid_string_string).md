#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.CreateListItemAsync(Guid, string, string) Method
Creates a new list item in a list channel.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ListItem> CreateListItemAsync(System.Guid channelId, string message, string note=null);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_string_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_string_string)_message'></a>
`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The title content of this list item
  
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_string_string)_note'></a>
`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The note of this list item
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Content.ListItem](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Content.ListItem 'Guilded.NET.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List item created
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
### Example
Without a note:

```csharp
  
            await client.CreateListItemAsync(channelId, "Reach 100 servers");  
            ```


With a note:

```csharp
  
            await client.CreateListItemAsync(channelId, "Reach 100 servers", "Reach 100 or more servers with a bot.");  
            ```
