---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the content of a [message](ListItemEvent.UpdateAsync(string,string)#Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).message 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string).message')."
---

## ListItemEvent.UpdateAsync(string, string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemEvent`](ListItemEvent 'Guilded.Base.Events.ListItemEvent')

Edits the content of a [message](ListItemEvent.UpdateAsync(string,string)#Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).message 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string).message').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> UpdateAsync(string message, string? note);
```
#### Parameters

<a name='Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to edit

<a name='Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).note'></a>

`note` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the content is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ListItem](ListItem 'Guilded.Base.Content.ListItem')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [message](ListItemEvent.UpdateAsync(string,string)#Guilded.Base.Events.ListItemEvent.UpdateAsync(string,string).message 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string).message')