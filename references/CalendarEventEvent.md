---
title: CalendarEventEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone creates, updates or deletes [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')."
---

## CalendarEventEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone creates, updates or deletes [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').

```csharp
public class CalendarEventEvent : Guilded.Base.BaseModel,
Guilded.Base.Events.IServerEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; CalendarEventEvent

Implements [IServerEvent](IServerEvent 'Guilded.Base.Events.IServerEvent')

| Constructors | |
| :--- | :--- |
| [CalendarEventEvent(CalendarEvent, HashId)](CalendarEventEvent.CalendarEventEvent(CalendarEvent,HashId) 'Guilded.Base.Events.CalendarEventEvent.CalendarEventEvent(Guilded.Base.Content.CalendarEvent, Guilded.Base.HashId)') | Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CalendarEvent](CalendarEventEvent.CalendarEvent 'Guilded.Base.Events.CalendarEventEvent.CalendarEvent') | Gets [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event. |
| [CanceledBy](CalendarEventEvent.CanceledBy 'Guilded.Base.Events.CalendarEventEvent.CanceledBy') | Gets the information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation. |
| [Cancellation](CalendarEventEvent.Cancellation 'Guilded.Base.Events.CalendarEventEvent.Cancellation') | Gets the information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation. |
| [ChannelId](CalendarEventEvent.ChannelId 'Guilded.Base.Events.CalendarEventEvent.ChannelId') | Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are. |
| [Color](CalendarEventEvent.Color 'Guilded.Base.Events.CalendarEventEvent.Color') | Gets the colour of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [CreatedAt](CalendarEventEvent.CreatedAt 'Guilded.Base.Events.CalendarEventEvent.CreatedAt') | Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created. |
| [CreatedBy](CalendarEventEvent.CreatedBy 'Guilded.Base.Events.CalendarEventEvent.CreatedBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'). |
| [Description](CalendarEventEvent.Description 'Guilded.Base.Events.CalendarEventEvent.Description') | Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Duration](CalendarEventEvent.Duration 'Guilded.Base.Events.CalendarEventEvent.Duration') | Gets the duration of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') in minutes. |
| [EndsAt](CalendarEventEvent.EndsAt 'Guilded.Base.Events.CalendarEventEvent.EndsAt') | Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts. |
| [IsCanceled](CalendarEventEvent.IsCanceled 'Guilded.Base.Events.CalendarEventEvent.IsCanceled') | Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was cancelled. |
| [IsPrivate](CalendarEventEvent.IsPrivate 'Guilded.Base.Events.CalendarEventEvent.IsPrivate') | Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was set as private. |
| [Location](CalendarEventEvent.Location 'Guilded.Base.Events.CalendarEventEvent.Location') | Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Mentions](CalendarEventEvent.Mentions 'Guilded.Base.Events.CalendarEventEvent.Mentions') | Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the description](CalendarEvent.Description 'Guilded.Base.Content.CalendarEvent.Description'). |
| [Name](CalendarEventEvent.Name 'Guilded.Base.Events.CalendarEventEvent.Name') | Gets the title of [the titled content](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [ServerId](CalendarEventEvent.ServerId 'Guilded.Base.Events.CalendarEventEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred. |
| [StartsAt](CalendarEventEvent.StartsAt 'Guilded.Base.Events.CalendarEventEvent.StartsAt') | Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts. |
| [Url](CalendarEventEvent.Url 'Guilded.Base.Events.CalendarEventEvent.Url') | Gets the URL to [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') services, place or anything related. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](CalendarEventEvent.AddReactionAsync(uint) 'Guilded.Base.Events.CalendarEventEvent.AddReactionAsync(uint)') | Adds emote to the content. |
| [DeleteAsync()](CalendarEventEvent.DeleteAsync() 'Guilded.Base.Events.CalendarEventEvent.DeleteAsync()') | Deletes the calendarEvent. |
| [RemoveReactionAsync(uint)](CalendarEventEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.CalendarEventEvent.RemoveReactionAsync(uint)') | Removes emote from the content. |
| [UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;TimeSpan&gt;, Nullable&lt;bool&gt;)](CalendarEventEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_TimeSpan_,Nullable_bool_) 'Guilded.Base.Events.CalendarEventEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<TimeSpan>, System.Nullable<bool>)') | Edits the calendarEvent. |
| [UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](CalendarEventEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.Base.Events.CalendarEventEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)') | Edits the calendarEvent. |

### See Also
- [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')
- [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')