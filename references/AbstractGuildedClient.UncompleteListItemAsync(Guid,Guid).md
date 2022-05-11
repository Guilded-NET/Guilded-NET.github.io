---
title: UncompleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Marks the [listItem](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemBase-1.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted')."
---

## AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Marks the [listItem](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemBase-1.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').

```csharp
public override System.Threading.Tasks.Task UncompleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel') where the list item is

<a name='Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem') to complete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')