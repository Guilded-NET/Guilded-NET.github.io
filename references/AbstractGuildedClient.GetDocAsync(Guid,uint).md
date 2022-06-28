---
title: GetDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [doc](AbstractGuildedClient.GetDocAsync(Guid,uint)#Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).doc 'Guilded.AbstractGuildedClient.GetDocAsync(Guid, uint).doc')."
---

## AbstractGuildedClient.GetDocAsync(Guid, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets the [doc](AbstractGuildedClient.GetDocAsync(Guid,uint)#Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).doc 'Guilded.AbstractGuildedClient.GetDocAsync(Guid, uint).doc').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Doc> GetDocAsync(Guid channel, uint doc);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetDocAsync(Guid,uint).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the document](Doc 'Guilded.Base.Content.Doc') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [document](Doc 'Guilded.Base.Content.Doc')