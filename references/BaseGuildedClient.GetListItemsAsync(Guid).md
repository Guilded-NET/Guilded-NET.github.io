---
title: GetListItemsAsync(Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a set of list items from a [channel](BaseGuildedClient.GetListItemsAsync(Guid).md#Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel')."
---

## BaseGuildedClient.GetListItemsAsync(Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Gets a set of list items from a [channel](BaseGuildedClient.GetListItemsAsync(Guid).md#Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.ListItem<Guilded.Base.Content.ListItemNoteSummary>>> GetListItemsAsync(Guid channel);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetListItemsAsync(Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel to get list items from

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Guilded.Base.Content.ListItem&lt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary')[&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of list items