---
title: GetListItemsAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a set of [list items](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem') from the [channel](AbstractGuildedClient.GetListItemsAsync(Guid).md#Guilded.AbstractGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetListItemsAsync(Guid).channel')."
---

## AbstractGuildedClient.GetListItemsAsync(Guid) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Gets a set of [list items](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem') from the [channel](AbstractGuildedClient.GetListItemsAsync(Guid).md#Guilded.AbstractGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.AbstractGuildedClient.GetListItemsAsync(Guid).channel').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.ListItemSummary>> GetListItemsAsync(Guid channel);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetListItemsAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Servers.ServerChannel 'Guilded.Base.Servers.ServerChannel') to get list items from

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.Base.Content.ListItemSummary](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItemSummary 'Guilded.Base.Content.ListItemSummary')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [list items](https://docs.microsoft.com/en-us/dotnet/api/Guilded.Base.Content.ListItem 'Guilded.Base.Content.ListItem')