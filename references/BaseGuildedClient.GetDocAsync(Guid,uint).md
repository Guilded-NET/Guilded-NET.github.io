---
title: GetDocAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a [doc](BaseGuildedClient.GetDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint).doc') from a [channel](BaseGuildedClient.GetDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).channel 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint).channel')."
---

## BaseGuildedClient.GetDocAsync(Guid, uint) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a [doc](BaseGuildedClient.GetDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).doc 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint).doc') from a [channel](BaseGuildedClient.GetDocAsync(Guid,uint).md#Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).channel 'Guilded.Base.BaseGuildedClient.GetDocAsync(Guid, uint).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.Doc> GetDocAsync(Guid channel, uint doc);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.GetDocAsync(Guid,uint).doc'></a>

`doc` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the document to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified document