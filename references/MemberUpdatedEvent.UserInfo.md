---
title: UserInfo
layout: references
section: references
tags:
  - references
  - property
description: "

The info about updated member.

```csharp
public Guilded.NET.Base.Servers.Member UserInfo { get; }
```"
---

## MemberUpdatedEvent.UserInfo Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`MemberUpdatedEvent`](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')

The info about updated member.

```csharp
public Guilded.NET.Base.Servers.Member UserInfo { get; }
```

### Remarks
  
Defines an update that the member has received.  
  
As of now, this only means [Nickname](Member.Nickname 'Guilded.NET.Base.Servers.Member.Nickname') has been updated.

#### Property Value
[Member](Member 'Guilded.NET.Base.Servers.Member')  
Member info