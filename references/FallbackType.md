---
title: FallbackType
layout: references
section: references
tags:
  - references
  - enum
description: "

Represents the type of [sub command failure](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')."
---

## FallbackType Enum
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the type of [sub command failure](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').

```csharp
public enum FallbackType
```
### Fields

<a name='Guilded.Commands.FallbackType.BadArguments'></a>

`BadArguments` 2

The [sub-command/command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') was being invoked with bad arguments.

<a name='Guilded.Commands.FallbackType.NoCommandFound'></a>

`NoCommandFound` 1

The [sub-command/command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') with the specified name or arguments does not exist.

<a name='Guilded.Commands.FallbackType.Unspecified'></a>

`Unspecified` 0

The parent command was called with the name of [sub-command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') not given.

### See Also
- [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')