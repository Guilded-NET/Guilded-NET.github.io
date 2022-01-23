---
title: OnSocketMessage(GuildedSocketMessage)
layout: references
section: references
tags:
  - references
  - method
description: "

When the socket message event is invoked.

```csharp
protected void OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage message);
```"
---

## AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) Method
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

When the socket message event is invoked.

```csharp
protected void OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage message);
```

### Remarks
  
Receives and handles received [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage') messages.
#### Parameters

<a name='Guilded.NET.AbstractGuildedClient.OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage).message'></a>

`message` [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

A message received from a WebSocket