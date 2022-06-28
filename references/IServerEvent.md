---
title: IServerEvent
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents the interface for server-based events."
---

## IServerEvent Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents the interface for server-based events.

```csharp
public interface IServerEvent
```

Derived  
&#8627; [CalendarEventEvent](CalendarEventEvent 'Guilded.Base.Events.CalendarEventEvent')  
&#8627; [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')  
&#8627; [DocEvent](DocEvent 'Guilded.Base.Events.DocEvent')  
&#8627; [ListItemEvent](ListItemEvent 'Guilded.Base.Events.ListItemEvent')  
&#8627; [MemberBanEvent](MemberBanEvent 'Guilded.Base.Events.MemberBanEvent')  
&#8627; [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')  
&#8627; [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.Base.Events.MemberUpdatedEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.Base.Events.RolesUpdatedEvent')  
&#8627; [WebhookEvent](WebhookEvent 'Guilded.Base.Events.WebhookEvent')

| Properties | |
| :--- | :--- |
| [ServerId](IServerEvent.ServerId 'Guilded.Base.Events.IServerEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred. |

### See Also
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')