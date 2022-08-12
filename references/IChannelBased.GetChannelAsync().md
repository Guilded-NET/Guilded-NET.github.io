---
title: GetChannelAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the channel."
---

## IChannelBased.GetChannelAsync() Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`IChannelBased`](IChannelBased 'Guilded.Base.IChannelBased')

Gets the channel.

```csharp
System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> GetChannelAsync();
```

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
channel