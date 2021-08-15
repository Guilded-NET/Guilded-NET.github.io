
#### [Guilded.NET](index 'index')
### [Guilded.NET](index#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient 'Guilded.NET.GuildedClient')
## GuildedClient.CreateListItemAsync(Guid, MessageContent, MessageContent) Method
Creates a new list item in a list channel.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ListItem> CreateListItemAsync(System.Guid channelId, Guilded.NET.Base.Chat.MessageContent message, Guilded.NET.Base.Chat.MessageContent note=null);
```

#### Parameters
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_message'></a>
`message` [Guilded.NET.Base.Chat.MessageContent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
The title content of this list item
  
<a name='Guilded_NET_GuildedClient_CreateListItemAsync(System_Guid_Guilded_NET_Base_Chat_MessageContent_Guilded_NET_Base_Chat_MessageContent)_note'></a>
`note` [Guilded.NET.Base.Chat.MessageContent](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Chat.MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
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
  
            await client.CreateListItemAsync(channelId, new MessageContent("Reach {0} servers", count));  
            ```


With a note:

```csharp
  
            await client.CreateListItemAsync(channelId,  
                new MessageContent("Reach {0} servers", count),  
                new MessageContent("Reach {0} servers with a bot", count)  
            );  
            ```
