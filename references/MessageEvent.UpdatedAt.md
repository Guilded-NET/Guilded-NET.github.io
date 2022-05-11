---
title: UpdatedAt
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited."
---

## MessageEvent.UpdatedAt Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent 'Guilded.Base.Events.MessageEvent')

Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited.

```csharp
public System.Nullable<System.DateTime> UpdatedAt { get; }
```

### Remarks
  
Only returns the most recent update.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Date?

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')
- [CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')
- [CreatedByWebhook](Message.CreatedByWebhook 'Guilded.Base.Content.Message.CreatedByWebhook')