---
title: CommandFallbackAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Declares a method as a [failed command](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') handler."
---

## CommandFallbackAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Declares a method as a [failed command](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') handler.

```csharp
public sealed class CommandFallbackAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; CommandFallbackAttribute

### Example
  
The code below demonstrates a command with unknown sub-command handling.  
  
```csharp  
[Command]  
public class Config  
{  
    [CommandFallback(FallbackType.NoCommandFound)]  
    public async Task UnknownCommand(CommandEvent invokation) =>  
        await invokation.ReplyAsync($"Unknown sub-command `{invokation.CommandName}`");  
}  
```

| Constructors | |
| :--- | :--- |
| [CommandFallbackAttribute(FallbackType)](CommandFallbackAttribute.CommandFallbackAttribute(FallbackType) 'Guilded.Commands.CommandFallbackAttribute.CommandFallbackAttribute(Guilded.Commands.FallbackType)') | Declares a method as a failed command handler based on [type](CommandFallbackAttribute.CommandFallbackAttribute(FallbackType)#Guilded.Commands.CommandFallbackAttribute.CommandFallbackAttribute(Guilded.Commands.FallbackType).type 'Guilded.Commands.CommandFallbackAttribute.CommandFallbackAttribute(Guilded.Commands.FallbackType).type'). |

| Properties | |
| :--- | :--- |
| [Type](CommandFallbackAttribute.Type 'Guilded.Commands.CommandFallbackAttribute.Type') | Gets the type of [failed command](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') event to handle. |

### See Also
- [FallbackType](FallbackType 'Guilded.Commands.FallbackType')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute')