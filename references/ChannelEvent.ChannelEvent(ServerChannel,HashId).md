---
title: ChannelEvent(ServerChannel, HashId)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent') from the specified JSON properties."
---

## ChannelEvent(ServerChannel, HashId) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`ChannelEvent`](ChannelEvent 'Guilded.Base.Events.ChannelEvent')

Initializes a new instance of [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent') from the specified JSON properties.

```csharp
public ChannelEvent(Guilded.Base.Servers.ServerChannel channel, Guilded.Base.HashId serverId);
```
#### Parameters

<a name='Guilded.Base.Events.ChannelEvent.ChannelEvent(Guilded.Base.Servers.ServerChannel,Guilded.Base.HashId).channel'></a>

`channel` [ServerChannel](ServerChannel 'Guilded.Base.Servers.ServerChannel')

The channel received from the event

<a name='Guilded.Base.Events.ChannelEvent.ChannelEvent(Guilded.Base.Servers.ServerChannel,Guilded.Base.HashId).serverId'></a>

`serverId` [HashId](HashId 'Guilded.Base.HashId')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the channel event occurred

### See Also
- [ChannelEvent](ChannelEvent 'Guilded.Base.Events.ChannelEvent')