---
title: RemoveRsvpAsync(Guid, uint, HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## AbstractGuildedClient.RemoveRsvpAsync(Guid, uint, HashId) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public override System.Threading.Tasks.Task RemoveRsvpAsync(Guid channel, uint calendarEvent, Guilded.Base.HashId user);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.RemoveRsvpAsync(Guid,uint,Guilded.Base.HashId).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.RemoveRsvpAsync(Guid,uint,Guilded.Base.HashId).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') where [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') is

<a name='Guilded.AbstractGuildedClient.RemoveRsvpAsync(Guid,uint,Guilded.Base.HashId).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') to remove [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')