---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the reaction."
---

## Reaction.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Reaction`](Reaction.md 'Guilded.Base.Content.Reaction')

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the reaction.

```csharp
public Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If [a webhook](Webhook.md 'Guilded.Base.Servers.Webhook') created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId.md 'Guilded.Base.HashId')  
User ID