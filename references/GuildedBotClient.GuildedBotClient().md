---
title: GuildedBotClient()
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient') instance without authentication token."
---

## GuildedBotClient() Constructor
###### **Assembly:** `Guilded`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient.md 'Guilded.GuildedBotClient')

Creates a new [GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient') instance without authentication token.

```csharp
public GuildedBotClient();
```

### Remarks
  
This creates a new client and only initiates it. It does not connect to Guilded.  
  
If you want to connect to Guilded, use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string).md 'Guilded.GuildedBotClient.ConnectAsync(string)') with bot's authentication token.

### See Also
- [GuildedBotClient](GuildedBotClient.md 'Guilded.GuildedBotClient')
- [GuildedBotClient(string)](GuildedBotClient.GuildedBotClient(string).md 'Guilded.GuildedBotClient.GuildedBotClient(string)')
- [AuthToken](GuildedBotClient.AuthToken.md 'Guilded.GuildedBotClient.AuthToken')