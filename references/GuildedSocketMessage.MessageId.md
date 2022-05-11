---
title: MessageId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets an identifier that allows the event to be replayed."
---

## GuildedSocketMessage.MessageId Property
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage.md 'Guilded.Base.Events.GuildedSocketMessage')

Gets an identifier that allows the event to be replayed.

```csharp
public string? MessageId { get; }
```

### Remarks
  
This can be passed to [LastMessageId](BaseGuildedClient.LastMessageId.md 'Guilded.Base.BaseGuildedClient.LastMessageId') to receive any messages after this message.  
  
This property only holds the value if [Opcode](GuildedSocketMessage.Opcode.md 'Guilded.Base.Events.GuildedSocketMessage.Opcode') is `0`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Event ID?