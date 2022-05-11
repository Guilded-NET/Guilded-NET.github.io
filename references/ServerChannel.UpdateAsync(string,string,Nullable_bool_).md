---
title: UpdateAsync(string, string, Nullable<bool>)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the channel."
---

## ServerChannel.UpdateAsync(string, string, Nullable<bool>) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ServerChannel`](ServerChannel 'Guilded.Base.Servers.ServerChannel')

Deletes the channel.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Servers.ServerChannel> UpdateAsync(string? name=null, string? topic=null, System.Nullable<bool> isPublic=null);
```
#### Parameters

<a name='Guilded.Base.Servers.ServerChannel.UpdateAsync(string,string,System.Nullable_bool_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.Servers.ServerChannel.UpdateAsync(string,string,System.Nullable_bool_).topic'></a>

`topic` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

<a name='Guilded.Base.Servers.ServerChannel.UpdateAsync(string,string,System.Nullable_bool_).isPublic'></a>

`isPublic` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')