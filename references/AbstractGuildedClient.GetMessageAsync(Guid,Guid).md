---
title: GetMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a message.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> GetMessageAsync(System.Guid channelId, System.Guid messageId);
```"
---

## AbstractGuildedClient.GetMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Gets a message.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> GetMessageAsync(System.Guid channelId, System.Guid messageId);
```

### Remarks
  
Gets the specified message.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid,System.Guid).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid,System.Guid).messageId'></a>

`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of message it should get

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified message