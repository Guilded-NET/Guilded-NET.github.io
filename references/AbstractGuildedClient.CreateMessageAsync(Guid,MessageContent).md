---
title: CreateMessageAsync(Guid, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new message](Message.md 'Guilded.Base.Content.Message')."
---

## AbstractGuildedClient.CreateMessageAsync(Guid, MessageContent) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Creates a [new message](Message.md 'Guilded.Base.Content.Message').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(Guid channel, Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateMessageAsync(Guid,Guilded.Base.Content.MessageContent).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.CreateMessageAsync(Guid,Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null') and [embeds](MessageContent.Embeds.md 'Guilded.Base.Content.MessageContent.Embeds') are also null or its array is empty

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [Content](Message.Content.md 'Guilded.Base.Content.Message.Content') is above [the message content](Message.Content.md 'Guilded.Base.Content.Message.Content') limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message.md 'Guilded.Base.Content.Message')