---
title: MessageId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of the last received event."
---

## ResumeEvent.MessageId Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`ResumeEvent`](ResumeEvent.md 'Guilded.Base.Events.ResumeEvent')

Gets the identifier of the last received event.

```csharp
public string MessageId { get; }
```

### Remarks
  
This is the identifier of the event message that was passed in `guilded-last-message-id`.  
  
You can get the identifier of the event message by using [MessageId](GuildedSocketMessage.MessageId.md 'Guilded.Base.Events.GuildedSocketMessage.MessageId') property from events.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Event message ID