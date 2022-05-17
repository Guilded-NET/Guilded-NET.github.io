---
title: CommandModule(string, char[], StringSplitOptions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Creates a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static [prefix](CommandModule.CommandModule(string,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(string, char[], StringSplitOptions).prefix')."
---

## CommandModule(string, char[], StringSplitOptions) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandModule`](CommandModule 'Guilded.Commands.CommandModule')

Creates a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static [prefix](CommandModule.CommandModule(string,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(string, char[], StringSplitOptions).prefix').

```csharp
public CommandModule(string prefix, char[] separators, StringSplitOptions splitOptions=1);
```
#### Parameters

<a name='Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).prefix'></a>

`prefix` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The context-based prefix method for commands

<a name='Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).separators'></a>

`separators` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The separators that split the command's arguments

<a name='Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).splitOptions'></a>

`splitOptions` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')

The splitting options of the command's arguments