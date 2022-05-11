---
title: DeletedAt
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the date when the webhook was deleted."
---

## Webhook.DeletedAt Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`Webhook`](Webhook.md 'Guilded.Base.Servers.Webhook')

Gets the date when the webhook was deleted.

```csharp
public System.Nullable<System.DateTime> DeletedAt { get; set; }
```

### Remarks
  
The webhook will remain present after being deleted for the clients to be able to render the webhook's avatar and name.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Date