---
title: ReplyAsync(string, bool, bool, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## Message.ReplyAsync(string, bool, bool, Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(string content, bool isPrivate=false, bool isSilent=false, params Guilded.Base.Embeds.Embed[] embeds);
```
#### Parameters

<a name='Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown (max — `4000`)

<a name='Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

### Remarks
  
The given text [content](Message.ReplyAsync(string,bool,bool,Embed[])#Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') property) in the reply list.

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message.ReplyAsync(string,bool,bool,Embed[])#Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') only consists of whitespace or is [nu](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](Message.ReplyAsync(string,bool,bool,Embed[])#Guilded.Base.Content.Message.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')