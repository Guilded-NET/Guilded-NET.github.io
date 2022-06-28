---
title: DeleteEventAsync(Guid, uint)
layout: references
section: references
tags:
  - references
  - method
description: "

Deletes the [calendarEvent](BaseGuildedClient.DeleteEventAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid,uint).calendarEvent 'Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid, uint).calendarEvent')."
---

## BaseGuildedClient.DeleteEventAsync(Guid, uint) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Deletes the [calendarEvent](BaseGuildedClient.DeleteEventAsync(Guid,uint)#Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid,uint).calendarEvent 'Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid, uint).calendarEvent').

```csharp
public abstract System.Threading.Tasks.Task DeleteEventAsync(Guid channel, uint calendarEvent);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid,uint).channel'></a>

`channel` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

<a name='Guilded.Base.BaseGuildedClient.DeleteEventAsync(Guid,uint).calendarEvent'></a>

`calendarEvent` [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')

The identifier of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') to delete

#### Exceptions

[GuildedException](GuildedException 'Guilded.Base.GuildedException')

[GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')

[GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')

[GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')