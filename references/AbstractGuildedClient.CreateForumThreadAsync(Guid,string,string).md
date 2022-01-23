---
title: CreateForumThreadAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a thread in forums.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ForumThread> CreateForumThreadAsync(System.Guid channelId, string title, string content);
```"
---

## AbstractGuildedClient.CreateForumThreadAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Creates a thread in forums.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ForumThread> CreateForumThreadAsync(System.Guid channelId, string title, string content);
```

### Remarks
  
Creates a forum thread/post in forums.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid,string,string).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the forum post

<a name='Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content of the forum post

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created forum thread