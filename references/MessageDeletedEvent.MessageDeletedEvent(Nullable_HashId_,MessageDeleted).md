---
title: MessageDeletedEvent(Nullable<HashId>, MessageDeleted)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties."
---

## MessageDeletedEvent(Nullable<HashId>, MessageDeleted) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeletedEvent`](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent')

Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent.md 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties.

```csharp
public MessageDeletedEvent(System.Nullable<Guilded.Base.HashId> serverId, Guilded.Base.Events.MessageDeletedEvent.MessageDeleted message);
```
#### Parameters

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(System.Nullable_Guilded.Base.HashId_,Guilded.Base.Events.MessageDeletedEvent.MessageDeleted).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId.md 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of the server where the message was deleted

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(System.Nullable_Guilded.Base.HashId_,Guilded.Base.Events.MessageDeletedEvent.MessageDeleted).message'></a>

`message` [MessageDeleted](MessageDeletedEvent.MessageDeleted.md 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

The minimal information about the deleted message