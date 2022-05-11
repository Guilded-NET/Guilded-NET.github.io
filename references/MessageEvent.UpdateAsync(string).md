---
title: UpdateAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](MessageEvent.UpdateAsync(string).md#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message in a channel."
---

## MessageEvent.UpdateAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Edits the [content](MessageEvent.UpdateAsync(string).md#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message in a channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateAsync(string content);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.UpdateAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new text contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent.UpdateAsync(string).md#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](MessageEvent.UpdateAsync(string).md#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message