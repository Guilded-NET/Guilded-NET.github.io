---
title: ContentModel
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a base for Guilded models that require a [client](ContentModel.ParentClient 'Guilded.Base.ContentModel.ParentClient')."
---

## ContentModel Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents a base for Guilded models that require a [client](ContentModel.ParentClient 'Guilded.Base.ContentModel.ParentClient').

```csharp
public abstract class ContentModel : Guilded.Base.BaseModel,
Guilded.Base.IHasParentClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; ContentModel

Implements [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [CalendarRsvp](CalendarRsvp 'Guilded.Base.Content.CalendarRsvp')  
&#8627; [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')  
&#8627; [Reaction](Reaction 'Guilded.Base.Content.Reaction')  
&#8627; [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent<T>')  
&#8627; [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')  
&#8627; [Server](Server 'Guilded.Base.Servers.Server')  
&#8627; [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')  
&#8627; [Webhook](Webhook 'Guilded.Base.Servers.Webhook')  
&#8627; [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary')

### Remarks
  
This allows having methods like [CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.Base.Content.Message.CreateMessageAsync(string)'), where it requires to call the parent client's methods.

| Properties | |
| :--- | :--- |
| [ParentClient](ContentModel.ParentClient 'Guilded.Base.ContentModel.ParentClient') | Gets [the parent client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient') that adopts [this object](ContentModel 'Guilded.Base.ContentModel'). |

### See Also
- [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')
- [BaseModel](BaseModel 'Guilded.Base.BaseModel')