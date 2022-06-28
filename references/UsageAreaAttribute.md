---
title: UsageAreaAttribute
layout: references
section: references
tags:
  - references
  - class
description: "

Defines possible usage location for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute')."
---

## UsageAreaAttribute Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Defines possible usage location for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute').

```csharp
public sealed class UsageAreaAttribute : System.Attribute
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Attribute](https://docs.microsoft.com/en-us/dotnet/api/System.Attribute 'System.Attribute') &#129106; UsageAreaAttribute

### Example
  
The example code below showcases the use of [UsageAreaAttribute](UsageAreaAttribute 'Guilded.Commands.UsageAreaAttribute') to make a command server-only:  
  
```csharp  
[UsageArea(CommandArea.Servers)]  
[Command]  
public class Config  
{  
    // ...  
}  
```

| Constructors | |
| :--- | :--- |
| [UsageAreaAttribute(CommandArea)](UsageAreaAttribute.UsageAreaAttribute(CommandArea) 'Guilded.Commands.UsageAreaAttribute.UsageAreaAttribute(Guilded.Commands.CommandArea)') | Defines possible usage location for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute'). |

| Properties | |
| :--- | :--- |
| [Area](UsageAreaAttribute.Area 'Guilded.Commands.UsageAreaAttribute.Area') | Gets the area where [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be used. |
