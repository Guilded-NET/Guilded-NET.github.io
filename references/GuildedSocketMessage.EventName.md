---
title: EventName
layout: references
section: references
tags:
  - references
  - property
description: "

The name of the event received.

```csharp
public string? EventName { get; }
```"
---

## GuildedSocketMessage.EventName Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

The name of the event received.

```csharp
public string? EventName { get; }
```

### Remarks
  
This only has a value if [Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `0`. It holds the name of the receiving Guilded event.

#### Property Value
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Name?