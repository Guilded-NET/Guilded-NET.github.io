#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base.md#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient.md 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.UpdateWebhookAsync(Guid, Guid, string, Uri) Method
Updates webhook's name or profile picture.  
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Teams.Webhook> UpdateWebhookAsync(System.Guid channelId, System.Guid webhookId, string name, System.Uri avatar);
```
#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_channelId'></a>
`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the parent channel
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the webhook to update
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_name'></a>
`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
A new name of the webhook
  
<a name='Guilded_NET_Base_BaseGuildedClient_UpdateWebhookAsync(System_Guid_System_Guid_string_System_Uri)_avatar'></a>
`avatar` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')  
Profile picture/icon of the webhook
  
#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook.md 'Guilded.NET.Base.Teams.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated webhook
#### Exceptions
[GuildedException](GuildedException.md 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
