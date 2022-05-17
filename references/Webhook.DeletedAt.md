---
title: DeletedAt
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was deleted."
---

## Webhook.DeletedAt Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook 'Guilded.Base.Servers.Webhook')

Gets the date when [the webhook](Webhook 'Guilded.Base.Servers.Webhook') was deleted.

```csharp
public System.Nullable<System.DateTime> DeletedAt { get; set; }
```

### Remarks
  
[The webhook](Webhook 'Guilded.Base.Servers.Webhook') will remain present after being deleted for the clients to be able to render the webhook's avatar and name.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Date

### See Also
- [Webhook](Webhook 'Guilded.Base.Servers.Webhook')
- [CreatedBy](Webhook.CreatedBy 'Guilded.Base.Servers.Webhook.CreatedBy')
- [CreatedAt](Webhook.CreatedAt 'Guilded.Base.Servers.Webhook.CreatedAt')