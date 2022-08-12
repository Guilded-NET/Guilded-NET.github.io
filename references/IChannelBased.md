---
title: IChannelBased
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents an interface for [server channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') items."
---

## IChannelBased Interface
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an interface for [server channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') items.

```csharp
public interface IChannelBased :
Guilded.Base.IHasParentClient
```

Implements [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')

| Properties | |
| :--- | :--- |
| [ChannelId](IChannelBased.ChannelId 'Guilded.Base.IChannelBased.ChannelId') | Gets the identifier of the [channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where the item is. |

| Methods | |
| :--- | :--- |
| [DeleteChannelAsync()](IChannelBased.DeleteChannelAsync() 'Guilded.Base.IChannelBased.DeleteChannelAsync()') | Deletes the channel. |
| [GetChannelAsync()](IChannelBased.GetChannelAsync() 'Guilded.Base.IChannelBased.GetChannelAsync()') | Gets the channel. |
| [UpdateChannelAsync(string, string, Nullable&lt;bool&gt;)](IChannelBased.UpdateChannelAsync(string,string,Nullable_bool_) 'Guilded.Base.IChannelBased.UpdateChannelAsync(string, string, System.Nullable<bool>)') | Updates the channel. |

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')