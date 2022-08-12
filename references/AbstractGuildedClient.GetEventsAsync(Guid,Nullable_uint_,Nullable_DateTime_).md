---
title: GetEventsAsync(Guid, Nullable<uint>, Nullable<DateTime>)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## AbstractGuildedClient.GetEventsAsync(Guid, Nullable<uint>, Nullable<DateTime>) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.CalendarEvent>> GetEventsAsync(Guid channel, System.Nullable<uint> limit=null, System.Nullable<System.DateTime> before=null);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetEventsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetEventsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).limit'></a>

`limit` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The limit of how many [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to get (default — `25`, values — `(0, 100]`)

<a name='Guilded.AbstractGuildedClient.GetEventsAsync(Guid,System.Nullable_uint_,System.Nullable_System.DateTime_).before'></a>

`before` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The max limit of the creation date of fetched [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent')