---
title: UpdatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')."
---

## CalendarRsvpManyEvent.UpdatedBy Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarRsvpManyEvent`](CalendarRsvpManyEvent 'Guilded.Base.Events.CalendarRsvpManyEvent')

Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').

```csharp
public System.Nullable<Guilded.Base.HashId> UpdatedBy { get; }
```

### Remarks
  
Only includes [the user](User 'Guilded.Base.Users.User') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') most recently.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')?

### See Also
- [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')
- [UpdatedAt](CalendarRsvp.UpdatedAt 'Guilded.Base.Content.CalendarRsvp.UpdatedAt')
- [CreatedBy](CalendarRsvp.CreatedBy 'Guilded.Base.Content.CalendarRsvp.CreatedBy')
- [CreatedAt](CalendarRsvp.CreatedAt 'Guilded.Base.Content.CalendarRsvp.CreatedAt')