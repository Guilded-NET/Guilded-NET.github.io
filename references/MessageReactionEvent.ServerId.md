---
title: ServerId
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred."
---

## MessageReactionEvent.ServerId Property
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`MessageReactionEvent`](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')

Gets the identifier of [the server](Server 'Guilded.Base.Servers.Server') where the event occurred.

```csharp
public System.Nullable<Guilded.Base.HashId> ServerId { get; set; }
```

#### Property Value
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[HashId](HashId 'Guilded.Base.HashId')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Server ID?

### See Also
- [MessageReactionEvent](MessageReactionEvent 'Guilded.Base.Events.MessageReactionEvent')
- [Reaction](MessageReactionEvent.Reaction 'Guilded.Base.Events.MessageReactionEvent.Reaction')