
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateHookMessageAsync(Guid, string, string) Method

Creates a message in a chat using provided webhook.
```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](https://guilded-net.github.io/references/GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](AbstractGuildedClient_CreateHookMessageAsync(Guid_string_string)#Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_string)_content 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string).content') will be formatted in Markdown.