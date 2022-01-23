---
title: ReplyAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> ReplyAsync(string content);
```"
---

## Message.ReplyAsync(string) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`Message`](Message 'Guilded.NET.Base.Content.Message')

Replies to the message in the chat.

```csharp
public System.Threading.Tasks.Task<Guilded.NET.Base.Content.Message> ReplyAsync(string content);
```

### Remarks
  
Creates a new message in the channel of identifier [ChannelId](ChannelContent_T,S_.ChannelId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ChannelId') where the message is.  
  
Includes the message in the reply list.
#### Parameters

<a name='Guilded.NET.Base.Content.Message.ReplyAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message.ReplyAsync(string)#Guilded.NET.Base.Content.Message.ReplyAsync(string).content 'Guilded.NET.Base.Content.Message.ReplyAsync(string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](Message.ReplyAsync(string)#Guilded.NET.Base.Content.Message.ReplyAsync(string).content 'Guilded.NET.Base.Content.Message.ReplyAsync(string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Message created