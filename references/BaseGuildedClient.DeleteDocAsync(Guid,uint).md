---
title: DeleteDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes a [doc](BaseGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).doc') from a [channel](BaseGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).channel 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).channel')."
---

## BaseGuildedClient.DeleteDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Deletes a [doc](BaseGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).doc') from a [channel](BaseGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).channel 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).channel').

```csharp
public abstract System.Threading.Tasks.Task DeleteDocAsync(Guid channel, uint doc);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')