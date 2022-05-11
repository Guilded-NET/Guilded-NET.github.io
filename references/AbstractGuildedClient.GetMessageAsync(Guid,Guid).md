---
title: GetMessageAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the message."
---

## AbstractGuildedClient.GetMessageAsync(Guid, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the message.

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Message> GetMessageAsync(Guid channel, Guid messageId);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetMessageAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetMessageAsync(Guid,Guid).messageId'></a>

`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
message