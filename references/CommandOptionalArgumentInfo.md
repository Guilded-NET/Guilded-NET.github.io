---
title: CommandOptionalArgumentInfo
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information about one-value command argument in ."
---

## CommandOptionalArgumentInfo Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about one-value command argument in .

```csharp
public class CommandOptionalArgumentInfo : Guilded.Commands.AbstractCommandArgument
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') &#129106; CommandOptionalArgumentInfo

| Constructors | |
| :--- | :--- |
| [CommandOptionalArgumentInfo(ParameterInfo, Type)](CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo,Type) 'Guilded.Commands.CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo, System.Type)') | Initializes a new instance of [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo') from a [parameter](CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo,Type)#Guilded.Commands.CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo,System.Type).parameter 'Guilded.Commands.CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo, System.Type).parameter'). |

| Methods | |
| :--- | :--- |
| [GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandOptionalArgumentInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandOptionalArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)') | Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index. |
