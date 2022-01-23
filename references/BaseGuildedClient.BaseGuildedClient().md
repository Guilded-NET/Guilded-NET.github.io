---
title: BaseGuildedClient()
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api') as URL.

```csharp
protected BaseGuildedClient();
```"
---

## BaseGuildedClient() Constructor
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api') as URL.

```csharp
protected BaseGuildedClient();
```

### Remarks
  
Inititates REST client and serializer settings.  
  
The [Api](GuildedUrl.Api 'Guilded.NET.Base.GuildedUrl.Api') property and [Websocket](GuildedUrl.Websocket 'Guilded.NET.Base.GuildedUrl.Websocket') property URLs will be used by default.