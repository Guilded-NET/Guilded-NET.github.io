---
title: CalendarEvent(uint, Guid, HashId, string, HashId, DateTime, DateTime, string, Mentions, string, Uri, Nullable<Color>, Nullable<uint>, bool, CalendarCancellation)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent') from the specified JSON properties."
---

## CalendarEvent(uint, Guid, HashId, string, HashId, DateTime, DateTime, string, Mentions, string, Uri, Nullable<Color>, Nullable<uint>, bool, CalendarCancellation) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Initializes a new instance of [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent') from the specified JSON properties.

```csharp
public CalendarEvent(uint id, Guid channelId, Guilded.Base.HashId serverId, string name, Guilded.Base.HashId createdBy, System.DateTime createdAt, System.DateTime startsAt, string? description=null, Guilded.Base.Content.Mentions? mentions=null, string? location=null, Uri? url=null, System.Nullable<Color> color=null, System.Nullable<uint> duration=null, bool isPrivate=false, Guilded.Base.Content.CalendarCancellation? cancellation=null);
```
#### Parameters

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).id'></a>

`id` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the channel content

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the channel where the channel content are

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the channel content are

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The title of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that created [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).createdAt'></a>

`createdAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') were created

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).startsAt'></a>

`startsAt` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')

The date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).mentions'></a>

`mentions` [Mentions](Mentions 'Guilded.Base.Content.Mentions')

[The mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the description](CalendarEvent.Description 'Guilded.Base.Content.CalendarEvent.Description')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).location'></a>

`location` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The physical or non-physical location of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).url'></a>

`url` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') services, place or anything related

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).color'></a>

`color` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The colour of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).duration'></a>

`duration` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The duration of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') in minutes

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).isPrivate'></a>

`isPrivate` [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')

Whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was set as private

<a name='Guilded.Base.Content.CalendarEvent.CalendarEvent(uint,Guid,Guilded.Base.HashId,string,Guilded.Base.HashId,System.DateTime,System.DateTime,string,Guilded.Base.Content.Mentions,string,Uri,System.Nullable_Color_,System.Nullable_uint_,bool,Guilded.Base.Content.CalendarCancellation).cancellation'></a>

`cancellation` [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')

The information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation

### See Also
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')