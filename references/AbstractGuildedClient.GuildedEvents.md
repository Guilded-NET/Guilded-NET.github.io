---
title: GuildedEvents
layout: references
section: references
tags:
  - references
  - property
description: "

A dictionary of Guilded events.

```csharp
protected System.Collections.Generic.Dictionary<object,Guilded.NET.IEventInfo<object>> GuildedEvents { get; set; }
```"
---

## AbstractGuildedClient.GuildedEvents Property
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`AbstractGuildedClient`](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient')

A dictionary of Guilded events.

```csharp
protected System.Collections.Generic.Dictionary<object,Guilded.NET.IEventInfo<object>> GuildedEvents { get; set; }
```

### Remarks
  
A dictionary of all supported Guilded events, containing their event names and information about the event to use.  
  
You can add more events to this dictionary if Guilded.NET does not support certain events.

#### Property Value
[System.Collections.Generic.Dictionary&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[,](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')[Guilded.NET.IEventInfo&lt;](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](IEventInfo_T_ 'Guilded.NET.IEventInfo<T>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2 'System.Collections.Generic.Dictionary`2')  
Dictionary of events