---
title: UpdateAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](MessageEvent.UpdateAsync(string)#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message."
---

## MessageEvent.UpdateAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Edits the [content](MessageEvent.UpdateAsync(string)#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') of a message.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateAsync(string content);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.UpdateAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [new contents](MessageContent 'Guilded.Base.Content.MessageContent') of [the message](Message 'Guilded.Base.Content.Message')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent.UpdateAsync(string)#Guilded.Base.Events.MessageEvent.UpdateAsync(string).content 'Guilded.Base.Events.MessageEvent.UpdateAsync(string).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message