---
title: CalendarCancellation(string, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation') from the specified JSON properties."
---

## CalendarCancellation(string, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarCancellation`](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')

Initializes a new instance of [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation') from the specified JSON properties.

```csharp
public CalendarCancellation(string description, Guilded.Base.HashId createdBy);
```
#### Parameters

<a name='Guilded.Base.Content.CalendarCancellation.CalendarCancellation(string,Guilded.Base.HashId).description'></a>

`description` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The reason why [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was cancelled

<a name='Guilded.Base.Content.CalendarCancellation.CalendarCancellation(string,Guilded.Base.HashId).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [user](User 'Guilded.Base.Users.User') that cancelled [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

### See Also
- [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')