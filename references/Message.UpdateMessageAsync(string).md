---
title: UpdateMessageAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Updates the message.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> UpdateMessageAsync(string content);
```"
---

## Message.UpdateMessageAsync(string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Message`](Message 'Guilded.NET.Base.Content.Message')

Updates the message.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> UpdateMessageAsync(string content);
```

### Remarks
  
Edits the contents of the specified message.  
  
The [content](Message.UpdateMessageAsync(string)#Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') will be formatted in Markdown.
#### Parameters

<a name='Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message.UpdateMessageAsync(string)#Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](Message.UpdateMessageAsync(string)#Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated message