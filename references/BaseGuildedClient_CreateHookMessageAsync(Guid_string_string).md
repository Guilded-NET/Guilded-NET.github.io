
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string) Method

Creates a message in a chat using provided webhook.
```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string)#Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_content 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string).content') will be formatted in Markdown.