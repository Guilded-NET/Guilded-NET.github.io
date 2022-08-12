---
title: CreateEventAsync(Guid, string, string, string, Nullable<DateTime>, Uri, Nullable<Color>, Nullable<uint>, Nullable<uint>, bool)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## BaseGuildedClient.CreateEventAsync(Guid, string, string, string, Nullable<DateTime>, Uri, Nullable<Color>, Nullable<uint>, Nullable<uint>, bool) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates a [new calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.CalendarEvent> CreateEventAsync(Guid channel, string name, string? description=null, string? location=null, System.Nullable<System.DateTime> startsAt=null, Uri? url=null, System.Nullable<Color> color=null, System.Nullable<uint> duration=null, System.Nullable<uint> rsvpLimit=null, bool isPrivate=false);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).location'></a>

`location` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The physical or non-physical location of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).startsAt'></a>

`startsAt` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') services, place or anything related

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).color'></a>

`color` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The colour of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).duration'></a>

`duration` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The duration of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') in minutes

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).rsvpLimit'></a>

`rsvpLimit` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The limit of how many [users](User 'Guilded.Base.Users.User') can be invited or attend the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.BaseGuildedClient.CreateEventAsync(Guid,string,string,string,System.Nullable_System.DateTime_,Uri,System.Nullable_Color_,System.Nullable_uint_,System.Nullable_uint_,bool).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') is private

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Created [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')