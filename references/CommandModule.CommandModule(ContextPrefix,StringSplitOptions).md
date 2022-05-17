---
title: CommandModule(ContextPrefix, StringSplitOptions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, StringSplitOptions).prefix')."
---

## CommandModule(ContextPrefix, StringSplitOptions) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandModule`](CommandModule 'Guilded.Commands.CommandModule')

Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, StringSplitOptions).prefix').

```csharp
public CommandModule(Guilded.Commands.ContextPrefix prefix, StringSplitOptions splitOptions=1);
```
#### Parameters

<a name='Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,StringSplitOptions).prefix'></a>

`prefix` [ContextPrefix(MessageEvent)](ContextPrefix(MessageEvent) 'Guilded.Commands.ContextPrefix(Guilded.Base.Events.MessageEvent)')

The context-based prefix method for commands

<a name='Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,StringSplitOptions).splitOptions'></a>

`splitOptions` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')

The splitting options of the command's arguments