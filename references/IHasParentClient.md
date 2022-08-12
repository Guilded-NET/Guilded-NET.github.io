---
title: IHasParentClient
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents an object that uses parent [Guilded client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') for its methods."
---

## IHasParentClient Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an object that uses parent [Guilded client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') for its methods.

```csharp
public interface IHasParentClient
```

Derived  
&#8627; [CalendarEvent](CalendarEvent 'Guilded.Base.Content.CalendarEvent')  
&#8627; [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')  
&#8627; [Message](Message 'Guilded.Base.Content.Message')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')  
&#8627; [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')  
&#8627; [ContentModel](ContentModel 'Guilded.Base.ContentModel')  
&#8627; [IChannelBased](IChannelBased 'Guilded.Base.IChannelBased')  
&#8627; [IGlobalContent](IGlobalContent 'Guilded.Base.IGlobalContent')  
&#8627; [IServerBased](IServerBased 'Guilded.Base.IServerBased')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')

| Properties | |
| :--- | :--- |
| [ParentClient](IHasParentClient.ParentClient 'Guilded.Base.IHasParentClient.ParentClient') | Gets [the parent client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') that adopts [this object](ContentModel 'Guilded.Base.ContentModel'). |
