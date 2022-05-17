---
title: CommandAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Declares a method or a type as a command."
---

## CommandAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Declares a method or a type as a command.

```csharp
public class CommandAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; CommandAttribute

### Remarks
  
By default, all the parameters will be seen as context parameters, unless a parameter has [CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute'). Parameters with [CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute') will be declared as command's parameters.

### Example
  
Example of a command with its own subcommands:  
  
```csharp  
[Command]  
public static class ConfigCommand  
{  
    [Command]  
    public static async Task Prefix(CommandEvent invokation, [CommandParam] string prefix)  
    {  
        await invokation.ReplyAsync($"Set server's prefix to `{prefix}`");  
        // ...  
    }  
}  
```

| Constructors | |
| :--- | :--- |
| [CommandAttribute()](CommandAttribute.CommandAttribute() 'Guilded.Commands.CommandAttribute.CommandAttribute()') | Declares a method as a command with no aliases. |
| [CommandAttribute(string)](CommandAttribute.CommandAttribute(string) 'Guilded.Commands.CommandAttribute.CommandAttribute(string)') | Declares a method as a command with given [name](CommandAttribute.CommandAttribute(string)#Guilded.Commands.CommandAttribute.CommandAttribute(string).name 'Guilded.Commands.CommandAttribute.CommandAttribute(string).name') |

| Properties | |
| :--- | :--- |
| [Aliases](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases') | Gets the alternative names of the command. |
| [Description](CommandAttribute.Description 'Guilded.Commands.CommandAttribute.Description') | Gets the description of the command. |
| [Examples](CommandAttribute.Examples 'Guilded.Commands.CommandAttribute.Examples') | Gets the examples of how to use the command. |
| [Name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') | Gets the overriden name of the command. |

### See Also
- [CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute')