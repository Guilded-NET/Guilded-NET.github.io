---
title: UpdateAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](CommandEvent.UpdateAsync(string)#Guilded.Commands.CommandEvent.UpdateAsync(string).content 'Guilded.Commands.CommandEvent.UpdateAsync(string).content') of a message."
---

## CommandEvent.UpdateAsync(string) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Edits the [content](CommandEvent.UpdateAsync(string)#Guilded.Commands.CommandEvent.UpdateAsync(string).content 'Guilded.Commands.CommandEvent.UpdateAsync(string).content') of a message.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateAsync(string content);
```
#### Parameters

<a name='Guilded.Commands.CommandEvent.UpdateAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [new contents](MessageContent 'Guilded.Base.Content.MessageContent') of [the message](Message 'Guilded.Base.Content.Message')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](CommandEvent.UpdateAsync(string)#Guilded.Commands.CommandEvent.UpdateAsync(string).content 'Guilded.Commands.CommandEvent.UpdateAsync(string).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message