---
title: BaseGuildedClient(Uri, Uri)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types."
---

## BaseGuildedClient(Uri, Uri) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Creates default settings for [BaseGuildedClient](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')'s child types.

```csharp
protected BaseGuildedClient(Uri apiUrl, Uri websocketUrl);
```

### Remarks
  
Inititates basic client components for API-related things, such as WebSocket and REST client. The rest is up to child types.
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.BaseGuildedClient(Uri,Uri).apiUrl'></a>

`apiUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to Guilded-like API

<a name='Guilded.Base.BaseGuildedClient.BaseGuildedClient(Uri,Uri).websocketUrl'></a>

`websocketUrl` [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')

The URL to Guilded-like WebSocket client