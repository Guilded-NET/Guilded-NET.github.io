---
title: MemberBanEvent(HashId, MemberBan)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties."
---

## MemberBanEvent(HashId, MemberBan) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberBanEvent`](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent')

Initializes a new instance of [MemberBanEvent](MemberBanEvent.md 'Guilded.Base.Events.MemberBanEvent') from the specified JSON properties.

```csharp
public MemberBanEvent(Guilded.Base.HashId serverId, Guilded.Base.Servers.MemberBan serverMemberBan);
```
#### Parameters

<a name='Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId,Guilded.Base.Servers.MemberBan).serverId'></a>

`serverId` [HashId](HashId.md 'Guilded.Base.HashId')

The identifier of the server where member got banned/unbanned

<a name='Guilded.Base.Events.MemberBanEvent.MemberBanEvent(Guilded.Base.HashId,Guilded.Base.Servers.MemberBan).serverMemberBan'></a>

`serverMemberBan` [MemberBan](MemberBan.md 'Guilded.Base.Servers.MemberBan')

The information about the member's ban