---
title: BaseGuildedClient()
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.Base.GuildedUrl.Api') as URL."
---

## BaseGuildedClient() Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types with [Api](GuildedUrl.Api 'Guilded.Base.GuildedUrl.Api') as URL.

```csharp
protected BaseGuildedClient();
```

### Remarks
  
Inititates REST client and serializer settings.  
  
The [Api](GuildedUrl.Api 'Guilded.Base.GuildedUrl.Api') property and [Websocket](GuildedUrl.Websocket 'Guilded.Base.GuildedUrl.Websocket') property URLs will be used by default.