---
title: ReplyAsync(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## MessageEvent.ReplyAsync(string) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(string content);
```

### Remarks
  
The given text [content](MessageEvent.ReplyAsync(string).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string).content') will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') property) in the reply list.
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message in Markdown plain text

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent.ReplyAsync(string).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](MessageEvent.ReplyAsync(string).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message