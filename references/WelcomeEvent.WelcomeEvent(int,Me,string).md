---
title: WelcomeEvent(int, Me, string)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties."
---

## WelcomeEvent(int, Me, string) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`WelcomeEvent`](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')

Initializes a new instance of [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent') from the specified JSON properties.

```csharp
public WelcomeEvent(int heartbeatIntervalMs, Guilded.Base.Users.Me user, string? lastMessageId);
```
#### Parameters

<a name='Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int,Guilded.Base.Users.Me,string).heartbeatIntervalMs'></a>

`heartbeatIntervalMs` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The duration between heartbeats

<a name='Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int,Guilded.Base.Users.Me,string).user'></a>

`user` [Me](Me 'Guilded.Base.Users.Me')

The current logged in user

<a name='Guilded.Base.Events.WelcomeEvent.WelcomeEvent(int,Guilded.Base.Users.Me,string).lastMessageId'></a>

`lastMessageId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The identifier of the last event sent

### See Also
- [WelcomeEvent](WelcomeEvent 'Guilded.Base.Events.WelcomeEvent')