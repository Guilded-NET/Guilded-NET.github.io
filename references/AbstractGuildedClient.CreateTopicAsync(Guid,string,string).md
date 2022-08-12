---
title: CreateTopicAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new [forum post](Topic 'Guilded.Base.Content.Topic')."
---

## AbstractGuildedClient.CreateTopicAsync(Guid, string, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a new [forum post](Topic 'Guilded.Base.Content.Topic').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Topic> CreateTopicAsync(Guid channel, string title, string content);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateTopicAsync(Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.CreateTopicAsync(Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the forum post](Topic 'Guilded.Base.Content.Topic')

<a name='Guilded.AbstractGuildedClient.CreateTopicAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content of [the forum post](Topic 'Guilded.Base.Content.Topic')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Topic](Topic 'Guilded.Base.Content.Topic')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [forum topic](Topic 'Guilded.Base.Content.Topic')