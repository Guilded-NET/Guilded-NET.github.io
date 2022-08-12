---
title: GetRsvpsAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarEvent.GetRsvpsAsync() Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`CalendarEvent`](CalendarEvent 'Guilded.Base.Content.CalendarEvent')

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.CalendarRsvp>> GetRsvpsAsync();
```

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [calendar event RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')