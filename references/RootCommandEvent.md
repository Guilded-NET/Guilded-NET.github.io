---
title: RootCommandEvent
layout: references
section: references
tags:
  - references
  - struct
description: "

Represents the information about the root/original command."
---

## RootCommandEvent Struct
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about the root/original command.

```csharp
public struct RootCommandEvent
```

### Example
  
Let's say we have this command structure:  
  
```csharp  
- `config` command  
    - `items` command  
        - `add` command with arguments (string name)  
```  
  
Even if we invoke <q>config items add</q> command, the root command will always remain <q>config</q>.

| Constructors | |
| :--- | :--- |
| [RootCommandEvent(MessageEvent, string, string, IEnumerable&lt;string&gt;)](RootCommandEvent.RootCommandEvent(MessageEvent,string,string,IEnumerable_string_) 'Guilded.Commands.RootCommandEvent.RootCommandEvent(Guilded.Base.Events.MessageEvent, string, string, System.Collections.Generic.IEnumerable<string>)') | Initializes a new instance of [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent'). |

| Properties | |
| :--- | :--- |
| [MessageEvent](RootCommandEvent.MessageEvent 'Guilded.Commands.RootCommandEvent.MessageEvent') | Gets the message event that invoked the command. |
| [Prefix](RootCommandEvent.Prefix 'Guilded.Commands.RootCommandEvent.Prefix') | Gets the prefix that was fetched for the command. |
| [RootArguments](RootCommandEvent.RootArguments 'Guilded.Commands.RootCommandEvent.RootArguments') | Gets the given arguments to the original command. |
| [RootCommandName](RootCommandEvent.RootCommandName 'Guilded.Commands.RootCommandEvent.RootCommandName') | Gets the name of the original command that was used. |

### See Also
- [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent')
- [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')