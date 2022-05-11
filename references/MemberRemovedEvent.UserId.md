---
title: UserId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the member who has been kicked or has left."
---

## MemberRemovedEvent.UserId Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MemberRemovedEvent`](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')

Gets the identifier of the member who has been kicked or has left.

```csharp
public Guilded.Base.HashId UserId { get; }
```

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [MemberRemovedEvent](MemberRemovedEvent 'Guilded.Base.Events.MemberRemovedEvent')
- [ServerId](MemberRemovedEvent.ServerId 'Guilded.Base.Events.MemberRemovedEvent.ServerId')
- [IsKick](MemberRemovedEvent.IsKick 'Guilded.Base.Events.MemberRemovedEvent.IsKick')
- [IsBan](MemberRemovedEvent.IsBan 'Guilded.Base.Events.MemberRemovedEvent.IsBan')