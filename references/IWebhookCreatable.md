---
title: IWebhookCreatable
layout: references
section: references
tags:
  - references
  - interface
description: "

The content that can be created by a webhook.

```csharp
public interface IWebhookCreatable
```"
---

## IWebhookCreatable Interface
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Content`](Guilded.NET.Base.Content 'Guilded.NET.Base.Content')

The content that can be created by a webhook.

```csharp
public interface IWebhookCreatable
```

Derived  
&#8627; [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')  
&#8627; [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')  
&#8627; [Message](Message 'Guilded.NET.Base.Content.Message')  
&#8627; [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')

### Remarks
  
The interface for channel content that can be created by a webhook.

| Properties | |
| :--- | :--- |
| [CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.NET.Base.Content.IWebhookCreatable.CreatedByWebhook') | The identifier of the webhook creator of the content. |
