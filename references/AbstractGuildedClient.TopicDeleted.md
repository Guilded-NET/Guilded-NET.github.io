---
title: TopicDeleted
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is deleted."
---

## AbstractGuildedClient.TopicDeleted Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is deleted.

```csharp
public IObservable<Guilded.Base.Events.TopicEvent> TopicDeleted { get; }
```

### Remarks
  
An event with the name `ForumTopicDeleted` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [TopicCreated](AbstractGuildedClient.TopicCreated 'Guilded.AbstractGuildedClient.TopicCreated')
- [TopicUpdated](AbstractGuildedClient.TopicUpdated 'Guilded.AbstractGuildedClient.TopicUpdated')