
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base](index#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.ExecuteWebhookAsync(Guid, string, string, Embed[]) Method
Posts a message using a webhook.  
```csharp
public abstract System.Threading.Tasks.Task ExecuteWebhookAsync(System.Guid webhookId, string token, string content=null, params Guilded.NET.Base.Embeds.Embed[] embeds);
```

#### Parameters
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the webhook
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Token of this webhook
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Message to send using the webhook
  
<a name='Guilded_NET_Base_BaseGuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_embeds'></a>
`embeds` [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
An array of embeds to send
  

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  

#### Exceptions
[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
