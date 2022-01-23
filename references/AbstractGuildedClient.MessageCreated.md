---
title: MessageCreated
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once someone creates a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageCreatedEvent> MessageCreated { get; }
```"
---

## AbstractGuildedClient.MessageCreated Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once someone creates a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageCreatedEvent> MessageCreated { get; }
```

### Remarks
  
An event of the name `ChatMessageCreated` and opcode `0` that occurs once someone creates/posts a message in the chat. When receiving this event, [UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will never hold a value.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.NET.Base.Content.Message')