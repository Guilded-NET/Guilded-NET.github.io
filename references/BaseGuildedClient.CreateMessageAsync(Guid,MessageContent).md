---
title: CreateMessageAsync(Guid, MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in chat.

```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, Guilded.NET.Base.Content.MessageContent message);
```"
---

## BaseGuildedClient.CreateMessageAsync(Guid, MessageContent) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates a message in chat.

```csharp
public abstract System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> CreateMessageAsync(System.Guid channelId, Guilded.NET.Base.Content.MessageContent message);
```

### Remarks
  
Creates a new chat messsage in the specified channel.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,Guilded.NET.Base.Content.MessageContent).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.CreateMessageAsync(System.Guid,Guilded.NET.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent')

The message to send

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message