---
title: TopicEvent(Topic, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent') from the specified JSON properties."
---

## TopicEvent(Topic, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`TopicEvent`](TopicEvent 'Guilded.Base.Events.TopicEvent')

Initializes a new instance of [TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent') from the specified JSON properties.

```csharp
public TopicEvent(Guilded.Base.Content.Topic forumTopic, Guilded.Base.HashId serverId);
```
#### Parameters

<a name='Guilded.Base.Events.TopicEvent.TopicEvent(Guilded.Base.Content.Topic,Guilded.Base.HashId).forumTopic'></a>

`forumTopic` [Topic](Topic 'Guilded.Base.Content.Topic')

The [topic](Topic 'Guilded.Base.Content.Topic') received from the event

<a name='Guilded.Base.Events.TopicEvent.TopicEvent(Guilded.Base.Content.Topic,Guilded.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the [topic event](TopicEvent 'Guilded.Base.Events.TopicEvent') occurred

### See Also
- [TopicEvent](TopicEvent 'Guilded.Base.Events.TopicEvent')