---
title: UpdateMessageAsync(Guid, Guid, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).message') in a [channel](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).channel 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).channel')."
---

## BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Edits the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).content') of a [message](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).message 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).message') in a [channel](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).channel 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateMessageAsync(Guid channel, Guid message, string content);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).message'></a>

`message` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the message to edit

<a name='Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).md#Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid,Guid,string).content 'Guilded.Base.BaseGuildedClient.UpdateMessageAsync(Guid, Guid, string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message