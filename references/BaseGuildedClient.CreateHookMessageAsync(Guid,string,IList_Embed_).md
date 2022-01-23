---
title: CreateHookMessageAsync(Guid, string, IList<Embed>)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in a chat using provided webhook.

```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```"
---

## BaseGuildedClient.CreateHookMessageAsync(Guid, string, IList<Embed>) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates a message in a chat using provided webhook.

```csharp
public abstract System.Threading.Tasks.Task CreateHookMessageAsync(System.Guid webhookId, string token, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed> embeds);
```

### Remarks
  
Creates a new message using the specified webhook.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).webhookId'></a>

`webhookId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the webhook to execute

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).token'></a>

`token` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The token of executed webhook

<a name='Guilded.NET.Base.BaseGuildedClient.CreateHookMessageAsync(System.Guid,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.Embed_).embeds'></a>

`embeds` [System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Embed](Embed 'Guilded.NET.Base.Embeds.Embed')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')

The list of embeds to add in the message

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')