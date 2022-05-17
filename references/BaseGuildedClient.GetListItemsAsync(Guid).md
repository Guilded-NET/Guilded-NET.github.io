---
title: GetListItemsAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a set of [list items](ListItem 'Guilded.Base.Content.ListItem') from the [channel](BaseGuildedClient.GetListItemsAsync(Guid)#Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel')."
---

## BaseGuildedClient.GetListItemsAsync(Guid) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets a set of [list items](ListItem 'Guilded.Base.Content.ListItem') from the [channel](BaseGuildedClient.GetListItemsAsync(Guid)#Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.ListItemSummary>> GetListItemsAsync(Guid channel);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') to get list items from

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [list items](ListItem 'Guilded.Base.Content.ListItem')