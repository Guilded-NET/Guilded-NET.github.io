---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [user](User 'Guilded.Base.Users.User') creator of the content."
---

## ICreatableContent.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ICreatableContent`](ICreatableContent 'Guilded.Base.Content.ICreatableContent')

Gets the identifier of [user](User 'Guilded.Base.Users.User') creator of the content.

```csharp
Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If [a webhook](Webhook 'Guilded.Base.Servers.Webhook') created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>'), the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')
- [CreatedAt](ICreatableContent.CreatedAt 'Guilded.Base.Content.ICreatableContent.CreatedAt')
- [UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.Base.Content.IUpdatableContent.UpdatedAt')
- [CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook')