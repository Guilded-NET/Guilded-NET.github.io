---
title: AbstractCommandInfo<TMember>
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for information about any type of Guilded.NET command."
---

## AbstractCommandInfo<TMember> Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the base for information about any type of Guilded.NET command.

```csharp
public abstract class AbstractCommandInfo<TMember> :
Guilded.Commands.ICommandInfo<TMember>
    where TMember : MemberInfo
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; AbstractCommandInfo<TMember>

Implements [Guilded.Commands.ICommandInfo&lt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[TMember](AbstractCommandInfo_TMember_#Guilded.Commands.AbstractCommandInfo_TMember_.TMember 'Guilded.Commands.AbstractCommandInfo<TMember>.TMember')[&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')

Derived  
&#8627; [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo')  
&#8627; [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo')
#### Type parameters

<a name='Guilded.Commands.AbstractCommandInfo_TMember_.TMember'></a>

`TMember`

The type of the member it uses for commands

| Constructors | |
| :--- | :--- |
| [AbstractCommandInfo(CommandAttribute, TMember)](AbstractCommandInfo_TMember_.AbstractCommandInfo(CommandAttribute,TMember) 'Guilded.Commands.AbstractCommandInfo<TMember>.AbstractCommandInfo(Guilded.Commands.CommandAttribute, TMember)') | Initializes a new instance of [AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>'). |

| Properties | |
| :--- | :--- |
| [Aliases](AbstractCommandInfo_TMember_.Aliases 'Guilded.Commands.AbstractCommandInfo<TMember>.Aliases') | Gets the alternative names of the command. |
| [Attribute](AbstractCommandInfo_TMember_.Attribute 'Guilded.Commands.AbstractCommandInfo<TMember>.Attribute') | Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member'). |
| [Description](AbstractCommandInfo_TMember_.Description 'Guilded.Commands.AbstractCommandInfo<TMember>.Description') | Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description. |
| [Examples](AbstractCommandInfo_TMember_.Examples 'Guilded.Commands.AbstractCommandInfo<TMember>.Examples') | Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage. |
| [Member](AbstractCommandInfo_TMember_.Member 'Guilded.Commands.AbstractCommandInfo<TMember>.Member') | Gets the member who was declared as a command. |
| [Name](AbstractCommandInfo_TMember_.Name 'Guilded.Commands.AbstractCommandInfo<TMember>.Name') | Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command. |

### See Also
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute')
- [ICommandInfo&lt;TMember&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')
- [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo')
- [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo')