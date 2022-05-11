---
title: MemberUpdatedEvent(HashId, MemberUpdate)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties."
---

## MemberUpdatedEvent(HashId, MemberUpdate) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')

Initializes a new instance of [MemberUpdatedEvent](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent') from the specified JSON properties.

```csharp
public MemberUpdatedEvent(Guilded.Base.HashId serverId, Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate userInfo);
```
#### Parameters

<a name='Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId,Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate).serverId'></a>

`serverId` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where the [member](MemberUpdatedEvent.UserInfo.md 'Guilded.Base.Events.MemberUpdatedEvent.UserInfo') has been updated

<a name='Guilded.Base.Events.MemberUpdatedEvent.MemberUpdatedEvent(Guilded.Base.HashId,Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate).userInfo'></a>

`userInfo` [MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')

The properties that have been updated in the member