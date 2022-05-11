---
title: DeleteDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [doc](AbstractGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.AbstractGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint).doc')."
---

## AbstractGuildedClient.DeleteDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Deletes the [doc](AbstractGuildedClient.DeleteDocAsync(Guid,uint).md#Guilded.AbstractGuildedClient.DeleteDocAsync(Guid,uint).doc 'Guilded.AbstractGuildedClient.DeleteDocAsync(Guid, uint).doc').

```csharp
public override System.Threading.Tasks.Task DeleteDocAsync(Guid channel, uint doc);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteDocAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.DeleteDocAsync(Guid,uint).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the document](Doc.md 'Guilded.Base.Content.Doc') to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')