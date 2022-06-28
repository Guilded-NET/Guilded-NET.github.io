---
title: CanceledBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [user](User 'Guilded.Base.Users.User') that cancelled [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarEvent.CanceledBy Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Gets the identifier of [user](User 'Guilded.Base.Users.User') that cancelled [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public System.Nullable<Guilded.Base.HashId> CanceledBy { get; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [Description](CalendarCancellation.Description 'Guilded.Base.Content.CalendarCancellation.Description')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')