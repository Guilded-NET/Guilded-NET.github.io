---
title: CommandBase
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute')."
---

## CommandBase Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute').

```csharp
public class CommandBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; CommandBase

Derived  
&#8627; [CommandModule](CommandModule 'Guilded.Commands.CommandModule')

| Constructors | |
| :--- | :--- |
| [CommandBase()](CommandBase.CommandBase() 'Guilded.Commands.CommandBase.CommandBase()') | Initializes a new instance of [CommandBase](CommandBase 'Guilded.Commands.CommandBase'). |

| Properties | |
| :--- | :--- |
| [Commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') | Gets the list of commands or sub-commands of this command. |
| [FailedCommand](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') | Gets the event for failed command invokation. |

| Methods | |
| :--- | :--- |
| [FilterCommandsByName(string)](CommandBase.FilterCommandsByName(string) 'Guilded.Commands.CommandBase.FilterCommandsByName(string)') | Filters out commands that do not have [name](CommandBase.FilterCommandsByName(string)#Guilded.Commands.CommandBase.FilterCommandsByName(string).name 'Guilded.Commands.CommandBase.FilterCommandsByName(string).name'). |
| [InvokeAnyCommandAsync(RootCommandContext, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeAnyCommandAsync(RootCommandContext,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext, string, System.Collections.Generic.IEnumerable<string>)') | Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked. |
| [InvokeAsync(string, RootCommandContext, IEnumerable&lt;string&gt;)](CommandBase.InvokeAsync(string,RootCommandContext,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAsync(string, Guilded.Commands.RootCommandContext, System.Collections.Generic.IEnumerable<string>)') | Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands'). |
