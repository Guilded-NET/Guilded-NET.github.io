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

### Remarks
  
Currently available parameter types are:  
- [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
- [HashId](HashId 'Guilded.Base.HashId')  
- [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
- [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')  
- [System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
- [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
- [System.UInt32](https://docs.microsoft.com/en-us/dotnet/api/System.UInt32 'System.UInt32')  
- [System.Int64](https://docs.microsoft.com/en-us/dotnet/api/System.Int64 'System.Int64')  
- [System.UInt64](https://docs.microsoft.com/en-us/dotnet/api/System.UInt64 'System.UInt64')  
- [System.Int16](https://docs.microsoft.com/en-us/dotnet/api/System.Int16 'System.Int16')  
- [System.UInt16](https://docs.microsoft.com/en-us/dotnet/api/System.UInt16 'System.UInt16')  
- [System.Byte](https://docs.microsoft.com/en-us/dotnet/api/System.Byte 'System.Byte')  
- [System.SByte](https://docs.microsoft.com/en-us/dotnet/api/System.SByte 'System.SByte')  
- [System.Single](https://docs.microsoft.com/en-us/dotnet/api/System.Single 'System.Single')  
- [System.Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double 'System.Double')  
- [System.Decimal](https://docs.microsoft.com/en-us/dotnet/api/System.Decimal 'System.Decimal')  
- [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')  
- [System.TimeSpan](https://docs.microsoft.com/en-us/dotnet/api/System.TimeSpan 'System.TimeSpan')  
  
[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[System.Array](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array') is also available, but it will be seen as a rest argument.

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