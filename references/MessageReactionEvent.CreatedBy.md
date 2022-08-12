---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted."
---

## MessageReactionEvent.CreatedBy Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageReactionEvent`](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')

Gets the identifier of [the user](User 'Guilded.Base.Users.User') that reacted.

```csharp
public Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If [a webhook](Webhook 'Guilded.Base.Servers.Webhook') created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [Reaction](Reaction 'Guilded.Base.Content.Reaction')
- [CreatedAt](Reaction.CreatedAt 'Guilded.Base.Content.Reaction.CreatedAt')
- [CreatedByWebhook](Reaction.CreatedByWebhook 'Guilded.Base.Content.Reaction.CreatedByWebhook')