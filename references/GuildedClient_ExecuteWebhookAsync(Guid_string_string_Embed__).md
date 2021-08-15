#### [Guilded.NET](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET](Guilded_NET_Base.md#Guilded_NET 'Guilded.NET').[GuildedClient](GuildedClient.md 'Guilded.NET.GuildedClient')
## GuildedClient.ExecuteWebhookAsync(Guid, string, string, Embed[]) Method
Posts a message using a webhook.  
```csharp
public override System.Threading.Tasks.Task ExecuteWebhookAsync(System.Guid webhookId, string token, string content=null, params Guilded.NET.Base.Embeds.Embed[] embeds);
```
#### Parameters
<a name='Guilded_NET_GuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The identifier of the webhook
  
<a name='Guilded_NET_GuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The token of this webhook
  
<a name='Guilded_NET_GuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The message to send using the webhook
  
<a name='Guilded_NET_GuildedClient_ExecuteWebhookAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_embeds'></a>
`embeds` [Guilded.NET.Base.Embeds.Embed](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.Embeds.Embed 'Guilded.NET.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
An array of embeds to send
  
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
#### Exceptions
[Guilded.NET.Base.GuildedException](https://docs.microsoft.com/en-us/dotnet/api/Guilded.NET.Base.GuildedException 'Guilded.NET.Base.GuildedException')  
When the client receives an error from Guilded API
