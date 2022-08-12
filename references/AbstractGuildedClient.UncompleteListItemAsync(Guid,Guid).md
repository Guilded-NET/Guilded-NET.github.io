---
title: UncompleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Marks the specified [listItem](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted')."
---

## AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Marks the specified [listItem](AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').

```csharp
public override System.Threading.Tasks.Task UncompleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where the list item is

<a name='Guilded.AbstractGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the [list item](ListItem 'Guilded.Base.Content.ListItem') to complete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')