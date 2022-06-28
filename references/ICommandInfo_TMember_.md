---
title: ICommandInfo<TMember>
layout: references
section: references
tags:
  - references
  - interface
description: "

Represents the interface for all commands."
---

## ICommandInfo<TMember> Interface
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the interface for all commands.

```csharp
public interface ICommandInfo<out TMember>
    where TMember : MemberInfo
```

Derived  
&#8627; [AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>')
#### Type parameters

<a name='Guilded.Commands.ICommandInfo_TMember_.TMember'></a>

`TMember`

The type of the reflection member

| Properties | |
| :--- | :--- |
| [Aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases') | Gets the alternative names of the command. |
| [Attribute](ICommandInfo_TMember_.Attribute 'Guilded.Commands.ICommandInfo<TMember>.Attribute') | Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member'). |
| [Description](ICommandInfo_TMember_.Description 'Guilded.Commands.ICommandInfo<TMember>.Description') | Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description. |
| [Examples](ICommandInfo_TMember_.Examples 'Guilded.Commands.ICommandInfo<TMember>.Examples') | Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage. |
| [Member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member') | Gets the member who was declared as a command. |
| [Name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') | Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command. |

| Methods | |
| :--- | :--- |
| [HasName(string)](ICommandInfo_TMember_.HasName(string) 'Guilded.Commands.ICommandInfo<TMember>.HasName(string)') | Gets whether the [name](ICommandInfo_TMember_.HasName(string)#Guilded.Commands.ICommandInfo_TMember_.HasName(string).name 'Guilded.Commands.ICommandInfo<TMember>.HasName(string).name') matches command's [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') or its [aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases'). |
