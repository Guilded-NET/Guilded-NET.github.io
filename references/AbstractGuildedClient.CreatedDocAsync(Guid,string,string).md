---
title: CreatedDocAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a document in document list.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> CreatedDocAsync(System.Guid channelId, string title, string content);
```"
---

## AbstractGuildedClient.CreatedDocAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Creates a document in document list.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.Doc> CreatedDocAsync(System.Guid channelId, string title, string content);
```

### Remarks
  
Creates a new document in a document channel.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.CreatedDocAsync(System.Guid,string,string).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.CreatedDocAsync(System.Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of this document

<a name='Guilded.NET.AbstractGuildedClient.CreatedDocAsync(System.Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The Markdown content of this document

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc 'Guilded.NET.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created document