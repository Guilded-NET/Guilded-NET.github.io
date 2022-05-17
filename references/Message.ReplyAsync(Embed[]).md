---
title: ReplyAsync(Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## Message.ReplyAsync(Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> ReplyAsync(params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The given text content will be formatted in Markdown.  
  
Includes this message ([Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id') property) in the reply list.
#### Parameters

<a name='Guilded.Base.Content.Message.ReplyAsync(Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the content only consists of whitespace or is [nu](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the content is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')