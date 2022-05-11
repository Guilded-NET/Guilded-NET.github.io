---
title: CreateMessageAsync(string, Guid[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## MessageEvent.CreateMessageAsync(string, Guid[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(string content, params Guid[] replyMessageIds);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.CreateMessageAsync(string,Guid[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.Events.MessageEvent.CreateMessageAsync(string,Guid[]).replyMessageIds'></a>

`replyMessageIds` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null') and [embeds](MessageContent.Embeds.md 'Guilded.Base.Content.MessageContent.Embeds') are also null or its array is empty

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [Content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message