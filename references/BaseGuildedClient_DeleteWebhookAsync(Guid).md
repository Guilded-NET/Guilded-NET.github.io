
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.DeleteWebhookAsync(Guid) Method
Deletes a webhook.  
```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Teams.Webhook> DeleteWebhookAsync(System.Guid webhookId);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_DeleteWebhookAsync(System_Guid)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the webhook to delete
  

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Webhook](Webhook 'Guilded.NET.Base.Teams.Webhook')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Deleted webhook

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
