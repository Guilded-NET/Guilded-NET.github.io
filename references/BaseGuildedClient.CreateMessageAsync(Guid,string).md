---
title: CreateMessageAsync(Guid, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new message](Message 'Guilded.Base.Content.Message')."
---

## BaseGuildedClient.CreateMessageAsync(Guid, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates a [new message](Message 'Guilded.Base.Content.Message').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(Guid channel, string content);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageContent.Content 'Guilded.Base.Content.MessageContent.Content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null') and [embeds](MessageContent.Embeds 'Guilded.Base.Content.MessageContent.Embeds') are also null or its array is empty

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [Content](Message.Content 'Guilded.Base.Content.Message.Content') is above [the message content](Message.Content 'Guilded.Base.Content.Message.Content') limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')