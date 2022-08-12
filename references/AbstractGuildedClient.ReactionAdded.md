---
title: ReactionAdded
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is added."
---

## AbstractGuildedClient.ReactionAdded Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when [a reaction](Reaction 'Guilded.Base.Content.Reaction') on [a message](Message 'Guilded.Base.Content.Message') is added.

```csharp
public IObservable<Guilded.Base.Events.MessageReactionEvent> ReactionAdded { get; }
```

### Remarks
  
An event with the name `ChannelMessageReactionCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.AbstractGuildedClient.MessageCreated')
- [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.AbstractGuildedClient.MessageUpdated')
- [MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.AbstractGuildedClient.MessageDeleted')
- [MessageReactionRemoved](AbstractGuildedClient.MessageReactionRemoved 'Guilded.AbstractGuildedClient.MessageReactionRemoved')