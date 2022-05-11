---
title: DeleteChannelAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [channel](BaseGuildedClient.DeleteChannelAsync(Guid)#Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid).channel')."
---

## BaseGuildedClient.DeleteChannelAsync(Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Deletes the [channel](BaseGuildedClient.DeleteChannelAsync(Guid)#Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task DeleteChannelAsync(Guid channel);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteChannelAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')