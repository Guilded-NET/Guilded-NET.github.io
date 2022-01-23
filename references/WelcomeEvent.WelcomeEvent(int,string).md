---
title: WelcomeEvent(int, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'). This is currently only used in deserialization.

```csharp
public WelcomeEvent(int heartbeatIntervalMs, string? lastMessageId);
```"
---

## WelcomeEvent(int, string) Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`WelcomeEvent`](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent')

Creates a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent'). This is currently only used in deserialization.

```csharp
public WelcomeEvent(int heartbeatIntervalMs, string? lastMessageId);
```
#### Parameters

<a name='Guilded.NET.Base.Events.WelcomeEvent.WelcomeEvent(int,string).heartbeatIntervalMs'></a>

`heartbeatIntervalMs` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The duration between heartbeats

<a name='Guilded.NET.Base.Events.WelcomeEvent.WelcomeEvent(int,string).lastMessageId'></a>

`lastMessageId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the last event sent