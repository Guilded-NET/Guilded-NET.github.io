---
title: MessageCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId')."
---

## AbstractGuildedClient.MessageCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `ChatMessageCreated` or `ChatMessageUpdated` and opcode `0` that occurs once someone posts or edits a [message](MessageEvent_T_.Message 'Guilded.Base.Events.MessageEvent`1.Message') in [a channel](MessageEvent.ChannelId 'Guilded.Base.Events.MessageEvent.ChannelId').

```csharp
public IObservable<Guilded.Base.Events.MessageEvent> MessageCreated { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.Base.Content.Message')