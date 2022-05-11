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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events.md 'Guilded.Base.Events')

Represents the interface for server-based events.

```csharp
public interface IServerEvent
```

Derived  
&#8627; [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')  
&#8627; [MemberJoinedEvent](MemberJoinedEvent.md 'Guilded.Base.Events.MemberJoinedEvent')  
&#8627; [MemberRemovedEvent](MemberRemovedEvent.md 'Guilded.Base.Events.MemberRemovedEvent')  
&#8627; [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')  
&#8627; [RolesUpdatedEvent](RolesUpdatedEvent.md 'Guilded.Base.Events.RolesUpdatedEvent')  
&#8627; [WebhookEvent](WebhookEvent.md 'Guilded.Base.Events.WebhookEvent')

| Properties | |
| :--- | :--- |
| [ServerId](IServerEvent.ServerId.md 'Guilded.Base.Events.IServerEvent.ServerId') | Gets the identifier of the server where the event occurred. |
