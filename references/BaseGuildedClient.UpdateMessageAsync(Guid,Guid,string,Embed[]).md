---
title: UpdateMessageAsync(Guid, Guid, string, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).message')."
---

## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).message').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateMessageAsync(Guid channel, Guid message, string content, params Guilded.Base.Embeds.Embed[] embeds);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to edit

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [new contents](MessageContent 'Guilded.Base.Content.MessageContent') of [the message](Message 'Guilded.Base.Content.Message')

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Embed[])#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string,Guilded.Base.Embeds.Embed[]).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string, Guilded.Base.Embeds.Embed[]).message')