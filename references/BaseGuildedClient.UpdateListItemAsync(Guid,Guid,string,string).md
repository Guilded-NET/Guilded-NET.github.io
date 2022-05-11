---
title: UpdateListItemAsync(Guid, Guid, string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [message](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).message') of the [listItem](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).listItem') or the [note](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).note 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).note') in a [channel](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).channel 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).channel')."
---

## BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Edits the [message](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).message') of the [listItem](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).listItem') or the [note](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).note 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).note') in a [channel](BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).md#Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).channel 'Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid, Guid, string, string).channel').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.ListItem<Guilded.Base.Content.ListItemNote>> UpdateListItemAsync(Guid channel, Guid listItem, string message, string? note=null);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).listItem'></a>

`listItem` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the list item to edit

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text content of the list item

<a name='Guilded.Base.BaseGuildedClient.UpdateListItemAsync(Guid,Guid,string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text content of the note in the list item

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.Base.Content.ListItem&lt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')[&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated list item