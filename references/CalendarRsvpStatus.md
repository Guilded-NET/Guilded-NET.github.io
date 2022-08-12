---
title: CalendarRsvpStatus
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents the status of [event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## CalendarRsvpStatus Enum
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the status of [event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public enum CalendarRsvpStatus
```
### Fields

<a name='Guilded.Base.Content.CalendarRsvpStatus.Declined'></a>

`Declined` 2

The [user](User 'Guilded.Base.Users.User') will not attend the [event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

### See Also
- [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')
- [Going](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Going 'Guilded.Base.Content.CalendarRsvpStatus.Going')
- [Maybe](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Maybe 'Guilded.Base.Content.CalendarRsvpStatus.Maybe')
- [Invited](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Invited 'Guilded.Base.Content.CalendarRsvpStatus.Invited')
- [Waitlisted](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Waitlisted 'Guilded.Base.Content.CalendarRsvpStatus.Waitlisted')

<a name='Guilded.Base.Content.CalendarRsvpStatus.Going'></a>

`Going` 0

The [user](User 'Guilded.Base.Users.User') will attend the [event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

### See Also
- [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')
- [Maybe](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Maybe 'Guilded.Base.Content.CalendarRsvpStatus.Maybe')
- [Declined](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Declined 'Guilded.Base.Content.CalendarRsvpStatus.Declined')
- [Invited](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Invited 'Guilded.Base.Content.CalendarRsvpStatus.Invited')
- [Waitlisted](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Waitlisted 'Guilded.Base.Content.CalendarRsvpStatus.Waitlisted')

<a name='Guilded.Base.Content.CalendarRsvpStatus.Invited'></a>

`Invited` 3

The [user](User 'Guilded.Base.Users.User') has been invited to attend the [event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') by [someone else](CalendarRsvp.CreatedBy 'Guilded.Base.Content.CalendarRsvp.CreatedBy').

### See Also
- [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')
- [Going](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Going 'Guilded.Base.Content.CalendarRsvpStatus.Going')
- [Maybe](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Maybe 'Guilded.Base.Content.CalendarRsvpStatus.Maybe')
- [Declined](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Declined 'Guilded.Base.Content.CalendarRsvpStatus.Declined')
- [Waitlisted](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Waitlisted 'Guilded.Base.Content.CalendarRsvpStatus.Waitlisted')

<a name='Guilded.Base.Content.CalendarRsvpStatus.Maybe'></a>

`Maybe` 1

The [user](User 'Guilded.Base.Users.User') has not decided if they will attend the [event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

### See Also
- [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')
- [Going](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Going 'Guilded.Base.Content.CalendarRsvpStatus.Going')
- [Declined](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Declined 'Guilded.Base.Content.CalendarRsvpStatus.Declined')
- [Invited](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Invited 'Guilded.Base.Content.CalendarRsvpStatus.Invited')
- [Waitlisted](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Waitlisted 'Guilded.Base.Content.CalendarRsvpStatus.Waitlisted')

<a name='Guilded.Base.Content.CalendarRsvpStatus.Waitlisted'></a>

`Waitlisted` 4

The [user](User 'Guilded.Base.Users.User') is asked for a response on attending the [event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

### See Also
- [CalendarRsvpStatus](CalendarRsvpStatus 'Guilded.Base.Content.CalendarRsvpStatus')
- [Going](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Going 'Guilded.Base.Content.CalendarRsvpStatus.Going')
- [Maybe](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Maybe 'Guilded.Base.Content.CalendarRsvpStatus.Maybe')
- [Declined](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Declined 'Guilded.Base.Content.CalendarRsvpStatus.Declined')
- [Invited](CalendarRsvpStatus#Guilded.Base.Content.CalendarRsvpStatus.Invited 'Guilded.Base.Content.CalendarRsvpStatus.Invited')

### See Also
- [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [MessageType](MessageType 'Guilded.Base.Content.MessageType')