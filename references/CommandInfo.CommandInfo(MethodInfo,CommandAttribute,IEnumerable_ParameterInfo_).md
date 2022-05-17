---
title: CommandInfo(MethodInfo, CommandAttribute, IEnumerable<ParameterInfo>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo') from the [method](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_)#Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).method 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>).method')."
---

## CommandInfo(MethodInfo, CommandAttribute, IEnumerable<ParameterInfo>) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandInfo`](CommandInfo 'Guilded.Commands.CommandInfo')

Initializes a new instance of [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo') from the [method](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_)#Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).method 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>).method').

```csharp
public CommandInfo(MethodInfo method, Guilded.Commands.CommandAttribute attribute, System.Collections.Generic.IEnumerable<ParameterInfo> parameters);
```
#### Parameters

<a name='Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).method'></a>

`method` [System.Reflection.MethodInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.MethodInfo 'System.Reflection.MethodInfo')

The method that was declared as a command

<a name='Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).attribute'></a>

`attribute` [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')

The command attribute it was given

<a name='Guilded.Commands.CommandInfo.CommandInfo(MethodInfo,Guilded.Commands.CommandAttribute,System.Collections.Generic.IEnumerable_ParameterInfo_).parameters'></a>

`parameters` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.Reflection.ParameterInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.ParameterInfo 'System.Reflection.ParameterInfo')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The parameters that will be used as command arguments