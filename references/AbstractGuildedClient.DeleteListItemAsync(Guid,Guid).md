---
title: DeleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [listItem](AbstractGuildedClient.DeleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid, Guid).listItem')."
---

## AbstractGuildedClient.DeleteListItemAsync(Guid, Guid) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Deletes the [listItem](AbstractGuildedClient.DeleteListItemAsync(Guid,Guid)#Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid, Guid).listItem').

```csharp
public override System.Threading.Tasks.Task DeleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the list item](ListItem 'Guilded.Base.Content.ListItem') is

<a name='Guilded.AbstractGuildedClient.DeleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](ListItem 'Guilded.Base.Content.ListItem') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')