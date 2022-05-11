---
title: UserInfo
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the properties that have been updated in the member."
---

## MemberUpdatedEvent.UserInfo Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent.md 'Guilded.Base.Events.MemberUpdatedEvent')

Gets the properties that have been updated in the member.

```csharp
public Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate UserInfo { get; }
```

### Remarks
  
As of now, this only means [Nickname](MemberUpdatedEvent.MemberUpdate.Nickname.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate.Nickname') has been updated.

#### Property Value
[MemberUpdate](MemberUpdatedEvent.MemberUpdate.md 'Guilded.Base.Events.MemberUpdatedEvent.MemberUpdate')  
Member info