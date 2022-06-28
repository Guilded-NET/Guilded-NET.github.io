---
title: MessageEvent(Message, Nullable<HashId>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties."
---

## MessageEvent(Message, Nullable<HashId>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Initializes a new instance of [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.

```csharp
public MessageEvent(Guilded.Base.Content.Message message, System.Nullable<Guilded.Base.HashId> serverId=null);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.MessageEvent(Guilded.Base.Content.Message,System.Nullable_Guilded.Base.HashId_).message'></a>

`message` [Message](Message 'Guilded.Base.Content.Message')

The message received from the event

<a name='Guilded.Base.Events.MessageEvent.MessageEvent(Guilded.Base.Content.Message,System.Nullable_Guilded.Base.HashId_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message event occurred

### See Also
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')