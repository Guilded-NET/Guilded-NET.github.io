---
title: GetListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [listItem](BaseGuildedClient.GetListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.GetListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).channel')."
---

## BaseGuildedClient.GetListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [listItem](BaseGuildedClient.GetListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.GetListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> GetListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](ListItem 'Guilded.Base.Content.ListItem') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[listItem](BaseGuildedClient.GetListItemAsync(Guid,Guid)#Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.GetListItemAsync(Guid, Guid).listItem')