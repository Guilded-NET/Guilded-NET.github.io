---
title: MessageReactionEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs when someone adds or removes [a reaction](Reaction 'Guilded.Base.Content.Reaction')."
---

## MessageReactionEvent Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Events`](Guilded.Base.Events 'Guilded.Base.Events')

Represents an event that occurs when someone adds or removes [a reaction](Reaction 'Guilded.Base.Content.Reaction').

```csharp
public class MessageReactionEvent : Guilded.Base.BaseModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; MessageReactionEvent

| Constructors | |
| :--- | :--- |
| [MessageReactionEvent(EventReaction, Nullable&lt;HashId&gt;)](MessageReactionEvent.MessageReactionEvent(EventReaction,Nullable_HashId_) 'Guilded.Base.Events.MessageReactionEvent.MessageReactionEvent(Guilded.Base.Events.MessageReactionEvent.EventReaction, System.Nullable<Guilded.Base.HashId>)') | Initializes a new instance of [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageReactionEvent.ChannelId 'Guilded.Base.Events.MessageReactionEvent.ChannelId') | Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is. |
| [CreatedBy](MessageReactionEvent.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.CreatedBy') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted. |
| [Emote](MessageReactionEvent.Emote 'Guilded.Base.Events.MessageReactionEvent.Emote') | Gets [the emote](Emote 'Guilded.Base.Content.Emote') with which [the user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted. |
| [Id](MessageReactionEvent.Id 'Guilded.Base.Events.MessageReactionEvent.Id') | Gets the identifier of [the emote](Emote 'Guilded.Base.Content.Emote'). |
| [MessageId](MessageReactionEvent.MessageId 'Guilded.Base.Events.MessageReactionEvent.MessageId') | Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on. |
| [Name](MessageReactionEvent.Name 'Guilded.Base.Events.MessageReactionEvent.Name') | Gets the name of [the emote](Emote 'Guilded.Base.Content.Emote'). |
| [Reaction](MessageReactionEvent.Reaction 'Guilded.Base.Events.MessageReactionEvent.Reaction') | Gets [the received reaction](Reaction 'Guilded.Base.Content.Reaction') from the event. |
| [ServerId](MessageReactionEvent.ServerId 'Guilded.Base.Events.MessageReactionEvent.ServerId') | Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred. |

| Methods | |
| :--- | :--- |
| [AddAsync()](MessageReactionEvent.AddAsync() 'Guilded.Base.Events.MessageReactionEvent.AddAsync()') | Adds emote to the message. |
| [RemoveAsync()](MessageReactionEvent.RemoveAsync() 'Guilded.Base.Events.MessageReactionEvent.RemoveAsync()') | Removes emote from the message. |

### See Also
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')
- [Reaction](Reaction 'Guilded.Base.Content.Reaction')