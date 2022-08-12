---
title: SetAsync(CalendarRsvpStatus)
layout: references
section: references
tags:
  - references
  - method
description: "

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## CalendarRsvpEvent.SetAsync(CalendarRsvpStatus) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarRsvpEvent`](CalendarRsvpEvent 'Guilded.Base.Events.CalendarRsvpEvent')

Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public System.Threading.Tasks.Task<Guilded.Base.Content.CalendarRsvp> SetAsync(Guilded.Base.Content.CalendarRsvpStatus status);
```
#### Parameters

<a name='Guilded.Base.Events.CalendarRsvpEvent.SetAsync(Guilded.Base.Content.CalendarRsvpStatus).status'></a>

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