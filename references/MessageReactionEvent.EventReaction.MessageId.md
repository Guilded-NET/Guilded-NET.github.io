---
title: MessageId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on."
---

## MessageReactionEvent.EventReaction.MessageId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`EventReaction`](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')

Gets the identifier of [the message](Message 'Guilded.Base.Content.Message') that [user](MessageReactionEvent.EventReaction.CreatedBy 'Guilded.Base.Events.MessageReactionEvent.EventReaction.CreatedBy') reacted on.

```csharp
public Guid MessageId { get; }
```

#### Property Value
[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
[Message ID](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id')