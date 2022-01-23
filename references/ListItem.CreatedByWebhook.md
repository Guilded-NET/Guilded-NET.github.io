---
title: CreatedByWebhook
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the webhook creator of the list item.

```csharp
public System.Nullable<System.Guid> CreatedByWebhook { get; }
```"
---

## ListItem.CreatedByWebhook Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ListItem`](ListItem 'Guilded.NET.Base.Content.ListItem')

The identifier of the webhook creator of the list item.

```csharp
public System.Nullable<System.Guid> CreatedByWebhook { get; }
```

### Remarks
  
The identifier of the webhook that created this list item.  
> **Note:**    
> Currently, only chat messages can be created by Webhooks.

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Webhook ID?