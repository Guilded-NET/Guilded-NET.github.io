---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the content."
---

## ICreatableContent.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ICreatableContent`](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the content.

```csharp
Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If [a webhook](Webhook.md 'Guilded.Base.Servers.Webhook') created the content, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId.md 'Guilded.Base.HashId')  
User ID