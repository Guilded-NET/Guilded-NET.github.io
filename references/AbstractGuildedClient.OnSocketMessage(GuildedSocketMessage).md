---
title: OnSocketMessage(GuildedSocketMessage)
layout: references
section: references
tags:
  - references
  - method
description: "

When the socket message event is invoked."
---

## AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) Method
##### **Assembly:** `Guilded`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

When the socket message event is invoked.

```csharp
protected void OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage message);
```

### Remarks
  
Receives and handles received [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage') messages.
#### Parameters

<a name='Guilded.AbstractGuildedClient.OnSocketMessage(Guilded.Base.Events.GuildedSocketMessage).message'></a>

`message` [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

A message received from a WebSocket