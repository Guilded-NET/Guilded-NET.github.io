---
title: CreateMessageAsync(Guid, string, Guid[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content, params System.Guid[] replyMessageIds);
```"
---

## BaseGuildedClient.CreateMessageAsync(Guid, string, Guid[]) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates a message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, string content, params System.Guid[] replyMessageIds);
```

### Remarks
  
Creates a new chat messsage in the specified channel.  
  
The [content](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[])#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).replyMessageIds'></a>

`replyMessageIds` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[])#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](BaseGuildedClient.CreateMessageAsync(Guid,string,Guid[])#Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,string,System.Guid[]).content 'Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[]).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message