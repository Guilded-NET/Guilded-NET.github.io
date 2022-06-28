---
title: DescriptionAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Defines a description for a command."
---

## DescriptionAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Defines a description for a command.

```csharp
public sealed class DescriptionAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; DescriptionAttribute

### Example
  
The code below demonstrates a command with a description in C#11 preview:  
  
```csharp  
[Description(  
    """  
    Makes the bot respond with `Pong!`  
    There isn't much else to it.  
    """  
)]  
[Command]  
public async Task Ping(CommandEvent invokation) =>  
    await invokation.ReplyAsync("Pong!");  
```

| Constructors | |
| :--- | :--- |
| [DescriptionAttribute(string)](DescriptionAttribute.DescriptionAttribute(string) 'Guilded.Commands.DescriptionAttribute.DescriptionAttribute(string)') | Defines a description for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute') with [text](DescriptionAttribute.DescriptionAttribute(string)#Guilded.Commands.DescriptionAttribute.DescriptionAttribute(string).text 'Guilded.Commands.DescriptionAttribute.DescriptionAttribute(string).text'). |

| Properties | |
| :--- | :--- |
| [Text](DescriptionAttribute.Text 'Guilded.Commands.DescriptionAttribute.Text') | Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description. |
