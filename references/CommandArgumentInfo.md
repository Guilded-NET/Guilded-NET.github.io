---
title: CommandArgumentInfo
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information about one-value command argument in ."
---

## CommandArgumentInfo Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about one-value command argument in .

```csharp
public class CommandArgumentInfo : Guilded.Commands.AbstractCommandArgument
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') &#129106; CommandArgumentInfo

| Constructors | |
| :--- | :--- |
| [CommandArgumentInfo(ParameterInfo)](CommandArgumentInfo.CommandArgumentInfo(ParameterInfo) 'Guilded.Commands.CommandArgumentInfo.CommandArgumentInfo(ParameterInfo)') | Initializes a new instance of [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo') from a [parameter](CommandArgumentInfo.CommandArgumentInfo(ParameterInfo)#Guilded.Commands.CommandArgumentInfo.CommandArgumentInfo(ParameterInfo).parameter 'Guilded.Commands.CommandArgumentInfo.CommandArgumentInfo(ParameterInfo).parameter'). |

| Methods | |
| :--- | :--- |
| [GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandArgumentInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)') | Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index. |
