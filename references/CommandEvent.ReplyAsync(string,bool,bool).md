---
title: ReplyAsync(string, bool, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId'))."
---

## CommandEvent.ReplyAsync(string, bool, bool) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent`2.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(string content, bool isPrivate=false, bool isSilent=false);
```

### Remarks
  
The given text [content](CommandEvent.ReplyAsync(string,bool,bool)#Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).content 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool).content') will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent`2.Id') property) in the reply list.
#### Parameters

<a name='Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown (max — `4000`)

<a name='Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](CommandEvent.ReplyAsync(string,bool,bool)#Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).content 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool).content') only consists of whitespace or is [nu](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](CommandEvent.ReplyAsync(string,bool,bool)#Guilded.Commands.CommandEvent.ReplyAsync(string,bool,bool).content 'Guilded.Commands.CommandEvent.ReplyAsync(string, bool, bool).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')