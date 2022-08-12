---
title: TopicCreated
layout: references
section: references
tags:
  - references
  - property
description: "

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a new [forum topic](Topic 'Guilded.Base.Content.Topic') is posted."
---

## AbstractGuildedClient.TopicCreated Property
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

Gets [the observable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable-1 'System.IObservable`1') for an event when a new [forum topic](Topic 'Guilded.Base.Content.Topic') is posted.

```csharp
public IObservable<Guilded.Base.Events.TopicEvent> TopicCreated { get; }
```

### Remarks
  
An event with the name `ForumTopicCreated` and opcode `0`.

#### Property Value
[System.IObservable](https://docs.microsoft.com/en-us/dotnet/api/System.IObservable 'System.IObservable')

### See Also
- [TopicUpdated](AbstractGuildedClient.TopicUpdated 'Guilded.AbstractGuildedClient.TopicUpdated')
- [TopicDeleted](AbstractGuildedClient.TopicDeleted 'Guilded.AbstractGuildedClient.TopicDeleted')