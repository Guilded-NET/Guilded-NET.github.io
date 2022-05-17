---
title: LastMessageId
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the last WebSocket message."
---

## BaseGuildedClient.LastMessageId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

The identifier of the last WebSocket message.

```csharp
public string? LastMessageId { get; set; }
```

### Remarks
  
Allows you to set the identifier of the last message to get events that weren't received.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
WebSocket Message ID?