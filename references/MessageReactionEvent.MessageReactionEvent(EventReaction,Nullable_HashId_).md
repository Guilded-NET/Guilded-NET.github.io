---
title: MessageReactionEvent(EventReaction, Nullable<HashId>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent') from the specified JSON properties."
---

## MessageReactionEvent(EventReaction, Nullable<HashId>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageReactionEvent`](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')

Initializes a new instance of [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent') from the specified JSON properties.

```csharp
public MessageReactionEvent(Guilded.Base.Events.MessageReactionEvent.EventReaction reaction, System.Nullable<Guilded.Base.HashId> serverId);
```
#### Parameters

<a name='Guilded.Base.Events.MessageReactionEvent.MessageReactionEvent(Guilded.Base.Events.MessageReactionEvent.EventReaction,System.Nullable_Guilded.Base.HashId_).reaction'></a>

`reaction` [EventReaction](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')

[The received reaction](Reaction 'Guilded.Base.Content.Reaction') from the event

<a name='Guilded.Base.Events.MessageReactionEvent.MessageReactionEvent(Guilded.Base.Events.MessageReactionEvent.EventReaction,System.Nullable_Guilded.Base.HashId_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred

### See Also
- [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')