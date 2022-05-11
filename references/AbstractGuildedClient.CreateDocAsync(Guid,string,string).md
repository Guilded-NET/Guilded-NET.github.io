---
title: CreateDocAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new document](Doc.md 'Guilded.Base.Content.Doc')."
---

## AbstractGuildedClient.CreateDocAsync(Guid, string, string) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Creates a [new document](Doc.md 'Guilded.Base.Content.Doc').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Doc> CreateDocAsync(Guid channel, string title, string content);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateDocAsync(Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.CreateDocAsync(Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the document](Doc.md 'Guilded.Base.Content.Doc')

<a name='Guilded.AbstractGuildedClient.CreateDocAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The Markdown content of [the document](Doc.md 'Guilded.Base.Content.Doc')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Doc](Doc.md 'Guilded.Base.Content.Doc')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [document](Doc.md 'Guilded.Base.Content.Doc')