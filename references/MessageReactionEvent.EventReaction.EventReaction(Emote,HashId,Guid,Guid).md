---
title: EventReaction(Emote, HashId, Guid, Guid)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction') from the specified JSON properties."
---

## EventReaction(Emote, HashId, Guid, Guid) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`EventReaction`](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')

Initializes a new instance of [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction') from the specified JSON properties.

```csharp
public EventReaction(Guilded.Base.Content.Emote emote, Guilded.Base.HashId createdBy, Guid channelId, Guid messageId);
```
#### Parameters

<a name='Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote,Guilded.Base.HashId,Guid,Guid).emote'></a>

`emote` [Emote](Emote 'Guilded.Base.Content.Emote')

[The emote](Emote 'Guilded.Base.Content.Emote') with which [the user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted

<a name='Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote,Guilded.Base.HashId,Guid,Guid).createdBy'></a>

`createdBy` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the user](User 'Guilded.Base.Users.User') that reacted

<a name='Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote,Guilded.Base.HashId,Guid,Guid).channelId'></a>

`channelId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is

<a name='Guilded.Base.Events.MessageReactionEvent.EventReaction.EventReaction(Guilded.Base.Content.Emote,Guilded.Base.HashId,Guid,Guid).messageId'></a>

`messageId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')

The identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on

### See Also
- [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')
- [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')