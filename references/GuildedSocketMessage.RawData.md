---
title: RawData
layout: references
section: references
tags:
  - references
  - property
description: "

The data associated with the event.

```csharp
public Newtonsoft.Json.Linq.JObject? RawData { get; }
```"
---

## GuildedSocketMessage.RawData Property
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`GuildedSocketMessage`](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage')

The data associated with the event.

```csharp
public Newtonsoft.Json.Linq.JObject? RawData { get; }
```

### Remarks
  
The data associated with the receiving event/message. Holds the data of most messages, including [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'), [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') and [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException'). Only if [Opcode](GuildedSocketMessage.Opcode 'Guilded.NET.Base.Events.GuildedSocketMessage.Opcode') is `9`, this will be [null](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/null').

#### Property Value
[Newtonsoft.Json.Linq.JObject](https://docs.microsoft.com/en-us/dotnet/api/Newtonsoft.Json.Linq.JObject 'Newtonsoft.Json.Linq.JObject')  
Data?