---
title: CreateMessageAsync(Guid, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content);
```"
---

## BaseGuildedClient.CreateMessageAsync(Guid, string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates a message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content);
```

### Remarks
  
Creates a new chat messsage in the specified channel.  
  
The [content](BaseGuildedClient.CreateMessageAsync(Guid,string)#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient.CreateMessageAsync(Guid,string)#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient.CreateMessageAsync(Guid,string)#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message