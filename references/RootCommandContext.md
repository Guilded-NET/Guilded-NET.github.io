---
title: RootCommandContext
layout: references
section: references
tags:
  - references
  - struct
description: "

Represents the information about the root/original command."
---

## RootCommandContext Struct
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about the root/original command.

```csharp
public struct RootCommandContext
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
| [RootCommandContext(MessageEvent, string, string, IEnumerable&lt;string&gt;)](RootCommandContext.RootCommandContext(MessageEvent,string,string,IEnumerable_string_) 'Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent, string, string, System.Collections.Generic.IEnumerable<string>)') | Initializes a new instance of [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext'). |

| Properties | |
| :--- | :--- |
| [MessageEvent](RootCommandContext.MessageEvent 'Guilded.Commands.RootCommandContext.MessageEvent') | Gets the message event that invoked the command. |
| [Prefix](RootCommandContext.Prefix 'Guilded.Commands.RootCommandContext.Prefix') | Gets the prefix that was fetched for the command. |
| [RootArguments](RootCommandContext.RootArguments 'Guilded.Commands.RootCommandContext.RootArguments') | Gets the given arguments to the original command. |
| [RootCommandName](RootCommandContext.RootCommandName 'Guilded.Commands.RootCommandContext.RootCommandName') | Gets the name of the original command that was used. |
