---
title: UncompleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Marks the [listItem](BaseGuildedClient.UncompleteListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted')."
---

## BaseGuildedClient.UncompleteListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Marks the [listItem](BaseGuildedClient.UncompleteListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid, Guid).listItem') as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').

```csharp
public abstract System.Threading.Tasks.Task UncompleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where the list item is

<a name='Guilded.Base.BaseGuildedClient.UncompleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](ListItem 'Guilded.Base.Content.ListItem') to complete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')