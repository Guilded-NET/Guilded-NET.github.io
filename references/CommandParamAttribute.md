---
title: CommandParamAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Declares a parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') parameter."
---

## CommandParamAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Declares a parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') parameter.

```csharp
public class CommandParamAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; CommandParamAttribute

### Example
  
Here's an example of a parameter being declared as a command parameter:  
  
```csharp  
[Command(Aliases = new string[] { "plus" })]  
public async Task Add(CommandEvent invokation, [CommandParam] int x, [CommandParam] int y) =>  
    await invokation.ReplyAsync($"{x} + {y} = {x + y}");  
```  
  
The following showcases a command parameter with an overriden name:  
  
```csharp  
[Command]  
public async Task Say(CommandEvent invokation, [CommandParam("text to say")] params string[] args) =>  
    await invokation.ReplyAsync(string.Join(" ", args));  
```

| Constructors | |
| :--- | :--- |
| [CommandParamAttribute()](CommandParamAttribute.CommandParamAttribute() 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute()') | Declares a command parameter with the display name as the parameter's name. |
| [CommandParamAttribute(string)](CommandParamAttribute.CommandParamAttribute(string) 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute(string)') | Declares a command parameter with the specified [name](CommandParamAttribute.CommandParamAttribute(string)#Guilded.Commands.CommandParamAttribute.CommandParamAttribute(string).name 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute(string).name'). |

| Properties | |
| :--- | :--- |
| [Name](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name') | Gets the displayed name of the parameter. |

### See Also
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')