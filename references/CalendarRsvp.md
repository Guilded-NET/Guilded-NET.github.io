---
title: CalendarRsvp
layout: references
section: references
tags:
  - references
  - class
description: "

Represents [user's](User 'Guilded.Base.Users.User') invitation to or [user's](User 'Guilded.Base.Users.User') status on [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarRsvp Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents [user's](User 'Guilded.Base.Users.User') invitation to or [user's](User 'Guilded.Base.Users.User') status on [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public class CalendarRsvp : Guilded.Base.ContentModel,
Guilded.Base.Content.ICreatableContent,
Guilded.Base.Content.IUpdatableContent,
Guilded.Base.IServerBased,
Guilded.Base.IHasParentClient,
Guilded.Base.IChannelBased
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; CalendarRsvp

Implements [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent'), [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent'), [IServerBased](IServerBased 'Guilded.Base.IServerBased'), [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient'), [IChannelBased](IChannelBased 'Guilded.Base.IChannelBased')

| Constructors | |
| :--- | :--- |
| [CalendarRsvp(uint, HashId, Guid, HashId, CalendarRsvpStatus, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](CalendarRsvp.CalendarRsvp(uint,HashId,Guid,HashId,CalendarRsvpStatus,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.CalendarRsvp.CalendarRsvp(uint, Guilded.Base.HashId, Guid, Guilded.Base.HashId, Guilded.Base.Content.CalendarRsvpStatus, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)') | Initializes a new instance of [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CalendarEventId](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') | Gets the identifier of [the parent calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [ChannelId](CalendarRsvp.ChannelId 'Guilded.Base.Content.CalendarRsvp.ChannelId') | Gets the identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is. |
| [CreatedAt](CalendarRsvp.CreatedAt 'Guilded.Base.Content.CalendarRsvp.CreatedAt') | Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was created. |
| [CreatedBy](CalendarRsvp.CreatedBy 'Guilded.Base.Content.CalendarRsvp.CreatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who created [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [ServerId](CalendarRsvp.ServerId 'Guilded.Base.Content.CalendarRsvp.ServerId') | Gets the identifier of [the parent server](Server 'Guilded.Base.Servers.Server') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is. |
| [Status](CalendarRsvp.Status 'Guilded.Base.Content.CalendarRsvp.Status') | Gets the status of the [user's](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UpdatedAt](CalendarRsvp.UpdatedAt 'Guilded.Base.Content.CalendarRsvp.UpdatedAt') | Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was updated. |
| [UpdatedBy](CalendarRsvp.UpdatedBy 'Guilded.Base.Content.CalendarRsvp.UpdatedBy') | Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UserId](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') whose RSVP it is. |

| Methods | |
| :--- | :--- |
| [RemoveAsync()](CalendarRsvp.RemoveAsync() 'Guilded.Base.Content.CalendarRsvp.RemoveAsync()') | Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [SetAsync(CalendarRsvpStatus)](CalendarRsvp.SetAsync(CalendarRsvpStatus) 'Guilded.Base.Content.CalendarRsvp.SetAsync(Guilded.Base.Content.CalendarRsvpStatus)') | Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |

### See Also
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')
- [User](User 'Guilded.Base.Users.User')
- [Member](Member 'Guilded.Base.Servers.Member')