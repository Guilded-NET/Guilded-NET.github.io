---
title: GetListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a [listItem](BaseGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).channel')."
---

## BaseGuildedClient.GetListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a [listItem](BaseGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.ListItem<Guilded.Base.Content.ListItemNote>> GetListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.Base.Content.ListItem&lt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')[&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified list item