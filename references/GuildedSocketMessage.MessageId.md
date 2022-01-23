---
title: MessageId
layout: references
section: references
tags:
  - references
  - property
description: "

An identifier that allows the event to be replayed.

```csharp
public string? MessageId { get; }
```"
---

## GuildedSocketMessage.MessageId Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

An identifier that allows the event to be replayed.

```csharp
public string? MessageId { get; }
```

### Remarks
  
The identifier of the event message. This can be passed to [LastMessageId](BaseGuildedClient.LastMessageId 'Guilded.NET.Base.BaseGuildedClient.LastMessageId') to receive any messages after this message.  
  
This property only holds the value if [Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `0`.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Event ID?