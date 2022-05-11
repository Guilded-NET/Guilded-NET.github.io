---
title: GetListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [listItem](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid).channel')."
---

## AbstractGuildedClient.GetListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets the [listItem](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid).channel').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> GetListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem') to get

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.Base.Content.ListItem](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[listItem](AbstractGuildedClient.GetListItemAsync(Guid,Guid).md#Guilded.AbstractGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.AbstractGuildedClient.GetListItemAsync(Guid, Guid).listItem')