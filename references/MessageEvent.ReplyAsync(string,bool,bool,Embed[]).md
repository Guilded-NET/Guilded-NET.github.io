---
title: ReplyAsync(string, bool, bool, Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## MessageEvent.ReplyAsync(string, bool, bool, Embed[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(string content, bool isPrivate=false, bool isSilent=false, params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The given text [content](MessageEvent.ReplyAsync(string,bool,bool,Embed[]).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') property) in the reply list.
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The text contents of the message in Markdown plain text

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed.md 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageEvent.ReplyAsync(string,bool,bool,Embed[]).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](MessageEvent.ReplyAsync(string,bool,bool,Embed[]).md#Guilded.Base.Events.MessageEvent.ReplyAsync(string,bool,bool,Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[]).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message