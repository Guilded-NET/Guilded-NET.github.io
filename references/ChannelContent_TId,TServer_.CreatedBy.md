---
title: CreatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content."
---

## ChannelContent<TId,TServer>.CreatedBy Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ChannelContent<TId,TServer>`](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')

Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content.

```csharp
public Guilded.Base.HashId CreatedBy { get; }
```

### Remarks
  
If webhook or bot created this reaction, the value of this property will be `Ann6LewA`.

#### Property Value
[HashId](HashId.md 'Guilded.Base.HashId')  
User ID