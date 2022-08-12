---
title: DeleteTopicAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes a [forum post](Topic 'Guilded.Base.Content.Topic')."
---

## AbstractGuildedClient.DeleteTopicAsync(Guid, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Deletes a [forum post](Topic 'Guilded.Base.Content.Topic').

```csharp
public override System.Threading.Tasks.Task DeleteTopicAsync(Guid channel, uint topic);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteTopicAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.DeleteTopicAsync(Guid,uint).topic'></a>

`topic` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [topic](Topic 'Guilded.Base.Content.Topic') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')