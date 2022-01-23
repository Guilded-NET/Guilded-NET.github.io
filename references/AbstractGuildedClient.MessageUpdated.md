---
title: MessageUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

An event that occurs once someone edits a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageUpdatedEvent> MessageUpdated { get; }
```"
---

## AbstractGuildedClient.MessageUpdated Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

An event that occurs once someone edits a message.

```csharp
public System.IObservable<Guilded.NET.Base.Events.MessageUpdatedEvent> MessageUpdated { get; }
```

### Remarks
  
An event of the name `ChatMessageUpdated` and opcode `0` that occurs once someone updates/edits a message in the chat.  
  
When receiving this event, [UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt') will always hold a value.

#### Property Value
[System.IObservable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')[MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1')

### See Also
- [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent')
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent')
- [Message](Message 'Guilded.NET.Base.Content.Message')