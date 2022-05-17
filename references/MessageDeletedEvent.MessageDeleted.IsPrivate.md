---
title: IsPrivate
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')."
---

## MessageDeletedEvent.MessageDeleted.IsPrivate Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageDeleted`](MessageDeletedEvent.MessageDeleted 'Guilded.Base.Events.MessageDeletedEvent.MessageDeleted')

Gets whether the deleted message was [private mention](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate') or a [private reply](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate').

```csharp
public bool IsPrivate { get; }
```

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
[Message](Message 'Guilded.Base.Content.Message') is private