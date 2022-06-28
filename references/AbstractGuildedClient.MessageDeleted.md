---
title: MessageDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a message](Message 'Guilded.Base.Content.Message') is deleted."
---

## AbstractGuildedClient.MessageDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a message](Message 'Guilded.Base.Content.Message') is deleted.

```csharp
public IObservable<Guilded.Base.Events.MessageDeletedEvent> MessageDeleted { get; }
```

### Remarks
  
An event with the name `ChatMessageDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')
- [ReactionAdded](AbstractGuildedClient.ReactionAdded 'Guilded.AbstractGuildedClient.ReactionAdded')
- [ReactionRemoved](AbstractGuildedClient.ReactionRemoved 'Guilded.AbstractGuildedClient.ReactionRemoved')