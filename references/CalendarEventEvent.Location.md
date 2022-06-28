---
title: Location
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarEventEvent.Location Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEventEvent`](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')

Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public string? Location { get; }
```

### Remarks
  
The contents are formatted in Markdown. This includes images and videos, which are in the format of `![](source_url)`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Markdown string

### See Also
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [Name](CalendarEvent.Name 'Guilded.Base.Content.CalendarEvent.Name')
- [Location](CalendarEvent.Location 'Guilded.Base.Content.CalendarEvent.Location')