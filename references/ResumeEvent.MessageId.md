---
title: MessageId
layout: references
section: references
tags:
  - references
  - property
description: "

The identifier of the last received event.

```csharp
public string MessageId { get; }
```"
---

## ResumeEvent.MessageId Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`ResumeEvent`](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent')

The identifier of the last received event.

```csharp
public string MessageId { get; }
```

### Remarks
  
Gets the identifier of the last received event message that was passed in `guilded-last-message-id`.  
  
You can get the identifier of the event message by using [MessageId](GuildedSocketMessage.MessageId 'Guilded.NET.Base.Events.GuildedSocketMessage.MessageId') property from events.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Event message ID