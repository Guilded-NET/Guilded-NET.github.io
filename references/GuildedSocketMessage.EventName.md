---
title: EventName
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the name of the event received."
---

## GuildedSocketMessage.EventName Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

Gets the name of the event received.

```csharp
public string? EventName { get; }
```

### Remarks
  
This only has a value if [Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') is `0`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Name?

### See Also
- [GuildedSocketMessage](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')
- [Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode')
- [RawData](GuildedSocketMessage.RawData 'Guilded.Base.Events.GuildedSocketMessage.RawData')
- [MessageId](GuildedSocketMessage.MessageId 'Guilded.Base.Events.GuildedSocketMessage.MessageId')