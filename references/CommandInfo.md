---
title: CommandInfo
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information about methods that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute')."
---

## CommandInfo Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about methods that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').

```csharp
public class CommandInfo : Guilded.Commands.AbstractCommandInfo<MethodInfo>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [Guilded.Commands.AbstractCommandInfo&lt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>')[System.Reflection.MethodInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.MethodInfo 'System.Reflection.MethodInfo')[&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>') &#129106; CommandInfo

| Constructors | |
| :--- | :--- |
| [CommandInfo(MethodInfo, CommandAttribute, IEnumerable&lt;ParameterInfo&gt;)](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_) 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>)') | Initializes a new instance of [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo') from the [method](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_)#Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).method 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>).method'). |

| Properties | |
| :--- | :--- |
| [Arguments](CommandInfo.Arguments 'Guilded.Commands.CommandInfo.Arguments') | Gets the enumerable of command arguments that can be specified by users. |
| [HasRestArgument](CommandInfo.HasRestArgument 'Guilded.Commands.CommandInfo.HasRestArgument') | Gets whether there is a rest argument for the command. |
| [RequiredCount](CommandInfo.RequiredCount 'Guilded.Commands.CommandInfo.RequiredCount') | Gets whether there is a rest argument for the command. |

| Methods | |
| :--- | :--- |
| [InvokeAsync(CommandParent, CommandEvent, IEnumerable&lt;object&gt;)](CommandInfo.InvokeAsync(CommandParent,CommandEvent,IEnumerable_object_) 'Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandParent, Guilded.Commands.CommandEvent, System.Collections.Generic.IEnumerable<object>)') | Invokes the command. |
