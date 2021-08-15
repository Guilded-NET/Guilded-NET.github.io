#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.UpdateWebhookAsync(Guid, Guid, string, Uri) Method
Updates webhook's name or profile picture.  
```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Teams.Webhook> UpdateWebhookAsync(System.Guid channelId, System.Guid webhookId, string name=null, System.Uri avatar=null);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel    `
  
<a name='Guilded_NET_GuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the webhook to update
  
<a name='Guilded_NET_GuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The new name of the webhook
  
<a name='Guilded_NET_GuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_avatar'></a>
`avatar` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
The new profile picture/icon of the webhook
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.NET.Base.Teams.Webhook](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Teams.Webhook 'Guilded.NET.Base.Teams.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated webhook
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
