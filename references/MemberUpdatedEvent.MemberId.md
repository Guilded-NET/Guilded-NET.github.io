---
title: MemberId
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the member.

```csharp
public Guilded.NET.Base.HashId MemberId { get; }
```"
---

## MemberUpdatedEvent.MemberId Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')

The identifier of the member.

```csharp
public Guilded.NET.Base.HashId MemberId { get; }
```

### Remarks
  
Gets the identifier of the updated member.  
  
Fetched from [UserInfo](MemberUpdatedEvent.UserInfo 'Guilded.NET.Base.Events.MemberUpdatedEvent.UserInfo') property.

#### Property Value
[HashId](HashId 'Guilded.NET.Base.HashId')