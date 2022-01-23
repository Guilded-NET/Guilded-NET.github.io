---
title: GuildedBotClient()
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance without authentication token.

```csharp
public GuildedBotClient();
```"
---

## GuildedBotClient() Constructor
###### **Assembly:** `Guilded.NET`<br/>**Type:** [`GuildedBotClient`](GuildedBotClient 'Guilded.NET.GuildedBotClient')

Creates a new [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') instance without authentication token.

```csharp
public GuildedBotClient();
```

### Remarks
  
This creates a new client and only initiates it. It does not connect to Guilded.  
  
If you want to connect to Guilded, use [ConnectAsync(string)](GuildedBotClient.ConnectAsync(string) 'Guilded.NET.GuildedBotClient.ConnectAsync(string)') with bot's authentication token.