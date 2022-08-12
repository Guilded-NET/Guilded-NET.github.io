---
title: SetRsvpAsync(HashId, CalendarRsvpStatus)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## CalendarEvent.SetRsvpAsync(HashId, CalendarRsvpStatus) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.CalendarRsvp> SetRsvpAsync(Guilded.Base.HashId user, Guilded.Base.Content.CalendarRsvpStatus status);
```
#### Parameters

<a name='Guilded.Base.Content.CalendarEvent.SetRsvpAsync(Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') to set [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

<a name='Guilded.Base.Content.CalendarEvent.SetRsvpAsync(Guilded.Base.HashId,Guilded.Base.Content.CalendarRsvpStatus).status'></a>

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