---
title: GetRsvpAsync(Guid, uint, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [calendarEvent](BaseGuildedClient.GetRsvpAsync(Guid,uint,HashId)#Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid,uint,Guilded.Base.HashId).calendarEvent 'Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid, uint, Guilded.Base.HashId).calendarEvent')."
---

## BaseGuildedClient.GetRsvpAsync(Guid, uint, HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [calendarEvent](BaseGuildedClient.GetRsvpAsync(Guid,uint,HashId)#Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid,uint,Guilded.Base.HashId).calendarEvent 'Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid, uint, Guilded.Base.HashId).calendarEvent').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.CalendarRsvp> GetRsvpAsync(Guid channel, uint calendarEvent, Guilded.Base.HashId user);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid,uint,Guilded.Base.HashId).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid,uint,Guilded.Base.HashId).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') where the [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') is

<a name='Guilded.Base.BaseGuildedClient.GetRsvpAsync(Guid,uint,Guilded.Base.HashId).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') to get [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')