---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')."
---

## Me.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Me`](Me.md 'Guilded.Base.Users.Me')

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that has created [this client](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient').

```csharp
public Guilded.Base.HashId CreatedBy { get; set; }
```

### Remarks
  
This should usually be the identifier of your account or the user who owns the bot.

#### Property Value
[HashId](HashId.md 'Guilded.Base.HashId')  
User ID