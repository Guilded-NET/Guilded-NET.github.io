---
title: CreateMessageAsync(MessageContent)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## MessageEvent.CreateMessageAsync(MessageContent) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(Guilded.Base.Content.MessageContent message);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent).message'></a>

`message` [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown (max — `4000`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageContent.Content 'Guilded.Base.Content.MessageContent.Content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null') and [embeds](MessageContent.Embeds 'Guilded.Base.Content.MessageContent.Embeds') are also null or its array is empty

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [Content](MessageContent.Content 'Guilded.Base.Content.MessageContent.Content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')