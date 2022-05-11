---
title: GuildedBotClient()
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance without authentication token."
---

## GuildedBotClient() Constructor
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient 'Guilded.GuildedBotClient')

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient') instance without authentication token.

```csharp
public GuildedBotClient();
```

### Remarks
  
This creates a new client and only initiates it. It does not connect to Guilded.  
  
If you want to connect to Guilded, use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.GuildedBotClient.ConnectAsync(string)') with bot's authentication token.

### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.GuildedBotClient')
- [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string) 'Guilded.GuildedBotClient.GuildedBotClient(string)')
- [AuthToken](GuildedBotClient.AuthToken 'Guilded.GuildedBotClient.AuthToken')