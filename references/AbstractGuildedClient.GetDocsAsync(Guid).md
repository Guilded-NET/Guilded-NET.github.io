---
title: GetDocsAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of documents.

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Content.Doc>> GetDocsAsync(System.Guid channelId);
```"
---

## AbstractGuildedClient.GetDocsAsync(Guid) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Gets a list of documents.

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Content.Doc>> GetDocsAsync(System.Guid channelId);
```

### Remarks
  
Gets latest 50 documents in a specified document channel.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.GetDocsAsync(System.Guid).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Doc](Doc 'Guilded.NET.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of documents