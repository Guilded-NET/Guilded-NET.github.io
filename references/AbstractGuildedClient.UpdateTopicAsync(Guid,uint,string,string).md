---
title: UpdateTopicAsync(Guid, uint, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).title 'Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string).title') and [content](AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).content 'Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string).content')."
---

## AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Edits [forum post's](Topic 'Guilded.Base.Content.Topic')[title](AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).title 'Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string).title') and [content](AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string)#Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).content 'Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid, uint, string, string).content').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.Topic> UpdateTopicAsync(Guid channel, uint topic, string title, string content);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).topic'></a>

`topic` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [topic](Topic 'Guilded.Base.Content.Topic') to update

<a name='Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).title'></a>

`title` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new title of the [forum topic](Topic 'Guilded.Base.Content.Topic')

<a name='Guilded.AbstractGuildedClient.UpdateTopicAsync(Guid,uint,string,string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new contents of the [forum topic](Topic 'Guilded.Base.Content.Topic')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Topic](Topic 'Guilded.Base.Content.Topic')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [forum topic](Topic 'Guilded.Base.Content.Topic')