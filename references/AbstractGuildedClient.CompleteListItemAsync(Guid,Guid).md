---
title: CompleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Marks the [listItem](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid).listItem') as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted')."
---

## AbstractGuildedClient.CompleteListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Marks the [listItem](AbstractGuildedClient.CompleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid, Guid).listItem') as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase`1.IsCompleted').

```csharp
public override System.Threading.Tasks.Task CompleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the list item](ListItem 'Guilded.Base.Content.ListItem') is

<a name='Guilded.AbstractGuildedClient.CompleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](ListItem 'Guilded.Base.Content.ListItem') to complete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')