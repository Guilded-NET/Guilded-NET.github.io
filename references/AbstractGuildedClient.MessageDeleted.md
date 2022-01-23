---
title: MessageDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once someone deletes a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```"
---

## AbstractGuildedClient.MessageDeleted Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once someone deletes a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```

### Remarks
  
An event of the name `ChatMessageDeleted` and opcode `0` that occurs once someone creates/posts a message in the chat.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted')
- [Message](Message 'Guilded.NET.Base.Content.Message')