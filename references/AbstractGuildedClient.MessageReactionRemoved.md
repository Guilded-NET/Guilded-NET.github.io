---
title: MessageReactionRemoved
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is removed."
---

## AbstractGuildedClient.MessageReactionRemoved Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is removed.

```csharp
public IObservable<Guilded.Base.Events.MessageReactionEvent> MessageReactionRemoved { get; }
```

### Remarks
  
An event with the name `ChannelMessageReactionDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')
- [MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.AbstractGuildedClient.MessageDeleted')
- [MessageReactionAdded](AbstractGuildedClient.MessageReactionAdded 'Guilded.AbstractGuildedClient.MessageReactionAdded')