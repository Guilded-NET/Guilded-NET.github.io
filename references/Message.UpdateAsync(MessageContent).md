---
title: UpdateAsync(MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the [content](Message.UpdateAsync(MessageContent)#Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content') of a message."
---

## Message.UpdateAsync(MessageContent) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Edits the [content](Message.UpdateAsync(MessageContent)#Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content') of a message.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> UpdateAsync(Guilded.Base.Content.MessageContent content);
```
#### Parameters

<a name='Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content'></a>

`content` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The [new contents](MessageContent 'Guilded.Base.Content.MessageContent') of [the message](Message 'Guilded.Base.Content.Message')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message.UpdateAsync(MessageContent)#Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent).content') is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message