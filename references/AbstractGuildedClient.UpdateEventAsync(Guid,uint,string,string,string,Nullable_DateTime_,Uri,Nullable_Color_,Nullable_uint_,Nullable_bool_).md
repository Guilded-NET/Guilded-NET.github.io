---
title: UpdateEventAsync(Guid, uint, string, string, string, Nullable<DateTime>, Uri, Nullable<Color>, Nullable<uint>, Nullable<bool>)
layout: references
section: references
tags:
  - references
  - method
description: "

Edits the specified [calendarEvent](AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_)#Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).calendarEvent 'Guilded.AbstractGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>).calendarEvent')."
---

## AbstractGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, Nullable<DateTime>, Uri, Nullable<Color>, Nullable<uint>, Nullable<bool>) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Edits the specified [calendarEvent](AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_)#Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).calendarEvent 'Guilded.AbstractGuildedClient.UpdateEventAsync(Guid, uint, string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>).calendarEvent').

```csharp
public override System.Threading.Tasks.Task<Guilded.Base.Content.CalendarEvent> UpdateEventAsync(Guid channel, uint calendarEvent, string? name=null, string? description=null, string? location=null, System.Nullable<System.DateTime> startsAt=null, Uri? url=null, System.Nullable<Color> color=null, System.Nullable<uint> duration=null, System.Nullable<bool> isPrivate=null);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to update/edit

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new name of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new description of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).location'></a>

`location` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The new location of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).startsAt'></a>

`startsAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The new starting date of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The new URL of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).color'></a>

`color` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The new colour of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).duration'></a>

`duration` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The new length/duration of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.AbstractGuildedClient.UpdateEventAsync(Guid,uint,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_bool_).isPrivate'></a>

`isPrivate` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

Whether the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is now private or not private anymore

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Updated [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')