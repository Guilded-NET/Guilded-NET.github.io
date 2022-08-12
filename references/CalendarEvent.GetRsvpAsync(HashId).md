---
title: GetRsvpAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the calendarEvent."
---

## CalendarEvent.GetRsvpAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Gets the calendarEvent.

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.CalendarRsvp> GetRsvpAsync(Guilded.Base.HashId user);
```
#### Parameters

<a name='Guilded.Base.Content.CalendarEvent.GetRsvpAsync(Guilded.Base.HashId).user'></a>

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