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
public abstract class CommandBase : Guilded.Commands.CommandParent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [CommandParent](CommandParent 'Guilded.Commands.CommandParent') &#129106; CommandBase

### Example
  
The following shows an example of a command with a sub-command:  
  
```csharp  
[Command]  
public class Config : CommandBase  
{  
    [Command]  
    public async Task Prefix(CommandEvent invokation, [CommandParam] string prefix)  
    {  
        // ...  
        await invokation.ReplyAsync($"Set prefix as '{prefix}'");  
    }  
}  
```

| Constructors | |
| :--- | :--- |
| [CommandBase()](CommandBase.CommandBase() 'Guilded.Commands.CommandBase.CommandBase()') | Initializes a new instance of [CommandBase](CommandBase 'Guilded.Commands.CommandBase'). |

| Properties | |
| :--- | :--- |
| [Aliases](CommandBase.Aliases 'Guilded.Commands.CommandBase.Aliases') | Gets the alternative names of the command. |
| [Description](CommandBase.Description 'Guilded.Commands.CommandBase.Description') | Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description. |
| [Examples](CommandBase.Examples 'Guilded.Commands.CommandBase.Examples') | Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage. |
| [InstanceInfo](CommandBase.InstanceInfo 'Guilded.Commands.CommandBase.InstanceInfo') | Gets the information about the [command](CommandBase 'Guilded.Commands.CommandBase'). |
| [Name](CommandBase.Name 'Guilded.Commands.CommandBase.Name') | Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command. |

### See Also
- [CommandModule](CommandModule 'Guilded.Commands.CommandModule')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')