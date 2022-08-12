---
title: CreateListItemAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new [list item](ListItem 'Guilded.Base.Content.ListItem')."
---

## AbstractGuildedClient.CreateListItemAsync(Guid, string, string) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Creates a new [list item](ListItem 'Guilded.Base.Content.ListItem').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> CreateListItemAsync(Guid channel, string message, string? note=null);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CreateListItemAsync(Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.CreateListItemAsync(Guid,string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text content of the [list item](ListItem 'Guilded.Base.Content.ListItem')

<a name='Guilded.AbstractGuildedClient.CreateListItemAsync(Guid,string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text content of an [optional note](ListItemNote 'Guilded.Base.Content.ListItemNote') in the [list item](ListItem 'Guilded.Base.Content.ListItem')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [list item](ListItem 'Guilded.Base.Content.ListItem')