---
title: Guilded.Base.Events
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Events Namespace
- **[CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')** `Class`
  Represents an event that occurs when someone creates, updates or deletes [a calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CalendarEventEvent(CalendarEvent, HashId)](CalendarEventEvent.CalendarEventEvent(CalendarEvent,HashId) 'Guilded.Base.Events.CalendarEventEvent.CalendarEventEvent(Guilded.Base.Content.CalendarEvent, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties.
  - **[CalendarEvent](CalendarEventEvent.CalendarEvent 'Guilded.Base.Events.CalendarEventEvent.CalendarEvent')** `Property`
    Gets [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event.
  - **[CanceledBy](CalendarEventEvent.CanceledBy 'Guilded.Base.Events.CalendarEventEvent.CanceledBy')** `Property`
    Gets the information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation.
  - **[Cancellation](CalendarEventEvent.Cancellation 'Guilded.Base.Events.CalendarEventEvent.Cancellation')** `Property`
    Gets the information about [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') cancellation.
  - **[ChannelId](CalendarEventEvent.ChannelId 'Guilded.Base.Events.CalendarEventEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[Color](CalendarEventEvent.Color 'Guilded.Base.Events.CalendarEventEvent.Color')** `Property`
    Gets the colour of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CreatedAt](CalendarEventEvent.CreatedAt 'Guilded.Base.Events.CalendarEventEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](CalendarEventEvent.CreatedBy 'Guilded.Base.Events.CalendarEventEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Description](CalendarEventEvent.Description 'Guilded.Base.Events.CalendarEventEvent.Description')** `Property`
    Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[Duration](CalendarEventEvent.Duration 'Guilded.Base.Events.CalendarEventEvent.Duration')** `Property`
    Gets the duration of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') in minutes.
  - **[EndsAt](CalendarEventEvent.EndsAt 'Guilded.Base.Events.CalendarEventEvent.EndsAt')** `Property`
    Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts.
  - **[IsCanceled](CalendarEventEvent.IsCanceled 'Guilded.Base.Events.CalendarEventEvent.IsCanceled')** `Property`
    Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was cancelled.
  - **[IsPrivate](CalendarEventEvent.IsPrivate 'Guilded.Base.Events.CalendarEventEvent.IsPrivate')** `Property`
    Gets whether [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') was set as private.
  - **[Location](CalendarEventEvent.Location 'Guilded.Base.Events.CalendarEventEvent.Location')** `Property`
    Gets the description of [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[Mentions](CalendarEventEvent.Mentions 'Guilded.Base.Events.CalendarEventEvent.Mentions')** `Property`
    Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the description](CalendarEvent.Description 'Guilded.Base.Content.CalendarEvent.Description').
  - **[Name](CalendarEventEvent.Name 'Guilded.Base.Events.CalendarEventEvent.Name')** `Property`
    Gets the title of [the titled content](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[StartsAt](CalendarEventEvent.StartsAt 'Guilded.Base.Events.CalendarEventEvent.StartsAt')** `Property`
    Gets the date when [the calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') starts.
  - **[Url](CalendarEventEvent.Url 'Guilded.Base.Events.CalendarEventEvent.Url')** `Property`
    Gets the URL to [the calendar event's](CalendarEvent 'Guilded.Base.Content.CalendarEvent') services, place or anything related.
  - **[AddReactionAsync(uint)](CalendarEventEvent.AddReactionAsync(uint) 'Guilded.Base.Events.CalendarEventEvent.AddReactionAsync(uint)')** `Method`
    Adds emote to the content.
  - **[DeleteAsync()](CalendarEventEvent.DeleteAsync() 'Guilded.Base.Events.CalendarEventEvent.DeleteAsync()')** `Method`
    Deletes the calendarEvent.
  - **[RemoveReactionAsync(uint)](CalendarEventEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.CalendarEventEvent.RemoveReactionAsync(uint)')** `Method`
    Removes emote from the content.
  - **[UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;TimeSpan&gt;, Nullable&lt;bool&gt;)](CalendarEventEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_TimeSpan_,Nullable_bool_) 'Guilded.Base.Events.CalendarEventEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<TimeSpan>, System.Nullable<bool>)')** `Method`
    Edits the calendarEvent.
  - **[UpdateAsync(string, string, string, Nullable&lt;DateTime&gt;, Uri, Nullable&lt;Color&gt;, Nullable&lt;uint&gt;, Nullable&lt;bool&gt;)](CalendarEventEvent.UpdateAsync(string,string,string,Nullable_DateTime_,Uri,Nullable_Color_,Nullable_uint_,Nullable_bool_) 'Guilded.Base.Events.CalendarEventEvent.UpdateAsync(string, string, string, System.Nullable<System.DateTime>, Uri, System.Nullable<Color>, System.Nullable<uint>, System.Nullable<bool>)')** `Method`
    Edits the calendarEvent.
- **[CalendarRsvpEvent](CalendarRsvpEvent 'Guilded.Base.Events.CalendarRsvpEvent')** `Class`
  Represents an event that occurs when someone adds, removes or edits a [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CalendarRsvpEvent(CalendarRsvp, HashId)](CalendarRsvpEvent.CalendarRsvpEvent(CalendarRsvp,HashId) 'Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvpEvent(Guilded.Base.Content.CalendarRsvp, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties.
  - **[CalendarEventId](CalendarRsvpEvent.CalendarEventId 'Guilded.Base.Events.CalendarRsvpEvent.CalendarEventId')** `Property`
    Gets the identifier of [the parent calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CalendarRsvp](CalendarRsvpEvent.CalendarRsvp 'Guilded.Base.Events.CalendarRsvpEvent.CalendarRsvp')** `Property`
    Gets [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event.
  - **[ChannelId](CalendarRsvpEvent.ChannelId 'Guilded.Base.Events.CalendarRsvpEvent.ChannelId')** `Property`
    Gets the identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is.
  - **[CreatedAt](CalendarRsvpEvent.CreatedAt 'Guilded.Base.Events.CalendarRsvpEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](CalendarRsvpEvent.CreatedBy 'Guilded.Base.Events.CalendarRsvpEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Status](CalendarRsvpEvent.Status 'Guilded.Base.Events.CalendarRsvpEvent.Status')** `Property`
    Gets the status of the [user's](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[UpdatedAt](CalendarRsvpEvent.UpdatedAt 'Guilded.Base.Events.CalendarRsvpEvent.UpdatedAt')** `Property`
    Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was updated.
  - **[UpdatedBy](CalendarRsvpEvent.UpdatedBy 'Guilded.Base.Events.CalendarRsvpEvent.UpdatedBy')** `Property`
    Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[UserId](CalendarRsvpEvent.UserId 'Guilded.Base.Events.CalendarRsvpEvent.UserId')** `Property`
    Gets the identifier of [the user](User 'Guilded.Base.Users.User') whose RSVP it is.
  - **[RemoveAsync()](CalendarRsvpEvent.RemoveAsync() 'Guilded.Base.Events.CalendarRsvpEvent.RemoveAsync()')** `Method`
    Deletes the specified [calendar event RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[SetAsync(CalendarRsvpStatus)](CalendarRsvpEvent.SetAsync(CalendarRsvpStatus) 'Guilded.Base.Events.CalendarRsvpEvent.SetAsync(Guilded.Base.Content.CalendarRsvpStatus)')** `Method`
    Creates or edits a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
- **[CalendarRsvpManyEvent](CalendarRsvpManyEvent 'Guilded.Base.Events.CalendarRsvpManyEvent')** `Class`
  Represents an event that occurs when someone adds, removes or edits multiple [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CalendarRsvpManyEvent(IList&lt;CalendarRsvp&gt;, HashId)](CalendarRsvpManyEvent.CalendarRsvpManyEvent(IList_CalendarRsvp_,HashId) 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvpManyEvent(System.Collections.Generic.IList<Guilded.Base.Content.CalendarRsvp>, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent') from the specified JSON properties.
  - **[CalendarEventId](CalendarRsvpManyEvent.CalendarEventId 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarEventId')** `Property`
    Gets the identifier of [the parent calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[CalendarRsvps](CalendarRsvpManyEvent.CalendarRsvps 'Guilded.Base.Events.CalendarRsvpManyEvent.CalendarRsvps')** `Property`
    Gets the list of [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') of a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent') received from the event.
  - **[ChannelId](CalendarRsvpManyEvent.ChannelId 'Guilded.Base.Events.CalendarRsvpManyEvent.ChannelId')** `Property`
    Gets the identifier of [the parent channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the calendar event](CalendarRsvp.CalendarEventId 'Guilded.Base.Content.CalendarRsvp.CalendarEventId') is.
  - **[Count](CalendarRsvpManyEvent.Count 'Guilded.Base.Events.CalendarRsvpManyEvent.Count')** `Property`
    Gets the count of how many [RSVPs](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') have been changed.
  - **[CreatedAt](CalendarRsvpManyEvent.CreatedAt 'Guilded.Base.Events.CalendarRsvpManyEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](CalendarRsvpManyEvent.CreatedBy 'Guilded.Base.Events.CalendarRsvpManyEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[First](CalendarRsvpManyEvent.First 'Guilded.Base.Events.CalendarRsvpManyEvent.First')** `Property`
    Gets the first [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') in a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[Last](CalendarRsvpManyEvent.Last 'Guilded.Base.Events.CalendarRsvpManyEvent.Last')** `Property`
    Gets the last [RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') in a [calendar event](CalendarEvent 'Guilded.Base.Content.CalendarEvent').
  - **[Status](CalendarRsvpManyEvent.Status 'Guilded.Base.Events.CalendarRsvpManyEvent.Status')** `Property`
    Gets the status of the [user's](CalendarRsvp.UserId 'Guilded.Base.Content.CalendarRsvp.UserId')[RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[UpdatedAt](CalendarRsvpManyEvent.UpdatedAt 'Guilded.Base.Events.CalendarRsvpManyEvent.UpdatedAt')** `Property`
    Gets the date when [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp') was updated.
  - **[UpdatedBy](CalendarRsvpManyEvent.UpdatedBy 'Guilded.Base.Events.CalendarRsvpManyEvent.UpdatedBy')** `Property`
    Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the RSVP](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp').
  - **[UserId](CalendarRsvpManyEvent.UserId 'Guilded.Base.Events.CalendarRsvpManyEvent.UserId')** `Property`
    Gets the identifier of [the user](User 'Guilded.Base.Users.User') whose RSVP it is.
- **[ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')** `Class`
  Represents an event that occurs when someone creates, updates or deletes [a channel](ServerChannel 'Guilded.Base.Servers.ServerChannel').
  - **[ChannelEvent(ServerChannel, HashId)](ChannelEvent.ChannelEvent(ServerChannel,HashId) 'Guilded.Base.Events.ChannelEvent.ChannelEvent(Guilded.Base.Servers.ServerChannel, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent') from the specified JSON properties.
  - **[ArchivedAt](ChannelEvent.ArchivedAt 'Guilded.Base.Events.ChannelEvent.ArchivedAt')** `Property`
    Gets the date when the channel was archived.
  - **[ArchivedBy](ChannelEvent.ArchivedBy 'Guilded.Base.Events.ChannelEvent.ArchivedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that archived the channel.
  - **[CategoryId](ChannelEvent.CategoryId 'Guilded.Base.Events.ChannelEvent.CategoryId')** `Property`
    Gets the identifier of the parent category of this channel.
  - **[Channel](ChannelEvent.Channel 'Guilded.Base.Events.ChannelEvent.Channel')** `Property`
    Gets [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') received from the event.
  - **[CreatedAt](ChannelEvent.CreatedAt 'Guilded.Base.Events.ChannelEvent.CreatedAt')** `Property`
    Gets the date when the channel was created.
  - **[CreatedBy](ChannelEvent.CreatedBy 'Guilded.Base.Events.ChannelEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created the channel.
  - **[GroupId](ChannelEvent.GroupId 'Guilded.Base.Events.ChannelEvent.GroupId')** `Property`
    Gets the identifier of the parent group of this channel.
  - **[IsArchived](ChannelEvent.IsArchived 'Guilded.Base.Events.ChannelEvent.IsArchived')** `Property`
    Gets whether the channel has been archived.
  - **[IsCategorized](ChannelEvent.IsCategorized 'Guilded.Base.Events.ChannelEvent.IsCategorized')** `Property`
    Gets whether the channel is in a category.
  - **[IsPublic](ChannelEvent.IsPublic 'Guilded.Base.Events.ChannelEvent.IsPublic')** `Property`
    Gets whether the channel is globally viewable.
  - **[IsThread](ChannelEvent.IsThread 'Guilded.Base.Events.ChannelEvent.IsThread')** `Property`
    Gets whether the channel is a thread of [a channel content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Name](ChannelEvent.Name 'Guilded.Base.Events.ChannelEvent.Name')** `Property`
    Gets the name of the channel.
  - **[ParentId](ChannelEvent.ParentId 'Guilded.Base.Events.ChannelEvent.ParentId')** `Property`
    Gets the identifier of the parent channel of this channel.
  - **[Topic](ChannelEvent.Topic 'Guilded.Base.Events.ChannelEvent.Topic')** `Property`
    Gets the topic describing what the channel is about.
  - **[Type](ChannelEvent.Type 'Guilded.Base.Events.ChannelEvent.Type')** `Property`
    Gets the identifier of the parent channel of this channel.
  - **[UpdatedAt](ChannelEvent.UpdatedAt 'Guilded.Base.Events.ChannelEvent.UpdatedAt')** `Property`
    Gets the date when the channel was edited.
  - **[CreateWebhookAsync(string)](ChannelEvent.CreateWebhookAsync(string) 'Guilded.Base.Events.ChannelEvent.CreateWebhookAsync(string)')** `Method`
    Creates a [new webhook](Webhook 'Guilded.Base.Servers.Webhook') in the channel.
  - **[DeleteAsync()](ChannelEvent.DeleteAsync() 'Guilded.Base.Events.ChannelEvent.DeleteAsync()')** `Method`
    Deletes the channel.
- **[DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')** `Class`
  Represents an event that occurs when someone creates, updates or deletes [a document](Doc 'Guilded.Base.Content.Doc').
  - **[DocEvent(Doc, HashId)](DocEvent.DocEvent(Doc,HashId) 'Guilded.Base.Events.DocEvent.DocEvent(Guilded.Base.Content.Doc, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent') from the specified JSON properties.
  - **[ChannelId](DocEvent.ChannelId 'Guilded.Base.Events.DocEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[Content](DocEvent.Content 'Guilded.Base.Events.DocEvent.Content')** `Property`
    Gets the text contents of the [document](Doc 'Guilded.Base.Content.Doc').
  - **[CreatedAt](DocEvent.CreatedAt 'Guilded.Base.Events.DocEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](DocEvent.CreatedBy 'Guilded.Base.Events.DocEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Doc](DocEvent.Doc 'Guilded.Base.Events.DocEvent.Doc')** `Property`
    Gets [the document](Doc 'Guilded.Base.Content.Doc') received from the event.
  - **[Mentions](DocEvent.Mentions 'Guilded.Base.Events.DocEvent.Mentions')** `Property`
    Gets [the mentions](Mentions 'Guilded.Base.Content.Mentions') found in [the content](Doc.Content 'Guilded.Base.Content.Doc.Content').
  - **[Title](DocEvent.Title 'Guilded.Base.Events.DocEvent.Title')** `Property`
    Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent').
  - **[UpdatedAt](DocEvent.UpdatedAt 'Guilded.Base.Events.DocEvent.UpdatedAt')** `Property`
    Gets the date when [the titled content](TitledContent 'Guilded.Base.Content.TitledContent') were updated.
  - **[UpdatedBy](DocEvent.UpdatedBy 'Guilded.Base.Events.DocEvent.UpdatedBy')** `Property`
    Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc').
  - **[AddReactionAsync(uint)](DocEvent.AddReactionAsync(uint) 'Guilded.Base.Events.DocEvent.AddReactionAsync(uint)')** `Method`
    Adds emote to the content.
  - **[DeleteAsync()](DocEvent.DeleteAsync() 'Guilded.Base.Events.DocEvent.DeleteAsync()')** `Method`
    Deletes the doc.
  - **[RemoveReactionAsync(uint)](DocEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.DocEvent.RemoveReactionAsync(uint)')** `Method`
    Removes emote from the content.
  - **[UpdateAsync(string, string)](DocEvent.UpdateAsync(string,string) 'Guilded.Base.Events.DocEvent.UpdateAsync(string, string)')** `Method`
    Edits content or title of the doc.
- **[GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')** `Class`
  Message that was received from a WebSocket client.
  - **[GuildedSocketMessage(SocketOpcode, string, JObject, string)](GuildedSocketMessage.GuildedSocketMessage(SocketOpcode,string,JObject,string) 'Guilded.Base.Events.GuildedSocketMessage.GuildedSocketMessage(Guilded.Base.Events.SocketOpcode, string, Newtonsoft.Json.Linq.JObject, string)')** `Constructor`
    Initializes a new instance of [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') from the specified JSON properties.
  - **[EventName](GuildedSocketMessage.EventName 'Guilded.Base.Events.GuildedSocketMessage.EventName')** `Property`
    Gets the name of the event received.
  - **[MessageId](GuildedSocketMessage.MessageId 'Guilded.Base.Events.GuildedSocketMessage.MessageId')** `Property`
    Gets an identifier that allows the event to be replayed.
  - **[Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode')** `Property`
    Gets an operation code that tells about the message.
  - **[RawData](GuildedSocketMessage.RawData 'Guilded.Base.Events.GuildedSocketMessage.RawData')** `Property`
    Gets the data associated with the event.
  - **[ToString()](GuildedSocketMessage.ToString() 'Guilded.Base.Events.GuildedSocketMessage.ToString()')** `Method`
    Returns the string representation of [the socket message](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage').
  - **[ToString(Formatting)](GuildedSocketMessage.ToString(Formatting) 'Guilded.Base.Events.GuildedSocketMessage.ToString(Newtonsoft.Json.Formatting)')** `Method`
    Returns the string representation of [the socket message](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage').
- **[ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')** `Class`
  Represents an event that occurs when someone creates, updates, completes, uncompletes or deletes [a list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[ListItemEvent(ListItem, HashId)](ListItemEvent.ListItemEvent(ListItem,HashId) 'Guilded.Base.Events.ListItemEvent.ListItemEvent(Guilded.Base.Content.ListItem, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent') from the specified JSON properties.
  - **[ChannelId](ListItemEvent.ChannelId 'Guilded.Base.Events.ListItemEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[CompletedAt](ListItemEvent.CompletedAt 'Guilded.Base.Events.ListItemEvent.CompletedAt')** `Property`
    Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was completed.
  - **[CompletedBy](ListItemEvent.CompletedBy 'Guilded.Base.Events.ListItemEvent.CompletedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') who ticked off [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreatedAt](ListItemEvent.CreatedAt 'Guilded.Base.Events.ListItemEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](ListItemEvent.CreatedBy 'Guilded.Base.Events.ListItemEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[CreatedByWebhook](ListItemEvent.CreatedByWebhook 'Guilded.Base.Events.ListItemEvent.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the list item.
  - **[IsCompleted](ListItemEvent.IsCompleted 'Guilded.Base.Events.ListItemEvent.IsCompleted')** `Property`
    Gets whether [the list item](ListItem 'Guilded.Base.Content.ListItem') was ticked off
  - **[ListItem](ListItemEvent.ListItem 'Guilded.Base.Events.ListItemEvent.ListItem')** `Property`
    Gets the list item received from the event.
  - **[Mentions](ListItemEvent.Mentions 'Guilded.Base.Events.ListItemEvent.Mentions')** `Property`
    Gets [the mentions](ListItemBase_T_.Mentions 'Guilded.Base.Content.ListItemBase<T>.Mentions') found in [the content](ListItemBase_T_.Message 'Guilded.Base.Content.ListItemBase<T>.Message').
  - **[Message](ListItemEvent.Message 'Guilded.Base.Events.ListItemEvent.Message')** `Property`
    Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[Note](ListItemEvent.Note 'Guilded.Base.Events.ListItemEvent.Note')** `Property`
    Gets the note of [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[ParentId](ListItemEvent.ParentId 'Guilded.Base.Events.ListItemEvent.ParentId')** `Property`
    Gets the identifier of [the parent item](ListItem 'Guilded.Base.Content.ListItem') of [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[UpdatedAt](ListItemEvent.UpdatedAt 'Guilded.Base.Events.ListItemEvent.UpdatedAt')** `Property`
    Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was edited.
  - **[CompleteAsync()](ListItemEvent.CompleteAsync() 'Guilded.Base.Events.ListItemEvent.CompleteAsync()')** `Method`
    Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[DeleteAsync()](ListItemEvent.DeleteAsync() 'Guilded.Base.Events.ListItemEvent.DeleteAsync()')** `Method`
    Deletes the listItem.
  - **[UncompleteAsync()](ListItemEvent.UncompleteAsync() 'Guilded.Base.Events.ListItemEvent.UncompleteAsync()')** `Method`
    Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[UpdateAsync(string, string)](ListItemEvent.UpdateAsync(string,string) 'Guilded.Base.Events.ListItemEvent.UpdateAsync(string, string)')** `Method`
    Edits the content of a message.
- **[MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent')** `Class`
  Represents an event that occurs when [a memner](Member 'Guilded.Base.Servers.Member') gets banned or unbanned.
  - **[MemberBanEvent(HashId, MemberBan)](MemberBanEvent.MemberBanEvent(HashId,MemberBan) 'Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId, Guilded.Base.Servers.MemberBan)')** `Constructor`
    Initializes a new instance of [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties.
  - **[CreatedAt](MemberBanEvent.CreatedAt 'Guilded.Base.Events.MemberBanEvent.CreatedAt')** `Property`
    Gets the date when the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') was banned
  - **[CreatedBy](MemberBanEvent.CreatedBy 'Guilded.Base.Events.MemberBanEvent.CreatedBy')** `Property`
    Gets the identifier of the staff who banned.
  - **[MemberBan](MemberBanEvent.MemberBan 'Guilded.Base.Events.MemberBanEvent.MemberBan')** `Property`
    Gets the information about the member's ban.
  - **[Reason](MemberBanEvent.Reason 'Guilded.Base.Events.MemberBanEvent.Reason')** `Property`
    Gets the reason why the [user](MemberBan.User 'Guilded.Base.Servers.MemberBan.User') has been banned, if the reason was specified.
  - **[ServerId](MemberBanEvent.ServerId 'Guilded.Base.Events.MemberBanEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where member has been banned/unbanned.
  - **[User](MemberBanEvent.User 'Guilded.Base.Events.MemberBanEvent.User')** `Property`
    Gets the banned user.
- **[MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')** `Class`
  Represents an event that occurs once [a member](Member 'Guilded.Base.Servers.Member') joins [a server](Server 'Guilded.Base.Servers.Server').
  - **[MemberJoinedEvent(HashId, Member)](MemberJoinedEvent.MemberJoinedEvent(HashId,Member) 'Guilded.Base.Events.MemberJoinedEvent.MemberJoinedEvent(Guilded.Base.HashId, Guilded.Base.Servers.Member)')** `Constructor`
    Initializes a new instance of [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent') from the specified JSON properties.
  - **[IsBot](MemberJoinedEvent.IsBot 'Guilded.Base.Events.MemberJoinedEvent.IsBot')** `Property`
    Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot').
  - **[JoinedAt](MemberJoinedEvent.JoinedAt 'Guilded.Base.Events.MemberJoinedEvent.JoinedAt')** `Property`
    Gets the date when [the member](Member 'Guilded.Base.Servers.Member') joined.
  - **[Member](MemberJoinedEvent.Member 'Guilded.Base.Events.MemberJoinedEvent.Member')** `Property`
    Gets the member who has joined.
  - **[Name](MemberJoinedEvent.Name 'Guilded.Base.Events.MemberJoinedEvent.Name')** `Property`
    Gets the global username of [the user](User 'Guilded.Base.Users.User').
  - **[ServerId](MemberJoinedEvent.ServerId 'Guilded.Base.Events.MemberJoinedEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the member has joined.
  - **[Type](MemberJoinedEvent.Type 'Guilded.Base.Events.MemberJoinedEvent.Type')** `Property`
    Gets the type of [the user](User 'Guilded.Base.Users.User') they are.
  - **[UserId](MemberJoinedEvent.UserId 'Guilded.Base.Events.MemberJoinedEvent.UserId')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User').
- **[MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')** `Class`
  Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') leaves [a server](Server 'Guilded.Base.Servers.Server') or gets removed from it.
  - **[MemberRemovedEvent(HashId, HashId, bool, bool)](MemberRemovedEvent.MemberRemovedEvent(HashId,HashId,bool,bool) 'Guilded.Base.Events.MemberRemovedEvent.MemberRemovedEvent(Guilded.Base.HashId, Guilded.Base.HashId, bool, bool)')** `Constructor`
    Initializes a new instance of [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent') from the specified JSON properties.
  - **[IsBan](MemberRemovedEvent.IsBan 'Guilded.Base.Events.MemberRemovedEvent.IsBan')** `Property`
    Gets whether [the user](User 'Guilded.Base.Users.User') has been banned.
  - **[IsKick](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick')** `Property`
    Gets whether [the user](User 'Guilded.Base.Users.User') has been kicked.
  - **[ServerId](MemberRemovedEvent.ServerId 'Guilded.Base.Events.MemberRemovedEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the member has been kicked or has left.
  - **[UserId](MemberRemovedEvent.UserId 'Guilded.Base.Events.MemberRemovedEvent.UserId')** `Property`
    Gets the identifier of the member who has been kicked or has left.
- **[MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')** `Class`
  Represents an event that occurs when member's server profile receives any kind of change, besides [change in their role list](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent').
  - **[MemberUpdatedEvent(HashId, MemberUpdate)](MemberUpdatedEvent.MemberUpdatedEvent(HashId,MemberUpdate) 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId, Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate)')** `Constructor`
    Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties.
  - **[ServerId](MemberUpdatedEvent.ServerId 'Guilded.Base.Events.MemberUpdatedEvent.ServerId')** `Property`
    The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the [member](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') has been updated.
  - **[UserId](MemberUpdatedEvent.UserId 'Guilded.Base.Events.MemberUpdatedEvent.UserId')** `Property`
    Gets the identifier of the [member](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo').
  - **[UserInfo](MemberUpdatedEvent.UserInfo 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo')** `Property`
    Gets the properties that have been updated in the member.
- **[MemberUpdatedEvent.MemberUpdate](MemberUpdatedEvent.MemberUpdate 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')** `Class`
  Represents the properties that have been updated in the member.
  - **[MemberUpdate(HashId, string)](MemberUpdatedEvent.MemberUpdate.MemberUpdate(HashId,string) 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.MemberUpdate(Guilded.Base.HashId, string)')** `Constructor`
    Initializes a new instance of [MemberUpdate](MemberUpdatedEvent.MemberUpdate 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate') from the specified JSON properties.
  - **[Id](MemberUpdatedEvent.MemberUpdate.Id 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Id')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User').
  - **[Nickname](MemberUpdatedEvent.MemberUpdate.Nickname 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Nickname')** `Property`
    Gets the set nickname of [the member](Member 'Guilded.Base.Servers.Member') in [the server](Server 'Guilded.Base.Servers.Server').
- **[MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')** `Class`
  Represents an event that occurs when someone deletes [a message](Message 'Guilded.Base.Content.Message').
  - **[MessageDeletedEvent(MessageDeleted, Nullable&lt;HashId&gt;)](MessageDeletedEvent.MessageDeletedEvent(MessageDeleted,Nullable_HashId_) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.Base.Events.MessageDeletedEvent.MessageDeleted, System.Nullable<Guilded.Base.HashId>)')** `Constructor`
    Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties.
  - **[ChannelId](MessageDeletedEvent.ChannelId 'Guilded.Base.Events.MessageDeletedEvent.ChannelId')** `Property`
    Gets the identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.DeletedAt 'Guilded.Base.Events.MessageDeletedEvent.DeletedAt')** `Property`
    Gets the date when the message was deleted.
  - **[Id](MessageDeletedEvent.Id 'Guilded.Base.Events.MessageDeletedEvent.Id')** `Property`
    Gets the identifier of the message.
  - **[IsPrivate](MessageDeletedEvent.IsPrivate 'Guilded.Base.Events.MessageDeletedEvent.IsPrivate')** `Property`
    Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate').
- **[MessageDeletedEvent.MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')** `Class`
  Represents a message that was recently deleted/removed.
  - **[MessageDeleted(Guid, Guid, DateTime, Nullable&lt;HashId&gt;, bool)](MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid,Guid,DateTime,Nullable_HashId_,bool) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.MessageDeleted(Guid, Guid, System.DateTime, System.Nullable<Guilded.Base.HashId>, bool)')** `Constructor`
    The identifier of the message.
  - **[ChannelId](MessageDeletedEvent.MessageDeleted.ChannelId 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ChannelId')** `Property`
    Gets the identifier of the channel where the message was.
  - **[DeletedAt](MessageDeletedEvent.MessageDeleted.DeletedAt 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.DeletedAt')** `Property`
    Gets the date when the message was deleted.
  - **[Id](MessageDeletedEvent.MessageDeleted.Id 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Id')** `Property`
    Gets the identifier of the message.
  - **[IsPrivate](MessageDeletedEvent.MessageDeleted.IsPrivate 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.IsPrivate')** `Property`
    Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate').
  - **[ServerId](MessageDeletedEvent.MessageDeleted.ServerId 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message was.
  - **[Equals(object)](MessageDeletedEvent.MessageDeleted.Equals(object) 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](MessageDeletedEvent.MessageDeleted.GetHashCode() 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.GetHashCode()')** `Method`
    Gets a hashcode of this object.
  - **[ToString()](MessageDeletedEvent.MessageDeleted.ToString() 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted.ToString()')** `Method`
    Creates string equivalent of the message.
- **[MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')** `Class`
  Represents an event that occurs when someone creates or edits [a message](Message 'Guilded.Base.Content.Message').
  - **[MessageEvent(Message, Nullable&lt;HashId&gt;)](MessageEvent.MessageEvent(Message,Nullable_HashId_) 'Guilded.Base.Events.MessageEvent.MessageEvent(Guilded.Base.Content.Message, System.Nullable<Guilded.Base.HashId>)')** `Constructor`
    Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.
  - **[ChannelId](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[Content](MessageEvent.Content 'Guilded.Base.Events.MessageEvent.Content')** `Property`
    Gets the text contents of [the message](Message 'Guilded.Base.Content.Message').
  - **[CreatedAt](MessageEvent.CreatedAt 'Guilded.Base.Events.MessageEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](MessageEvent.CreatedBy 'Guilded.Base.Events.MessageEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[CreatedByWebhook](MessageEvent.CreatedByWebhook 'Guilded.Base.Events.MessageEvent.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message.
  - **[Embeds](MessageEvent.Embeds 'Guilded.Base.Events.MessageEvent.Embeds')** `Property`
    Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains.
  - **[IsPrivate](MessageEvent.IsPrivate 'Guilded.Base.Events.MessageEvent.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsReply](MessageEvent.IsReply 'Guilded.Base.Events.MessageEvent.IsReply')** `Property`
    Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message.
  - **[IsSilent](MessageEvent.IsSilent 'Guilded.Base.Events.MessageEvent.IsSilent')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user.
  - **[IsSystemMessage](MessageEvent.IsSystemMessage 'Guilded.Base.Events.MessageEvent.IsSystemMessage')** `Property`
    Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System').
  - **[Mentions](MessageEvent.Mentions 'Guilded.Base.Events.MessageEvent.Mentions')** `Property`
    Gets [the mentions](Message.Mentions 'Guilded.Base.Content.Message.Mentions') found in [the content](Message.Content 'Guilded.Base.Content.Message.Content').
  - **[ReplyMessageIds](MessageEvent.ReplyMessageIds 'Guilded.Base.Events.MessageEvent.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.
  - **[Type](MessageEvent.Type 'Guilded.Base.Events.MessageEvent.Type')** `Property`
    Gets the type of [the message](Message 'Guilded.Base.Content.Message').
  - **[UpdatedAt](MessageEvent.UpdatedAt 'Guilded.Base.Events.MessageEvent.UpdatedAt')** `Property`
    Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited.
  - **[AddReactionAsync(uint)](MessageEvent.AddReactionAsync(uint) 'Guilded.Base.Events.MessageEvent.AddReactionAsync(uint)')** `Method`
    Adds emote to the message.
  - **[CreateMessageAsync(bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(MessageContent)](MessageEvent.CreateMessageAsync(MessageContent) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(Embed[])](MessageEvent.CreateMessageAsync(Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[], Embed[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[])](MessageEvent.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool)](MessageEvent.CreateMessageAsync(string,bool,bool) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, bool, bool)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Guid[])](MessageEvent.CreateMessageAsync(string,Guid[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Embed[])](MessageEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string)](MessageEvent.CreateMessageAsync(string) 'Guilded.Base.Events.MessageEvent.CreateMessageAsync(string)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[DeleteAsync()](MessageEvent.DeleteAsync() 'Guilded.Base.Events.MessageEvent.DeleteAsync()')** `Method`
    Deletes the message.
  - **[RemoveReactionAsync(uint)](MessageEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.MessageEvent.RemoveReactionAsync(uint)')** `Method`
    Removes emote from the message.
  - **[ReplyAsync(bool, bool, Embed[])](MessageEvent.ReplyAsync(bool,bool,Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(Embed[])](MessageEvent.ReplyAsync(Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool, Embed[])](MessageEvent.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool)](MessageEvent.ReplyAsync(string,bool,bool) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string, bool, bool)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string)](MessageEvent.ReplyAsync(string) 'Guilded.Base.Events.MessageEvent.ReplyAsync(string)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[UpdateAsync(string)](MessageEvent.UpdateAsync(string) 'Guilded.Base.Events.MessageEvent.UpdateAsync(string)')** `Method`
    Edits the content of a message.
- **[MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>')** `Class`
  Represents the base for message-related events.
  - **[MessageEvent(Nullable&lt;HashId&gt;, T)](MessageEvent_T_.MessageEvent(Nullable_HashId_,T) 'Guilded.Base.Events.MessageEvent<T>.MessageEvent(System.Nullable<Guilded.Base.HashId>, T)')** `Constructor`
    Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.
  - **[Message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent<T>.Message')** `Property`
    Gets the message received from the event.
  - **[ServerId](MessageEvent_T_.ServerId 'Guilded.Base.Events.MessageEvent<T>.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred.
- **[MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')** `Class`
  Represents an event that occurs when someone adds or removes [a reaction](Reaction 'Guilded.Base.Content.Reaction').
  - **[MessageReactionEvent(EventReaction, Nullable&lt;HashId&gt;)](MessageReactionEvent.MessageReactionEvent(EventReaction,Nullable_HashId_) 'Guilded.Base.Events.MessageReactionEvent.MessageReactionEvent(Guilded.Base.Events.MessageReactionEvent.EventReaction, System.Nullable<Guilded.Base.HashId>)')** `Constructor`
    Initializes a new instance of [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent') from the specified JSON properties.
  - **[ChannelId](MessageReactionEvent.ChannelId 'Guilded.Base.Events.MessageReactionEvent.ChannelId')** `Property`
    Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is.
  - **[CreatedBy](MessageReactionEvent.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.CreatedBy')** `Property`
    Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted.
  - **[Emote](MessageReactionEvent.Emote 'Guilded.Base.Events.MessageReactionEvent.Emote')** `Property`
    Gets [the emote](Emote 'Guilded.Base.Content.Emote') with which [the user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted.
  - **[Id](MessageReactionEvent.Id 'Guilded.Base.Events.MessageReactionEvent.Id')** `Property`
    Gets the identifier of [the emote](Emote 'Guilded.Base.Content.Emote').
  - **[MessageId](MessageReactionEvent.MessageId 'Guilded.Base.Events.MessageReactionEvent.MessageId')** `Property`
    Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on.
  - **[Name](MessageReactionEvent.Name 'Guilded.Base.Events.MessageReactionEvent.Name')** `Property`
    Gets the name of [the emote](Emote 'Guilded.Base.Content.Emote').
  - **[Reaction](MessageReactionEvent.Reaction 'Guilded.Base.Events.MessageReactionEvent.Reaction')** `Property`
    Gets [the received reaction](Reaction 'Guilded.Base.Content.Reaction') from the event.
  - **[ServerId](MessageReactionEvent.ServerId 'Guilded.Base.Events.MessageReactionEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred.
  - **[AddAsync()](MessageReactionEvent.AddAsync() 'Guilded.Base.Events.MessageReactionEvent.AddAsync()')** `Method`
    Adds emote to the message.
  - **[RemoveAsync()](MessageReactionEvent.RemoveAsync() 'Guilded.Base.Events.MessageReactionEvent.RemoveAsync()')** `Method`
    Removes emote from the message.
- **[MessageReactionEvent.EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')** `Class`
  Represents [the reaction](Reaction 'Guilded.Base.Content.Reaction') that has been added.
  - **[EventReaction(Emote, HashId, Guid, Guid)](MessageReactionEvent.EventReaction.EventReaction(Emote,HashId,Guid,Guid) 'Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote, Guilded.Base.HashId, Guid, Guid)')** `Constructor`
    Initializes a new instance of [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction') from the specified JSON properties.
  - **[ChannelId](MessageReactionEvent.EventReaction.ChannelId 'Guilded.Base.Events.MessageReactionEvent.EventReaction.ChannelId')** `Property`
    Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is.
  - **[CreatedBy](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy')** `Property`
    Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted.
  - **[Emote](MessageReactionEvent.EventReaction.Emote 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Emote')** `Property`
    Gets [the emote](Emote 'Guilded.Base.Content.Emote') with which [the user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted.
  - **[Id](MessageReactionEvent.EventReaction.Id 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Id')** `Property`
    Gets the identifier of [the emote](Emote 'Guilded.Base.Content.Emote').
  - **[MessageId](MessageReactionEvent.EventReaction.MessageId 'Guilded.Base.Events.MessageReactionEvent.EventReaction.MessageId')** `Property`
    Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on.
  - **[Name](MessageReactionEvent.EventReaction.Name 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Name')** `Property`
    Gets the name of [the emote](Emote 'Guilded.Base.Content.Emote').
  - **[AddAsync()](MessageReactionEvent.EventReaction.AddAsync() 'Guilded.Base.Events.MessageReactionEvent.EventReaction.AddAsync()')** `Method`
    Adds emote to the message.
  - **[RemoveAsync()](MessageReactionEvent.EventReaction.RemoveAsync() 'Guilded.Base.Events.MessageReactionEvent.EventReaction.RemoveAsync()')** `Method`
    Removes emote from the message.
- **[ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent')** `Class`
  Represents an event that occurs once all missed events were [resumed](BaseGuildedClient.LastMessageId 'Guilded.Base.BaseGuildedClient.LastMessageId').
  - **[ResumeEvent(string)](ResumeEvent.ResumeEvent(string) 'Guilded.Base.Events.ResumeEvent.ResumeEvent(string)')** `Constructor`
    Initializes a new instance of [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent') from the specified JSON properties.
  - **[MessageId](ResumeEvent.MessageId 'Guilded.Base.Events.ResumeEvent.MessageId')** `Property`
    Gets the identifier of the last received event.
- **[RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')** `Class`
  Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives a role or loses it.
  - **[RolesUpdatedEvent(HashId, IList&lt;RolesUpdated&gt;)](RolesUpdatedEvent.RolesUpdatedEvent(HashId,IList_RolesUpdated_) 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdatedEvent(Guilded.Base.HashId, System.Collections.Generic.IList<Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated>)')** `Constructor`
    Initializes a new instance of [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent') from the specified JSON properties.
  - **[MemberRoleIds](RolesUpdatedEvent.MemberRoleIds 'Guilded.Base.Events.RolesUpdatedEvent.MemberRoleIds')** `Property`
    Gets the list of receiving/losing member and current roles.
  - **[ServerId](RolesUpdatedEvent.ServerId 'Guilded.Base.Events.RolesUpdatedEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where user's roles were given or removed.
  - **[UpdatedUsers](RolesUpdatedEvent.UpdatedUsers 'Guilded.Base.Events.RolesUpdatedEvent.UpdatedUsers')** `Property`
    Gets the array of updated users that either lost or received roles.
- **[RolesUpdatedEvent.RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated')** `Class`
  Defines a role list holder and their role list.
  - **[RolesUpdated(HashId, IList&lt;uint&gt;)](RolesUpdatedEvent.RolesUpdated.RolesUpdated(HashId,IList_uint_) 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RolesUpdated(Guilded.Base.HashId, System.Collections.Generic.IList<uint>)')** `Constructor`
    Initializes a new instance of [RolesUpdated](RolesUpdatedEvent.RolesUpdated 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated') from the specified JSON properties.
  - **[RoleIds](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds')** `Property`
    Gets the list of roles that [member](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId') is currently holding.
  - **[UserId](RolesUpdatedEvent.RolesUpdated.UserId 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.UserId')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that lost or received [roles](RolesUpdatedEvent.RolesUpdated.RoleIds 'Guilded.Base.Events.RolesUpdatedEvent.RolesUpdated.RoleIds').
- **[TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent')** `Class`
  Represents an event that occurs when someone creates, updates or deletes a [forum topic](Topic 'Guilded.Base.Content.Topic').
  - **[TopicEvent(Topic, HashId)](TopicEvent.TopicEvent(Topic,HashId) 'Guilded.Base.Events.TopicEvent.TopicEvent(Guilded.Base.Content.Topic, Guilded.Base.HashId)')** `Constructor`
    Initializes a new instance of [TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent') from the specified JSON properties.
  - **[BumpedAt](TopicEvent.BumpedAt 'Guilded.Base.Events.TopicEvent.BumpedAt')** `Property`
    Gets the date when the [topic](TopicSummary 'Guilded.Base.Content.TopicSummary') was bumped.
  - **[ChannelId](TopicEvent.ChannelId 'Guilded.Base.Events.TopicEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[Content](TopicEvent.Content 'Guilded.Base.Events.TopicEvent.Content')** `Property`
    Gets the text contents of the [topic](Topic 'Guilded.Base.Content.Topic').
  - **[CreatedAt](TopicEvent.CreatedAt 'Guilded.Base.Events.TopicEvent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](TopicEvent.CreatedBy 'Guilded.Base.Events.TopicEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[CreatedByWebhook](TopicEvent.CreatedByWebhook 'Guilded.Base.Events.TopicEvent.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](TopicSummary 'Guilded.Base.Content.TopicSummary').
  - **[Title](TopicEvent.Title 'Guilded.Base.Events.TopicEvent.Title')** `Property`
    Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent').
  - **[Topic](TopicEvent.Topic 'Guilded.Base.Events.TopicEvent.Topic')** `Property`
    Gets the [topic](Topic 'Guilded.Base.Content.Topic') received from the event.
  - **[UpdatedAt](TopicEvent.UpdatedAt 'Guilded.Base.Events.TopicEvent.UpdatedAt')** `Property`
    Gets the date when [the titled content](TitledContent 'Guilded.Base.Content.TitledContent') were updated.
  - **[AddReactionAsync(uint)](TopicEvent.AddReactionAsync(uint) 'Guilded.Base.Events.TopicEvent.AddReactionAsync(uint)')** `Method`
    Adds emote to the content.
  - **[DeleteAsync()](TopicEvent.DeleteAsync() 'Guilded.Base.Events.TopicEvent.DeleteAsync()')** `Method`
    Deletes a [forum post](Topic 'Guilded.Base.Content.Topic').
  - **[RemoveReactionAsync(uint)](TopicEvent.RemoveReactionAsync(uint) 'Guilded.Base.Events.TopicEvent.RemoveReactionAsync(uint)')** `Method`
    Removes emote from the content.
  - **[UpdateAsync(string, string)](TopicEvent.UpdateAsync(string,string) 'Guilded.Base.Events.TopicEvent.UpdateAsync(string, string)')** `Method`
    Edits [forum post's](Topic 'Guilded.Base.Content.Topic')title and content.
- **[WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')** `Class`
  - **[WebhookEvent(HashId, Webhook)](WebhookEvent.WebhookEvent(HashId,Webhook) 'Guilded.Base.Events.WebhookEvent.WebhookEvent(Guilded.Base.HashId, Guilded.Base.Servers.Webhook)')** `Constructor`
    Initializes a new instance of [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent') from the specified JSON properties.
  - **[ChannelId](WebhookEvent.ChannelId 'Guilded.Base.Events.WebhookEvent.ChannelId')** `Property`
    Gets the identifier of the channel where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') is.
  - **[CreatedAt](WebhookEvent.CreatedAt 'Guilded.Base.Events.WebhookEvent.CreatedAt')** `Property`
    Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was created.
  - **[CreatedBy](WebhookEvent.CreatedBy 'Guilded.Base.Events.WebhookEvent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[Name](WebhookEvent.Name 'Guilded.Base.Events.WebhookEvent.Name')** `Property`
    Gets the name of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[ServerId](WebhookEvent.ServerId 'Guilded.Base.Events.WebhookEvent.ServerId')** `Property`
    Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where [the webhook](Webhook 'Guilded.Base.Servers.Webhook') has been created/updated.
  - **[Token](WebhookEvent.Token 'Guilded.Base.Events.WebhookEvent.Token')** `Property`
    Gets the token of [the webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[Webhook](WebhookEvent.Webhook 'Guilded.Base.Events.WebhookEvent.Webhook')** `Property`
    Gets [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that has been created or updated.
  - **[CreateMessageAsync(MessageContent)](WebhookEvent.CreateMessageAsync(MessageContent) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') using webhook.
  - **[CreateMessageAsync(Embed[])](WebhookEvent.CreateMessageAsync(Embed[]) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[CreateMessageAsync(string, Embed[])](WebhookEvent.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateMessageAsync(string, IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(string,IList_Embed_) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds and content using a webhook.
  - **[CreateMessageAsync(string)](WebhookEvent.CreateMessageAsync(string) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(string)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing only content using a webhook.
  - **[CreateMessageAsync(IList&lt;Embed&gt;)](WebhookEvent.CreateMessageAsync(IList_Embed_) 'Guilded.Base.Events.WebhookEvent.CreateMessageAsync(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>)')** `Method`
    Creates [a message](Message 'Guilded.Base.Content.Message') with content containing embeds using a webhook.
  - **[DeleteAsync()](WebhookEvent.DeleteAsync() 'Guilded.Base.Events.WebhookEvent.DeleteAsync()')** `Method`
    Deletes the webhook.
  - **[UpdateAsync(string)](WebhookEvent.UpdateAsync(string) 'Guilded.Base.Events.WebhookEvent.UpdateAsync(string)')** `Method`
    Edits the webhook.
- **[WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')** `Class`
  Represents an event that occurs when WebSocket connects or reconnects.
  - **[WelcomeEvent(int, Me, string)](WelcomeEvent.WelcomeEvent(int,Me,string) 'Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int, Guilded.Base.Users.Me, string)')** `Constructor`
    Initializes a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties.
  - **[HeartbeatInterval](WelcomeEvent.HeartbeatInterval 'Guilded.Base.Events.WelcomeEvent.HeartbeatInterval')** `Property`
    Gets the time duration between heartbeats in milliseconds.
  - **[LastMessageId](WelcomeEvent.LastMessageId 'Guilded.Base.Events.WelcomeEvent.LastMessageId')** `Property`
    Gets the identifier of the last received WebSocket message.
  - **[User](WelcomeEvent.User 'Guilded.Base.Events.WelcomeEvent.User')** `Property`
    Gets the currently logged in user.
- **[XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent')** `Class`
  Represents an event that occurs when [a member](Member 'Guilded.Base.Servers.Member') receives [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').
  - **[XpAddedEvent(IList&lt;HashId&gt;, long)](XpAddedEvent.XpAddedEvent(IList_HashId_,long) 'Guilded.Base.Events.XpAddedEvent.XpAddedEvent(System.Collections.Generic.IList<Guilded.Base.HashId>, long)')** `Constructor`
    Initializes a new instance of [XpAddedEvent](XpAddedEvent 'Guilded.Base.Events.XpAddedEvent') from the specified JSON properties.
  - **[Amount](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount')** `Property`
    Gets the amount of XP given to the [users](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[FirstUser](XpAddedEvent.FirstUser 'Guilded.Base.Events.XpAddedEvent.FirstUser')** `Property`
    Gets the first XP receiving [user](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[LastUser](XpAddedEvent.LastUser 'Guilded.Base.Events.XpAddedEvent.LastUser')** `Property`
    Gets the last XP receiving [user](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users').
  - **[Users](XpAddedEvent.Users 'Guilded.Base.Events.XpAddedEvent.Users')** `Property`
    Gets the identifiers of [the users](User 'Guilded.Base.Users.User') who received [XP](XpAddedEvent.Amount 'Guilded.Base.Events.XpAddedEvent.Amount').
- **[SocketOpcode](SocketOpcode 'Guilded.Base.Events.SocketOpcode')** `Enum`
  Represents [the opcodes](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') in Guilded's WebSocket.
  - **[Activity](SocketOpcode#Guilded.Base.Events.SocketOpcode.Activity 'Guilded.Base.Events.SocketOpcode.Activity')** `Field`
    The message is an event that occurred in Guilded and has associated data with it.
  - **[InternalError](SocketOpcode#Guilded.Base.Events.SocketOpcode.InternalError 'Guilded.Base.Events.SocketOpcode.InternalError')** `Field`
    The message is an internal server error that occurred for unknown/specific reasons.
  - **[InvalidCursor](SocketOpcode#Guilded.Base.Events.SocketOpcode.InvalidCursor 'Guilded.Base.Events.SocketOpcode.InvalidCursor')** `Field`
    The message is an error that occurred due to invalid parameters or format.
  - **[Resume](SocketOpcode#Guilded.Base.Events.SocketOpcode.Resume 'Guilded.Base.Events.SocketOpcode.Resume')** `Field`
    The message is a resume message, which means that all events that were missed got returned.
  - **[Welcome](SocketOpcode#Guilded.Base.Events.SocketOpcode.Welcome 'Guilded.Base.Events.SocketOpcode.Welcome')** `Field`
    The message is a welcome handshake, which means that the WebSocket has been successfully established.