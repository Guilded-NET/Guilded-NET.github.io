---
title: MessageEvent(Nullable<HashId>, Message)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties."
---

## MessageEvent(Nullable<HashId>, Message) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.

```csharp
public MessageEvent(System.Nullable<Guilded.Base.HashId> serverId, Guilded.Base.Content.Message message);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent.MessageEvent(System.Nullable_Guilded.Base.HashId_,Guilded.Base.Content.Message).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message event occurred

<a name='Guilded.Base.Events.MessageEvent.MessageEvent(System.Nullable_Guilded.Base.HashId_,Guilded.Base.Content.Message).message'></a>

`message` [Message](Message.md 'Guilded.Base.Content.Message')

The message received from the event