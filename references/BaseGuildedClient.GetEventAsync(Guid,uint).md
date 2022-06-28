---
title: GetEventAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the [calendarEvent](BaseGuildedClient.GetEventAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.GetEventAsync(Guid,uint).calendarEvent 'Guilded.Base.BaseGuildedClient.GetEventAsync(Guid, uint).calendarEvent')."
---

## BaseGuildedClient.GetEventAsync(Guid, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the [calendarEvent](BaseGuildedClient.GetEventAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.GetEventAsync(Guid,uint).calendarEvent 'Guilded.Base.BaseGuildedClient.GetEventAsync(Guid, uint).calendarEvent').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Content.CalendarEvent> GetEventAsync(Guid channel, uint calendarEvent);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetEventAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.GetEventAsync(Guid,uint).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to get

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Specified [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')