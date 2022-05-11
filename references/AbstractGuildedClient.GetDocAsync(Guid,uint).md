---
title: GetDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the doc."
---

## AbstractGuildedClient.GetDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the doc.

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Doc> GetDocAsync(Guid channelId, uint docId);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

<a name='Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).docId'></a>

`docId` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [document](Doc.md 'Guilded.Base.Content.Doc')