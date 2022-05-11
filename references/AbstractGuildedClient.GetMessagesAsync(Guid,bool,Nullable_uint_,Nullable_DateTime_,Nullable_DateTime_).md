---
title: GetMessagesAsync(Guid, bool, Nullable<uint>, Nullable<DateTime>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of [messages](Message 'Guilded.Base.Content.Message') from the [channel](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_)#Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).channel 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>).channel')."
---

## AbstractGuildedClient.GetMessagesAsync(Guid, bool, Nullable<uint>, Nullable<DateTime>, Nullable<DateTime>) Method
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets a list of [messages](Message 'Guilded.Base.Content.Message') from the [channel](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_)#Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).channel 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>).channel').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.Message>> GetMessagesAsync(Guid channel, bool includePrivate=false, System.Nullable<uint> limit=null, System.Nullable<System.DateTime> before=null, System.Nullable<System.DateTime> after=null);
```

### Remarks
  
By default, private [messages](Message 'Guilded.Base.Content.Message') will not be fetched. However, if private [messages](Message 'Guilded.Base.Content.Message') need to be included, [includePrivate](AbstractGuildedClient.GetMessagesAsync(Guid,bool,Nullable_uint_,Nullable_DateTime_,Nullable_DateTime_)#Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).includePrivate 'Guilded.AbstractGuildedClient.GetMessagesAsync(Guid, bool, System.Nullable<uint>, System.Nullable<System.DateTime>, System.Nullable<System.DateTime>).includePrivate') parameter can be set as [true](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/bool').
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).includePrivate'></a>

`includePrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether to get private replies or not

<a name='Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).limit'></a>

`limit` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The limit of how many messages to get (default — `50`, min — `1`, max — `100`)

<a name='Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).before'></a>

`before` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The max limit of the creation date of fetched messages

<a name='Guilded.AbstractGuildedClient.GetMessagesAsync(Guid,bool,System.Nullable_uint_,System.Nullable_System.DateTime_,System.Nullable_System.DateTime_).after'></a>

`after` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The min limit of the creation date of fetched messages

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [messages](Message 'Guilded.Base.Content.Message')