---
title: CreateForumThreadAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new post in a [channel](BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).channel 'Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid, string, string).channel')."
---

## BaseGuildedClient.CreateForumThreadAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a new post in a [channel](BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).md#Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).channel 'Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid, string, string).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.ForumThread> CreateForumThreadAsync(Guid channel, string title, string content);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of the forum post

<a name='Guilded.Base.BaseGuildedClient.CreateForumThreadAsync(Guid,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The content of the forum post

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created forum thread