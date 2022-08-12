---
title: CommandContainerInfo
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information about types that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute')."
---

## CommandContainerInfo Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about types that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').

```csharp
public class CommandContainerInfo : Guilded.Commands.AbstractCommandInfo<System.Type>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Guilded.Commands.AbstractCommandInfo&lt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>')[System.Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type 'System.Type')[&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>') &#129106; CommandContainerInfo

| Constructors | |
| :--- | :--- |
| [CommandContainerInfo(Type, CommandAttribute, CommandParent)](CommandContainerInfo.CommandContainerInfo(Type,CommandAttribute,CommandParent) 'Guilded.Commands.CommandContainerInfo.CommandContainerInfo(System.Type, Guilded.Commands.CommandAttribute, Guilded.Commands.CommandParent)') | Initializes a new instance of [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo') from the [type](CommandContainerInfo.CommandContainerInfo(Type,CommandAttribute,CommandParent)#Guilded.Commands.CommandContainerInfo.CommandContainerInfo(System.Type,Guilded.Commands.CommandAttribute,Guilded.Commands.CommandParent).type 'Guilded.Commands.CommandContainerInfo.CommandContainerInfo(System.Type, Guilded.Commands.CommandAttribute, Guilded.Commands.CommandParent).type'). |

| Properties | |
| :--- | :--- |
| [Instance](CommandContainerInfo.Instance 'Guilded.Commands.CommandContainerInfo.Instance') | Gets the created instance of [the command](CommandAttribute 'Guilded.Commands.CommandAttribute') type for this command. |
| [SubCommands](CommandContainerInfo.SubCommands 'Guilded.Commands.CommandContainerInfo.SubCommands') | Gets the list of commands or sub-commands of this command. |
