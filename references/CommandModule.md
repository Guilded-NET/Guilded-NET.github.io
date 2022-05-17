---
title: CommandModule
layout: references
section: references
tags:
  - references
  - class
description: "

The module that adds commands to Guilded clients."
---

## CommandModule Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

The module that adds commands to Guilded clients.

```csharp
public class CommandModule : Guilded.Commands.CommandBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [CommandBase](CommandBase 'Guilded.Commands.CommandBase') &#129106; CommandModule

### Remarks
  
Adds customizable commands to selected clients.

| Constructors | |
| :--- | :--- |
| [CommandModule(ContextPrefix, char[], StringSplitOptions)](CommandModule.CommandModule(ContextPrefix,char[],StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, char[], StringSplitOptions)') | Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, char[], StringSplitOptions).prefix'). |
| [CommandModule(ContextPrefix, StringSplitOptions)](CommandModule.CommandModule(ContextPrefix,StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, StringSplitOptions)') | Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with context-based [prefix](CommandModule.CommandModule(ContextPrefix,StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix,StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(Guilded.Commands.ContextPrefix, StringSplitOptions).prefix'). |
| [CommandModule(string, char[], StringSplitOptions)](CommandModule.CommandModule(string,char[],StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(string, char[], StringSplitOptions)') | Creates a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static [prefix](CommandModule.CommandModule(string,char[],StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(string,char[],StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(string, char[], StringSplitOptions).prefix'). |
| [CommandModule(string, StringSplitOptions)](CommandModule.CommandModule(string,StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(string, StringSplitOptions)') | Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with static [prefix](CommandModule.CommandModule(string,StringSplitOptions)#Guilded.Commands.CommandModule.CommandModule(string,StringSplitOptions).prefix 'Guilded.Commands.CommandModule.CommandModule(string, StringSplitOptions).prefix'). |
| [CommandModule(StringSplitOptions)](CommandModule.CommandModule(StringSplitOptions) 'Guilded.Commands.CommandModule.CommandModule(StringSplitOptions)') | Initializes a new instance of [CommandModule](CommandModule 'Guilded.Commands.CommandModule') with no prefix. |

| Fields | |
| :--- | :--- |
| [DefaultSeparators](CommandModule.DefaultSeparators 'Guilded.Commands.CommandModule.DefaultSeparators') | The default argument separator characters. |
| [DefaultSplitOptions](CommandModule.DefaultSplitOptions 'Guilded.Commands.CommandModule.DefaultSplitOptions') | The default splitting options for command arguments. |

| Properties | |
| :--- | :--- |
| [Prefix](CommandModule.Prefix 'Guilded.Commands.CommandModule.Prefix') | Gets the method that will be used to get prefix based on [the current context](MessageEvent 'Guilded.Base.Events.MessageEvent'). |
| [Separators](CommandModule.Separators 'Guilded.Commands.CommandModule.Separators') | Gets the characters that separate command arguments. |
| [SplitOptions](CommandModule.SplitOptions 'Guilded.Commands.CommandModule.SplitOptions') | Gets the splitting options that will be used while splitting command arguments. |

| Methods | |
| :--- | :--- |
| [AddTo(AbstractGuildedClient)](CommandModule.AddTo(AbstractGuildedClient) 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient)') | Adds the command module to the specified [client](CommandModule.AddTo(AbstractGuildedClient)#Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient).client 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient).client') with the given settings. |
| [Remove()](CommandModule.Remove() 'Guilded.Commands.CommandModule.Remove()') | Removes the command module from the subscribed client. |

### See Also
- [ContextPrefix(MessageEvent)](ContextPrefix(MessageEvent) 'Guilded.Commands.ContextPrefix(Guilded.Base.Events.MessageEvent)')