---
title: InvokeAsync(CommandBase, CommandEvent, IEnumerable<object>)
layout: references
section: references
tags:
  - references
  - method
description: "

Invokes the command."
---

## CommandInfo.InvokeAsync(CommandBase, CommandEvent, IEnumerable<object>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandInfo`](CommandInfo 'Guilded.Commands.CommandInfo')

Invokes the command.

```csharp
public System.Threading.Tasks.Task InvokeAsync(Guilded.Commands.CommandBase parent, Guilded.Commands.CommandEvent commandEvent, System.Collections.Generic.IEnumerable<object> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandBase,Guilded.Commands.CommandEvent,System.Collections.Generic.IEnumerable_object_).parent'></a>

`parent` [CommandBase](CommandBase 'Guilded.Commands.CommandBase')

The parent command of this command

<a name='Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandBase,Guilded.Commands.CommandEvent,System.Collections.Generic.IEnumerable_object_).commandEvent'></a>

`commandEvent` [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent')

The command event that invoked the command

<a name='Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandBase,Guilded.Commands.CommandEvent,System.Collections.Generic.IEnumerable_object_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The arguments that have been used to invoke the command

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
Whether the command was properly invoked