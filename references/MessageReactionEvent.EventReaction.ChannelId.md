---
title: ChannelId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is."
---

## MessageReactionEvent.EventReaction.ChannelId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`EventReaction`](MessageReactionEvent.EventReaction 'Guilded.Base.Events.MessageReactionEvent.EventReaction')

Gets the identifier of [the channel](ServerChannel 'Guilded.Base.Servers.ServerChannel') where [the message](Message 'Guilded.Base.Content.Message') is.

```csharp
public Guid ChannelId { get; }
```

#### Property Value
[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
[Channel ID](ServerChannel.Id 'Guilded.Base.Servers.ServerChannel.Id')