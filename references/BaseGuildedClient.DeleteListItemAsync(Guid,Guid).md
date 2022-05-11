---
title: DeleteListItemAsync(Guid, Guid)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes an [listItem](BaseGuildedClient.DeleteListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.DeleteListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid).channel')."
---

## BaseGuildedClient.DeleteListItemAsync(Guid, Guid) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Deletes an [listItem](BaseGuildedClient.DeleteListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).listItem 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid).listItem') from a [channel](BaseGuildedClient.DeleteListItemAsync(Guid,Guid).md#Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).channel 'Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid, Guid).channel').

```csharp
public abstract System.Threading.Tasks.Task DeleteListItemAsync(Guid channel, Guid listItem);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the list item is

<a name='Guilded.Base.BaseGuildedClient.DeleteListItemAsync(Guid,Guid).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item to delete

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')