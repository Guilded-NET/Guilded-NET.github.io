---
title: CommandRestAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Declares a string parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') rest argument."
---

## CommandRestAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Declares a string parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') rest argument.

```csharp
public class CommandRestAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; CommandRestAttribute

### Remarks
  
This will get everything, including spaces, as an argument.

### Example
  
The following is an example of [CommandRestAttribute](CommandRestAttribute 'Guilded.Commands.CommandRestAttribute') usage:  
  
```csharp  
[Command]  
public async Task Say(CommandEvent invokation, [CommandParam("text to say"), CommandRest] string text) =>  
    await invokation.ReplyAsync(text);  
```

| Constructors | |
| :--- | :--- |
| [CommandRestAttribute()](CommandRestAttribute.CommandRestAttribute() 'Guilded.Commands.CommandRestAttribute.CommandRestAttribute()') | Declares a string parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') rest argument. |

### See Also
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')