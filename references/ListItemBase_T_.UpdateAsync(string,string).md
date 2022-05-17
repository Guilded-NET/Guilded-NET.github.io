---
title: UpdateAsync(string, string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the content of a [message](ListItemBase_T_.UpdateAsync(string,string)#Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string).message')."
---

## ListItemBase<T>.UpdateAsync(string, string) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItemBase<T>`](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')

Edits the content of a [message](ListItemBase_T_.UpdateAsync(string,string)#Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string).message').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.ListItem> UpdateAsync(string message, string? note=null);
```
#### Parameters

<a name='Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of [the message](Message 'Guilded.Base.Content.Message') to edit

<a name='Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).note'></a>

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
Updated [message](ListItemBase_T_.UpdateAsync(string,string)#Guilded.Base.Content.ListItemBase_T_.UpdateAsync(string,string).message 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string).message')