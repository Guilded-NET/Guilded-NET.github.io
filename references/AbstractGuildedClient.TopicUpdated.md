---
title: TopicUpdated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is edited."
---

## AbstractGuildedClient.TopicUpdated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a [forum topic](Topic 'Guilded.Base.Content.Topic') is edited.

```csharp
public IObservable<Guilded.Base.Events.TopicEvent> TopicUpdated { get; }
```

### Remarks
  
An event with the name `ForumTopicUpdated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [TopicCreated](AbstractGuildedClient.TopicCreated 'Guilded.AbstractGuildedClient.TopicCreated')
- [TopicDeleted](AbstractGuildedClient.TopicDeleted 'Guilded.AbstractGuildedClient.TopicDeleted')