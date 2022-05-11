---
title: MessageEvent(Nullable<HashId>, T)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties."
---

## MessageEvent(Nullable<HashId>, T) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent<T>`](MessageEvent_T_.md 'Guilded.Base.Events.MessageEvent<T>')

Initializes a new instance of [MessageEvent](MessageEvent.md 'Guilded.Base.Events.MessageEvent') from the specified JSON properties.

```csharp
protected MessageEvent(System.Nullable<Guilded.Base.HashId> serverId, T message);
```
#### Parameters

<a name='Guilded.Base.Events.MessageEvent_T_.MessageEvent(System.Nullable_Guilded.Base.HashId_,T).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message event occurred

<a name='Guilded.Base.Events.MessageEvent_T_.MessageEvent(System.Nullable_Guilded.Base.HashId_,T).message'></a>

`message` [T](MessageEvent_T_.md#Guilded.Base.Events.MessageEvent_T_.T 'Guilded.Base.Events.MessageEvent<T>.T')

The message received from the event