
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, Embed[]) Method

Creates a message in a chat using provided webhook.
```csharp
public System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, params Guilded.NET.Base.Embeds.Embed[] embeds);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_embeds'></a>
`embeds` [Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of embeds to add in the message


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string_Embed__)#Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_Guilded_NET_Base_Embeds_Embed__)_content 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, Guilded.NET.Base.Embeds.Embed[]).content') will be formatted in Markdown.