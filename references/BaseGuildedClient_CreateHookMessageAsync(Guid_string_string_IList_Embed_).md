
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base](Guilded_NET_Base#Guilded_NET_Base 'Guilded.NET.Base').[BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')
## BaseGuildedClient.CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;) Method

Creates a message in a chat using provided webhook.
```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, string content, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```

#### Parameters

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_webhookId'></a>
`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_token'></a>
`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_content'></a>
`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of message in Markdown plain text

<a name='Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_embeds'></a>
`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message


#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')


#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
Creates a new message using the specified webhook.  
  
The [content](BaseGuildedClient_CreateHookMessageAsync(Guid_string_string_IList_Embed_)#Guilded_NET_Base_BaseGuildedClient_CreateHookMessageAsync(System_Guid_string_string_System_Collections_Generic_IList_Guilded_NET_Base_Embeds_Embed_)_content 'Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;).content') will be formatted in Markdown.