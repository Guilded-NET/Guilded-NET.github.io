---
title: AbstractCommandArgument
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the information about any command argument in ."
---

## AbstractCommandArgument Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the information about any command argument in .

```csharp
public abstract class AbstractCommandArgument
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; AbstractCommandArgument

Derived  
&#8627; [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo')  
&#8627; [CommandOptionalArgumentInfo](CommandOptionalArgumentInfo 'Guilded.Commands.CommandOptionalArgumentInfo')  
&#8627; [CommandRestInfo](CommandRestInfo 'Guilded.Commands.CommandRestInfo')

| Constructors | |
| :--- | :--- |
| [AbstractCommandArgument(ParameterInfo)](AbstractCommandArgument.AbstractCommandArgument(ParameterInfo) 'Guilded.Commands.AbstractCommandArgument.AbstractCommandArgument(ParameterInfo)') | Initializes a new instance of [AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') from a [parameter](AbstractCommandArgument.AbstractCommandArgument(ParameterInfo)#Guilded.Commands.AbstractCommandArgument.AbstractCommandArgument(ParameterInfo).parameter 'Guilded.Commands.AbstractCommandArgument.AbstractCommandArgument(ParameterInfo).parameter'). |

| Properties | |
| :--- | :--- |
| [ArgumentType](AbstractCommandArgument.ArgumentType 'Guilded.Commands.AbstractCommandArgument.ArgumentType') | Gets the type of [the parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter'). |
| [Attribute](AbstractCommandArgument.Attribute 'Guilded.Commands.AbstractCommandArgument.Attribute') | Gets [the attribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute') that was used to declare [the command parameter](CommandAttribute 'Guilded.Commands.CommandAttribute'). |
| [Name](AbstractCommandArgument.Name 'Guilded.Commands.AbstractCommandArgument.Name') | Gets the displayed name of [the command argument](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name'). |
| [Parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter') | Gets the parameter that was declared in the method. |

| Methods | |
| :--- | :--- |
| [GetValueFrom(IEnumerable&lt;string&gt;, int)](AbstractCommandArgument.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.AbstractCommandArgument.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)') | Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index. |
