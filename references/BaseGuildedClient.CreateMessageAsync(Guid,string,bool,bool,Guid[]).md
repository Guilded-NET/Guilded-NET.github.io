---
title: CreateMessageAsync(Guid, string, bool, bool, Guid[])
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a new message in a [channel](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).md#Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).channel 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[]).channel')."
---

## BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[]) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Creates a new message in a [channel](BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).md#Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).channel 'Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid, string, bool, bool, Guid[]).channel').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.Message> CreateMessageAsync(Guid channel, string content, bool isPrivate=false, bool isSilent=false, params Guid[] replyTo);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).content'></a>

`content` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).isSilent'></a>

`isSilent` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

<a name='Guilded.Base.BaseGuildedClient.CreateMessageAsync(Guid,string,bool,bool,Guid[]).replyTo'></a>

`replyTo` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

#### Exceptions

[GuildedException](GuildedException.md 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')

[System.ArgumentNullException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentNullException 'System.ArgumentNullException')  
When the [content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') only consists of whitespace or is [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null') and [embeds](MessageContent.Embeds.md 'Guilded.Base.Content.MessageContent.Embeds') are also null or its array is empty

[System.ArgumentOutOfRangeException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentOutOfRangeException 'System.ArgumentOutOfRangeException')  
When the [Content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') is above the message limit of 4000 characters

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Message](Message.md 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created message