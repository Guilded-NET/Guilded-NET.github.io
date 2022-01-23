---
title: CreateListItemAsync(Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates an item in the list.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ListItem> CreateListItemAsync(System.Guid channelId, string message, string? note=null);
```"
---

## AbstractGuildedClient.CreateListItemAsync(Guid, string, string) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

Creates an item in the list.

```csharp
public override System.Threading.Tasks.Task<Guilded.NET.Base.Content.ListItem> CreateListItemAsync(System.Guid channelId, string message, string? note=null);
```

### Remarks
  
Creates a new list item in list/task channel.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid,string,string).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid,string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title content of this list item

<a name='Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid,string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The note of this list item

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created list item