---
title: MessageCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new message](Message 'Guilded.Base.Content.Message') is sent."
---

## AbstractGuildedClient.MessageCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a new message](Message 'Guilded.Base.Content.Message') is sent.

```csharp
public IObservable<Guilded.Base.Events.MessageEvent> MessageCreated { get; }
```

### Remarks
  
An event with the name `ChatMessageCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')
- [MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.AbstractGuildedClient.MessageDeleted')
- [MessageReactionAdded](AbstractGuildedClient.MessageReactionAdded 'Guilded.AbstractGuildedClient.MessageReactionAdded')
- [MessageReactionRemoved](AbstractGuildedClient.MessageReactionRemoved 'Guilded.AbstractGuildedClient.MessageReactionRemoved')