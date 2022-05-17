---
title: CreateForumThreadAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new forum post](ForumThread 'Guilded.Base.Content.ForumThread')."
---

## AbstractGuildedClient.CreateForumThreadAsync(Guid, string, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a [new forum post](ForumThread 'Guilded.Base.Content.ForumThread').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.ForumThread> CreateForumThreadAsync(Guid channel, string title, string content);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the forum post](ForumThread 'Guilded.Base.Content.ForumThread')

<a name='Guilded.AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content of [the forum post](ForumThread 'Guilded.Base.Content.ForumThread')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [forum thread](ForumThread 'Guilded.Base.Content.ForumThread')