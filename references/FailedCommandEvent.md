---
title: FailedCommandEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs once someone invokes a command."
---

## FailedCommandEvent Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents an event that occurs once someone invokes a command.

```csharp
public class FailedCommandEvent : Guilded.Commands.CommandEvent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') &#129106; FailedCommandEvent

| Constructors | |
| :--- | :--- |
| [FailedCommandEvent(RootCommandContext, string, IEnumerable&lt;string&gt;, FallbackType)](FailedCommandEvent.FailedCommandEvent(RootCommandContext,string,IEnumerable_string_,FallbackType) 'Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>, Guilded.Commands.FallbackType)') | Initializes a new instance of [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent'). |

| Properties | |
| :--- | :--- |
| [Type](FailedCommandEvent.Type 'Guilded.Commands.FailedCommandEvent.Type') | Gets the type of the error that occurred. |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')