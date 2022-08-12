---
title: CalendarEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a calendar event in [a calendar channel](ChannelType#Guilded.Base.Servers.ChannelType.Calendar 'Guilded.Base.Servers.ChannelType.Calendar')."
---

## CalendarEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Content`](Guilded.Base.Content 'Guilded.Base.Content')

Represents a calendar event in [a calendar channel](ChannelType#Guilded.Base.Servers.ChannelType.Calendar 'Guilded.Base.Servers.ChannelType.Calendar').

```csharp
public class CalendarEvent : Guilded.Base.Content.ChannelContent<uint, Guilded.Base.HashId>,
Guilded.Base.Content.IReactibleContent,
Guilded.Base.IServerBased,
Guilded.Base.IHasParentClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Content.ChannelContent&lt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')[,](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') &#129106; CalendarEvent

Implements [IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent'), [IServerBased](IServerBased 'Guilded.Base.IServerBased'), [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

| Constructors | |
| :--- | :--- |
| [CalendarEvent(uint, Guid, HashId, string, HashId, DateTime, DateTime, string, Mentions, string, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, bool, CalendarCancellation)](CalendarEvent.CalendarEvent(uint,Guid,HashId,string,HashId,DateTime,DateTime,string,Mentions,string,Uri,Nullable_Color_,Nullable_uint_,bool,CalendarCancellation) 'Guilded.Base.Content.CalendarEvent.CalendarEvent(uint, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.DateTime, string, Guilded.Base.Content.Mentions, string, Uri, System.Nullable<Color>, System.Nullable<uint>, bool, Guilded.Base.Content.CalendarCancellation)') | Initializes a new instance of [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [CanceledBy](CalendarEvent.CanceledBy 'Guilded.Base.Content.CalendarEvent.CanceledBy') | Gets the identifier of [user](User 'Guilded.Base.Users.User') that cancelled [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Cancellation](CalendarEvent.Cancellation 'Guilded.Base.Content.CalendarEvent.Cancellation') | Gets the information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation. |
| [Color](CalendarEvent.Color 'Guilded.Base.Content.CalendarEvent.Color') | Gets the colour of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Description](CalendarEvent.Description 'Guilded.Base.Content.CalendarEvent.Description') | Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Duration](CalendarEvent.Duration 'Guilded.Base.Content.CalendarEvent.Duration') | Gets the duration of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') in minutes. |
| [EndsAt](CalendarEvent.EndsAt 'Guilded.Base.Content.CalendarEvent.EndsAt') | Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts. |
| [IsCanceled](CalendarEvent.IsCanceled 'Guilded.Base.Content.CalendarEvent.IsCanceled') | Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was cancelled. |
| [IsPrivate](CalendarEvent.IsPrivate 'Guilded.Base.Content.CalendarEvent.IsPrivate') | Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was set as private. |
| [Location](CalendarEvent.Location 'Guilded.Base.Content.CalendarEvent.Location') | Gets the physical or non-physical location of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [Mentions](CalendarEvent.Mentions 'Guilded.Base.Content.CalendarEvent.Mentions') | Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the description](CalendarEvent.Description 'Guilded.Base.Content.CalendarEvent.Description'). |
| [Name](CalendarEvent.Name 'Guilded.Base.Content.CalendarEvent.Name') | Gets the title of [the titled content](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [RsvpLimit](CalendarEvent.RsvpLimit 'Guilded.Base.Content.CalendarEvent.RsvpLimit') | Gets the limit of how many [users](User 'Guilded.Base.Users.User') can join [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [StartsAt](CalendarEvent.StartsAt 'Guilded.Base.Content.CalendarEvent.StartsAt') | Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts. |
| [Url](CalendarEvent.Url 'Guilded.Base.Content.CalendarEvent.Url') | Gets the URL to [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') services, place or anything related. |

| Methods | |
| :--- | :--- |
| [AddReactionAsync(uint)](CalendarEvent.AddReactionAsync(uint) 'Guilded.Base.Content.CalendarEvent.AddReactionAsync(uint)') | Adds emote to the content. |
| [DeleteAsync()](CalendarEvent.DeleteAsync() 'Guilded.Base.Content.CalendarEvent.DeleteAsync()') | Deletes the calendarEvent. |
| [GetRsvpAsync(HashId)](CalendarEvent.GetRsvpAsync(HashId) 'Guilded.Base.Content.CalendarEvent.GetRsvpAsync(Guilded.Base.HashId)') | Gets the calendarEvent. |
| [GetRsvpsAsync()](CalendarEvent.GetRsvpsAsync() 'Guilded.Base.Content.CalendarEvent.GetRsvpsAsync()') | Gets a list of [calendar events](CalendarEvent 'Guilded.Base.Content.CalendarEvent'). |
| [RemoveReactionAsync(uint)](CalendarEvent.RemoveReactionAsync(uint) 'Guilded.Base.Content.CalendarEvent.RemoveReactionAsync(uint)') | Removes emote from the content. |
| [RemoveRsvpAsync(HashId)](CalendarEvent.RemoveRsvpAsync(HashId) 'Guilded.Base.Content.CalendarEvent.RemoveRsvpAsync(Guilded.Base.HashId)') | Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [SetRsvpAsync(HashId, CalendarRsvpStatus)](CalendarEvent.SetRsvpAsync(HashId,CalendarRsvpStatus) 'Guilded.Base.Content.CalendarEvent.SetRsvpAsync(Guilded.Base.HashId, Guilded.Base.Content.CalendarRsvpStatus)') | Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp'). |
| [UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;TimeSpan&gt;, Nullable&lt;bool&gt;)](CalendarEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_TimeSpan_,Nullable_bool_) 'Guilded.Base.Content.CalendarEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<TimeSpan>, System.Nullable<bool>)') | Edits the calendarEvent. |
| [UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](CalendarEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.Base.Content.CalendarEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)') | Edits the calendarEvent. |

### See Also
- [CalendarCancellation](CalendarCancellation 'Guilded.Base.Content.CalendarCancellation')
- [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')
- [Message](Message 'Guilded.Base.Content.Message')