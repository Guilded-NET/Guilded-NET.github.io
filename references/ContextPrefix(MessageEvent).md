---
title: ContextPrefix(MessageEvent)
layout: references
section: references
tags:
  - references
  - delegate
description: "

Defines a method to fetch prefix."
---

## ContextPrefix(MessageEvent) Delegate
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Defines a method to fetch prefix.

```csharp
public delegate string ContextPrefix(Guilded.Base.Events.MessageEvent msgCreated);
```

### Remarks
  
Defines a method that will be used to fetch the prefix of the command. This allows context-based prefixes, for things like server-wide prefixes, group-wide prefixes or even user-specific prefixes.
#### Parameters

<a name='Guilded.Commands.ContextPrefix(Guilded.Base.Events.MessageEvent).msgCreated'></a>

`msgCreated` [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')

The message that was created

#### Returns
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
Prefix

### See Also
- [CommandModule](CommandModule 'Guilded.Commands.CommandModule')