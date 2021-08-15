#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.CreateWebhookAsync(Guid, string) Method
Creates a webhook in a given channel.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Teams.Webhook> CreateWebhookAsync(System.Guid channelId, string name);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_CreateWebhookAsync(System_Guid_string)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_GuildedClient_CreateWebhookAsync(System_Guid_string)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The name of the webhook
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Teams.Webhook](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Teams.Webhook 'Guilded.NET.Base.Teams.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created webhook
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
