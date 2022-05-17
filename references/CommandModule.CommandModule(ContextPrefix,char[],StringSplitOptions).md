---
title: CommandModule(ContextPrefix, char[], StringSplitOptions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, char[], StringSplitOptions).prefix')."
---

## CommandModule(ContextPrefix, char[], StringSplitOptions) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandModule`](CommandModule 'Guilded.Commands.CommandModule')

Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, char[], StringSplitOptions).prefix').

```csharp
public CommandModule(Guilded.Commands.ContextPrefix prefix, char[] separators, StringSplitOptions splitOptions=1);
```
#### Parameters

<a name='Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).prefix'></a>

`prefix` [ContextPrefix(MessageEvent)](ContextPrefix(MessageEvent) 'Guilded.Commands.ContextPrefix(Guilded.Base.Events.MessageEvent)')

The context-based prefix method for commands

<a name='Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).separators'></a>

`separators` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The separators that split the command's arguments

<a name='Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).splitOptions'></a>

`splitOptions` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')

The splitting options of the command's arguments