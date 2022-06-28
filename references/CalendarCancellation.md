---
title: CalendarCancellation
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the cancellation of [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarCancellation Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents the cancellation of [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public class CalendarCancellation : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; CalendarCancellation

| Constructors | |
| :--- | :--- |
| [CalendarCancellation(string, HashId)](CalendarCancellation.CalendarCancellation(string,HashId) 'Guilded.Base.Content.CalendarCancellation.CalendarCancellation(string, Guilded.Base.HashId)') | Initializes a new instance of [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CreatedBy](CalendarCancellation.CreatedBy 'Guilded.Base.Content.CalendarCancellation.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that cancelled [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Description](CalendarCancellation.Description 'Guilded.Base.Content.CalendarCancellation.Description') | Gets the reason why [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was cancelled. |

### See Also
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')
- [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')