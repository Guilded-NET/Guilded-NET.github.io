---
title: DeleteDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [doc](BaseGuildedClient.DeleteDocAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).doc')."
---

## BaseGuildedClient.DeleteDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Deletes the [doc](BaseGuildedClient.DeleteDocAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid, uint).doc').

```csharp
public abstract System.Threading.Tasks.Task DeleteDocAsync(Guid channel, uint doc);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.DeleteDocAsync(Guid,uint).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the document](Doc 'Guilded.Base.Content.Doc') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')