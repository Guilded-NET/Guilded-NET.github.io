---
title: DeleteDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the document.

```csharp
public override System.Threading.Tasks.Task DeleteDocAsync(System.Guid channelId, uint docId);
```"
---

## AbstractGuildedClient.DeleteDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Deletes the document.

```csharp
public override System.Threading.Tasks.Task DeleteDocAsync(System.Guid channelId, uint docId);
```

### Remarks
  
Deletes the specified document.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.DeleteDocAsync(System.Guid,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.DeleteDocAsync(System.Guid,uint).docId'></a>

`docId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')