---
title: ReplyAsync(string, bool, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## MessageEvent.ReplyAsync(string, bool, bool) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(string content, bool isPrivate=false, bool isSilent=false);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown (max — `4000`)

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

### Remarks
  
The given text [content](MessageEvent.ReplyAsync(string,bool,bool)#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool).content') will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') property) in the reply list.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent.ReplyAsync(string,bool,bool)#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool).content') only consists of whitespace or is [nu](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](MessageEvent.ReplyAsync(string,bool,bool)#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')