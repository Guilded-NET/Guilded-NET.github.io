---
title: GetServerAsync(HashId)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the specified [server](Server 'Guilded.Base.Servers.Server')."
---

## BaseGuildedClient.GetServerAsync(HashId) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')

Gets the specified [server](Server 'Guilded.Base.Servers.Server').

```csharp
public abstract System.Threading.Tasks.Task<Guilded.Base.Servers.Server> GetServerAsync(Guilded.Base.HashId server);
```
#### Parameters

<a name='Guilded.Base.BaseGuildedClient.GetServerAsync(Guilded.Base.HashId).server'></a>

`server` [HashId](HashId 'Guilded.Base.HashId')

The identifier of the [server](Server 'Guilded.Base.Servers.Server') to get

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[Server](Server 'Guilded.Base.Servers.Server')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
[Server](Server 'Guilded.Base.Servers.Server')