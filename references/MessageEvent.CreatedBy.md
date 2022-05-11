---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')."
---

## MessageEvent.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').

```csharp
public Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId 'Guilded.Base.HashId')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')

### See Also
- [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')
- [UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.Base.Content.IUpdatableContent.UpdatedAt')