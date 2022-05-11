---
title: MessageUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId')."
---

## AbstractGuildedClient.MessageUpdated Property
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message.md 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId.md 'Guilded.Base.Events.MessageEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.MessageEvent> MessageUpdated { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')
- [Message](Message.md 'Guilded.Base.Content.Message')