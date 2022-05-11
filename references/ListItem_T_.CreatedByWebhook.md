---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the webhook that created the list item."
---

## ListItem<T>.CreatedByWebhook Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ListItem<T>`](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')

Gets the identifier of the webhook that created the list item.

```csharp
public System.Nullable<Guid> CreatedByWebhook { get; }
```

### Remarks
> **Note:**    
> Currently, only chat messages can be created by Webhooks.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Webhook ID?