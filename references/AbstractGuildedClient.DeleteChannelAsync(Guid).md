---
title: DeleteChannelAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [channel](AbstractGuildedClient.DeleteChannelAsync(Guid).md#Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid).channel')."
---

## AbstractGuildedClient.DeleteChannelAsync(Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Deletes the [channel](AbstractGuildedClient.DeleteChannelAsync(Guid).md#Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid).channel 'Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid).channel').

```csharp
public override System.Threading.Tasks.Task DeleteChannelAsync(Guid channel);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteChannelAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')