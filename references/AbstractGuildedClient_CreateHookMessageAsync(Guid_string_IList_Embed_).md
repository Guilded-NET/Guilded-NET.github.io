
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET').[AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')
## AbstractGuildedClient.CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;) Method

Creates a message in a chat using provided webhook.
```csharp
public override System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```

#### Parameters

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded_NET_AbstractGuildedClient_CreateHookMessageAsync(System_Guid_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_embeds'></a>
`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](https://guilded-net.github.io/references/Embed 'Guilded.NET.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](https://guilded-net.github.io/references/GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](https://guilded-net.github.io/references/GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](https://guilded-net.github.io/references/GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
Creates a new message using the specified webhook.