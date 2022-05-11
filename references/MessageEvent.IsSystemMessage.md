---
title: IsSystemMessage
layout: references
section: references
tags:
  - references
  - property
description: "

Gets whether the specified message is a system message."
---

## MessageEvent.IsSystemMessage Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageEvent`](MessageEvent.md 'Guilded.Base.Events.MessageEvent')

Gets whether the specified message is a system message.

```csharp
public bool IsSystemMessage { get; }
```

### Remarks
  
A system message is a message that is created automatically on specific events, such as renaming the channel. Usually, it's something like "User has renamed the channel from X to Y"

#### Property Value
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Message is a system message