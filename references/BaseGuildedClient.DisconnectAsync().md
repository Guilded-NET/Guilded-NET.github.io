---
title: DisconnectAsync()
layout: references
section: references
tags:
  - references
  - method
description: "

Disconnects this client from Guilded."
---

## BaseGuildedClient.DisconnectAsync() Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`BaseGuildedClient`](BaseGuildedClient.md 'Guilded.Base.BaseGuildedClient')

Disconnects this client from Guilded.

```csharp
public abstract System.Threading.Tasks.Task DisconnectAsync();
```

### Remarks
  
Stops any connections this client has with Guilded.  
> **Tip:**    
> See documentation of child types for more information.

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')

### See Also
- [ConnectAsync()](BaseGuildedClient.ConnectAsync().md 'Guilded.Base.BaseGuildedClient.ConnectAsync()')
- [Dispose()](BaseGuildedClient.Dispose().md 'Guilded.Base.BaseGuildedClient.Dispose()')