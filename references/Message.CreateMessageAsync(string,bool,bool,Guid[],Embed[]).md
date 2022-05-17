---
title: CreateMessageAsync(string, bool, bool, Guid[], Embed[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId'))."
---

## Message.CreateMessageAsync(string, bool, bool, Guid[], Embed[]) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Message`](Message 'Guilded.Base.Content.Message')

Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(string content, bool isPrivate=false, bool isSilent=false, Guid[]? replyTo=null, params Guilded.Base.Embeds.Embed[] embeds);
```

### Remarks
  
The [content](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[])#Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[]).content') will be formatted in Markdown.  
  
This does not automatically include the message in the reply list.  
  
[embeds](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[])#Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).embeds 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[]).embeds') will be displayed alongside [content](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[])#Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[]).content').
#### Parameters

<a name='Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The [text contents](Message.Content 'Guilded.Base.Content.Message.Content') of [the message](Message 'Guilded.Base.Content.Message') in Markdown (max — `4000`)

<a name='Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).replyTo'></a>

`replyTo` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

<a name='Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).embeds'></a>

`embeds` [Embed](Embed 'Guilded.Base.Embeds.Embed')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The array of [all custom embeds](Embed 'Guilded.Base.Embeds.Embed') in [the message](Message 'Guilded.Base.Content.Message') (max — `1`)

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[])#Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[]).content') only consists of whitespace or is [nu](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/nu')

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [content](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[])#Guilded.Base.Content.Message.CreateMessageAsync(string,bool,bool,Guid[],Guilded.Base.Embeds.Embed[]).content 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[]).content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [message](Message 'Guilded.Base.Content.Message')