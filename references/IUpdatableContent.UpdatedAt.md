---
title: UpdatedAt
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were edited."
---

## IUpdatableContent.UpdatedAt Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`IUpdatableContent`](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')

Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were edited.

```csharp
System.Nullable<System.DateTime> UpdatedAt { get; }
```

### Remarks
  
Only returns the most recent update.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Date?

### See Also
- [IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')
- [CreatedAt](ICreatableContent.CreatedAt 'Guilded.Base.Content.ICreatableContent.CreatedAt')
- [CreatedBy](ICreatableContent.CreatedBy 'Guilded.Base.Content.ICreatableContent.CreatedBy')
- [CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook')