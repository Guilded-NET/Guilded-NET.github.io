---
title: GetMessagesAsync(Guid, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a set of messages.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Content.Message>> GetMessagesAsync(System.Guid channelId, bool includePrivate=false);
```"
---

## BaseGuildedClient.GetMessagesAsync(Guid, bool) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Gets a set of messages.

```csharp
public abstract System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.NET.Base.Content.Message>> GetMessagesAsync(System.Guid channelId, bool includePrivate=false);
```

### Remarks
  
Gets a set of messages in the specified channel.
#### Parameters

<a name='Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid,bool).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent channel

<a name='Guilded.NET.Base.BaseGuildedClient.GetMessagesAsync(System.Guid,bool).includePrivate'></a>

`includePrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether to get private replies or not

#### Exceptions

[GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Message](Message 'Guilded.NET.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of messages