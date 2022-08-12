---
title: EventReaction
layout: references
section: references
tags:
  - references
  - class
description: "

Represents [the reaction](Reaction 'Guilded.Base.Content.Reaction') that has been added."
---

## MessageReactionEvent.EventReaction Class
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageReactionEvent`](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')

Represents [the reaction](Reaction 'Guilded.Base.Content.Reaction') that has been added.

```csharp
public class MessageReactionEvent.EventReaction : Guilded.Base.ContentModel
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; EventReaction

| Constructors | |
| :--- | :--- |
| [EventReaction(Emote, HashId, Guid, Guid)](MessageReactionEvent.EventReaction.EventReaction(Emote,HashId,Guid,Guid) 'Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote, Guilded.Base.HashId, Guid, Guid)') | Initializes a new instance of [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction') from the specified JSON properties. |

| Properties | |
| :--- | :--- |
| [ChannelId](MessageReactionEvent.EventReaction.ChannelId 'Guilded.Base.Events.MessageReactionEvent.EventReaction.ChannelId') | Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is. |
| [CreatedBy](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') | Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted. |
| [Emote](MessageReactionEvent.EventReaction.Emote 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Emote') | Gets [the emote](Emote 'Guilded.Base.Content.Emote') with which [the user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted. |
| [Id](MessageReactionEvent.EventReaction.Id 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Id') | Gets the identifier of [the emote](Emote 'Guilded.Base.Content.Emote'). |
| [MessageId](MessageReactionEvent.EventReaction.MessageId 'Guilded.Base.Events.MessageReactionEvent.EventReaction.MessageId') | Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on. |
| [Name](MessageReactionEvent.EventReaction.Name 'Guilded.Base.Events.MessageReactionEvent.EventReaction.Name') | Gets the name of [the emote](Emote 'Guilded.Base.Content.Emote'). |

| Methods | |
| :--- | :--- |
| [AddAsync()](MessageReactionEvent.EventReaction.AddAsync() 'Guilded.Base.Events.MessageReactionEvent.EventReaction.AddAsync()') | Adds emote to the message. |
| [RemoveAsync()](MessageReactionEvent.EventReaction.RemoveAsync() 'Guilded.Base.Events.MessageReactionEvent.EventReaction.RemoveAsync()') | Removes emote from the message. |

### See Also
- [Reaction](Reaction 'Guilded.Base.Content.Reaction')
- [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')