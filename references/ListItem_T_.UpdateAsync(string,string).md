---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the content of a [message](ListItem_T_.UpdateAsync(string,string).md#Guilded.Base.Content.ListItem_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItem<T>.UpdateAsync(string, string).message') in a channel."
---

## ListItem<T>.UpdateAsync(string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItem<T>`](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')

Edits the content of a [message](ListItem_T_.UpdateAsync(string,string).md#Guilded.Base.Content.ListItem_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItem<T>.UpdateAsync(string, string).message') in a channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.ListItem<Guilded.Base.Content.ListItemNote>> UpdateAsync(string message, string? note=null);
```
#### Parameters

<a name='Guilded.Base.Content.ListItem_T_.UpdateAsync(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the message to edit

<a name='Guilded.Base.Content.ListItem_T_.UpdateAsync(string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the content only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the content is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Guilded.Base.Content.ListItem&lt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')[&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message