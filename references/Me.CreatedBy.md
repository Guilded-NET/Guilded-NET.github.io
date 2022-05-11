---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [user](User 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')."
---

## Me.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Me`](Me 'Guilded.Base.Users.Me')

Gets the identifier of [user](User 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').

```csharp
public Guilded.Base.HashId CreatedBy { get; set; }
```

### Remarks
  
This should usually be the identifier of your account or [the user](User 'Guilded.Base.Users.User') who owns the bot.

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [Me](Me 'Guilded.Base.Users.Me')
- [CreatedAt](Me.CreatedAt 'Guilded.Base.Users.Me.CreatedAt')