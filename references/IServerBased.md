---
title: IServerBased
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents an interface for [server](Server 'Guilded.Base.Servers.Server') items."
---

## IServerBased Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an interface for [server](Server 'Guilded.Base.Servers.Server') items.

```csharp
public interface IServerBased :
Guilded.Base.IHasParentClient
```

Implements [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')  
&#8627; [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')  
&#8627; [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')  
&#8627; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')

| Properties | |
| :--- | :--- |
| [ServerId](IServerBased.ServerId 'Guilded.Base.IServerBased.ServerId') | Gets the identifier of the [server](Server 'Guilded.Base.Servers.Server') where the item is. |

| Methods | |
| :--- | :--- |
| [GetServerAsync()](IServerBased.GetServerAsync() 'Guilded.Base.IServerBased.GetServerAsync()') | Gets the specified [server](Server 'Guilded.Base.Servers.Server'). |

### See Also
- [Topic](Topic 'Guilded.Base.Content.Topic')
- [MemberJoinedEvent](MemberJoinedEvent 'Guilded.Base.Events.MemberJoinedEvent')
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')