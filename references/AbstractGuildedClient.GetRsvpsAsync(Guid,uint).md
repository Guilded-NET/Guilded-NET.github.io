---
title: GetRsvpsAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## AbstractGuildedClient.GetRsvpsAsync(Guid, uint) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public override System.Threading.Tasks.Task<System.Collections.Generic.IList<Guilded.Base.Content.CalendarRsvp>> GetRsvpsAsync(Guid channel, uint calendarEvent);
```
#### Parameters

<a name='Guilded.AbstractGuildedClient.GetRsvpsAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of the parent [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.AbstractGuildedClient.GetRsvpsAsync(Guid,uint).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of the [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to get [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Collections.Generic.IList&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IList-1 'System.Collections.Generic.IList`1')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
List of [calendar event RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')