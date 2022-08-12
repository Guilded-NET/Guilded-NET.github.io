---
title: SetRsvpAsync(Guid, uint, HashId, CalendarRsvpStatus)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## BaseGuildedClient.SetRsvpAsync(Guid, uint, HashId, CalendarRsvpStatus) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.CalendarRsvp> SetRsvpAsync(Guid channel, uint calendarEvent, Guilded.Base.HashId user, Guilded.Base.Content.CalendarRsvpStatus status);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.SetRsvpAsync(Guid,uint,Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.SetRsvpAsync(Guid,uint,Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') where the [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') is

<a name='Guilded.Base.BaseGuildedClient.SetRsvpAsync(Guid,uint,Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') to set [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

<a name='Guilded.Base.BaseGuildedClient.SetRsvpAsync(Guid,uint,Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).status'></a>

`status` [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')

The status of [the RSVP](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to set

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Set [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')