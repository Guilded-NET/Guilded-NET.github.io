---
title: ExampleAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Defines an example for a command."
---

## ExampleAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Defines an example for a command.

```csharp
public sealed class ExampleAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; ExampleAttribute

### Example
  
The following example demonstrates a command with 3 examples attached to it. The last command example uses the command's alias `plus`.  
  
```csharp  
[Command(Aliases = new string[] { "plus" })]  
[Example("2 + 2")]  
[Example("-2 + 5")]  
[Example("plus", "-2 + 5")]  
public async Task Add(CommandEvent invokation, [CommandParam] int x, [CommandParam] int y) =>  
    await invokation.ReplyAsync($"{x} + {y} = {x + y}");  
```

| Constructors | |
| :--- | :--- |
| [ExampleAttribute(string, string)](ExampleAttribute.ExampleAttribute(string,string) 'Guilded.Commands.ExampleAttribute.ExampleAttribute(string, string)') | Defines an example for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute'). |
| [ExampleAttribute(string)](ExampleAttribute.ExampleAttribute(string) 'Guilded.Commands.ExampleAttribute.ExampleAttribute(string)') | Defines an example for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute'). |

| Properties | |
| :--- | :--- |
| [Content](ExampleAttribute.Content 'Guilded.Commands.ExampleAttribute.Content') | Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage. |
| [Name](ExampleAttribute.Name 'Guilded.Commands.ExampleAttribute.Name') | Gets [the name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') or [the alias](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases') of [the command](CommandAttribute 'Guilded.Commands.CommandAttribute') in the example. |
