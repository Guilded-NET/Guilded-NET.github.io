---
title: UpdateMessageAsync(Guid, Guid, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).message')."
---

## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).message').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateMessageAsync(Guid channel, Guid message, Guilded.Base.Content.MessageContent content);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to edit

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).content'></a>

`content` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The [new contents](MessageContent 'Guilded.Base.Content.MessageContent') of [the message](Message 'Guilded.Base.Content.Message')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,MessageContent)#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,Guilded.Base.Content.MessageContent).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, Guilded.Base.Content.MessageContent).message')