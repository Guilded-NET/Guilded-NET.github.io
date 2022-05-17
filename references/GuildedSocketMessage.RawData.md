---
title: RawData
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the data associated with the event."
---

## GuildedSocketMessage.RawData Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.Base.Events.GuildedSocketMessage')

Gets the data associated with the event.

```csharp
public Newtonsoft.Json.Linq.JObject? RawData { get; }
```

### Remarks
  
Holds the data of most messages, including [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent'), [ResumeEvent](ResumeEvent 'Guilded.Base.Events.ResumeEvent') and [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException'). Only if [Opcode](GuildedSocketMessage.Opcode 'Guilded.Base.Events.GuildedSocketMessage.Opcode') is `9`, this will be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').

#### Property Value
[Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')  
Data?