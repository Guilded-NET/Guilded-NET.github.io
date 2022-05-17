---
title: UpdatedBy
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc')."
---

## Doc.UpdatedBy Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Doc`](Doc 'Guilded.Base.Content.Doc')

Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc').

```csharp
public System.Nullable<Guilded.Base.HashId> UpdatedBy { get; }
```

### Remarks
  
Only includes [the user](User 'Guilded.Base.Users.User') who updated [the document](Doc 'Guilded.Base.Content.Doc') most recently.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
[User ID](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id')?

### See Also
- [Doc](Doc 'Guilded.Base.Content.Doc')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')
- [CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')