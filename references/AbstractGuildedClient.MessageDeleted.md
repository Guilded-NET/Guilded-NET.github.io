---
title: MessageDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat."
---

## AbstractGuildedClient.MessageDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

```csharp
public IObservable<Guilded.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [Message](Message 'Guilded.Base.Content.Message')