---
title: UpdateListItemAsync(Guid, Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [message](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string)#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).message') of the [listItem](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string)#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).listItem')."
---

## BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Edits the [message](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string)#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).message') of the [listItem](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string)#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).listItem').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> UpdateListItemAsync(Guid channel, Guid listItem, string message, string? note=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the list item](ListItem 'Guilded.Base.Content.ListItem') to edit

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text content of [the list item](ListItem 'Guilded.Base.Content.ListItem')

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text content of the note in [the list item](ListItem 'Guilded.Base.Content.ListItem')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [list item](ListItem 'Guilded.Base.Content.ListItem')