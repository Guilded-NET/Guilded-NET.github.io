---
title: GetDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the specified document.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> GetDocAsync(System.Guid channelId, uint docId);
```"
---

## AbstractGuildedClient.GetDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Gets the specified document.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> GetDocAsync(System.Guid channelId, uint docId);
```

### Remarks
  
Gets the specified document in the provided channel.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.GetDocAsync(System.Guid,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.GetDocAsync(System.Guid,uint).docId'></a>

`docId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.NET.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified document