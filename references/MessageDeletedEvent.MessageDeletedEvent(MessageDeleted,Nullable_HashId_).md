---
title: MessageDeletedEvent(MessageDeleted, Nullable<HashId>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties."
---

## MessageDeletedEvent(MessageDeleted, Nullable<HashId>) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeletedEvent`](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')

Initializes a new instance of [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent') from the specified JSON properties.

```csharp
public MessageDeletedEvent(Guilded.Base.Events.MessageDeletedEvent.MessageDeleted message, System.Nullable<Guilded.Base.HashId> serverId);
```
#### Parameters

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.Base.Events.MessageDeletedEvent.MessageDeleted,System.Nullable_Guilded.Base.HashId_).message'></a>

`message` [MessageDeleted](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

The minimal information about the deleted message

<a name='Guilded.Base.Events.MessageDeletedEvent.MessageDeletedEvent(Guilded.Base.Events.MessageDeletedEvent.MessageDeleted,System.Nullable_Guilded.Base.HashId_).serverId'></a>

`serverId` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')

The identifier of [the server](Server 'Guilded.Base.Servers.Server') where the message was deleted

### See Also
- [MessageDeletedEvent](MessageDeletedEvent 'Guilded.Base.Events.MessageDeletedEvent')