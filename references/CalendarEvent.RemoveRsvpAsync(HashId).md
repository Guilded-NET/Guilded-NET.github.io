---
title: RemoveRsvpAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## CalendarEvent.RemoveRsvpAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public System.Threading.Tasks.Task RemoveRsvpAsync(Guilded.Base.HashId user);
```
#### Parameters

<a name='Guilded.Base.Content.CalendarEvent.RemoveRsvpAsync(Guilded.Base.HashId).user'></a>

`user` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') to remove [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')