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
###### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient.md 'Guilded.AbstractGuildedClient')

Represents an event with the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

```csharp
public IObservable<Guilded.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')
- [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent')
- [Message](Message.md 'Guilded.Base.Content.Message')