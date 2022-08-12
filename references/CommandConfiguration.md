---
title: CommandConfiguration
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')."
---

## CommandConfiguration Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').

```csharp
public class CommandConfiguration
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; CommandConfiguration

| Constructors | |
| :--- | :--- |
| [CommandConfiguration()](CommandConfiguration.CommandConfiguration() 'Guilded.Commands.CommandConfiguration.CommandConfiguration()') | Initializes the configuration of Guilded.NET's commands with `/` prefix. |
| [CommandConfiguration(string, char[], StringSplitOptions)](CommandConfiguration.CommandConfiguration(string,char[],StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(string, char[], StringSplitOptions)') | Initializes the configuration of Guilded.NET's commands. |
| [CommandConfiguration(string, StringSplitOptions)](CommandConfiguration.CommandConfiguration(string,StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(string, StringSplitOptions)') | Initializes the configuration of Guilded.NET's commands. |
| [CommandConfiguration(StringSplitOptions)](CommandConfiguration.CommandConfiguration(StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(StringSplitOptions)') | Initializes the configuration of Guilded.NET's commands with `/` prefix. |

| Fields | |
| :--- | :--- |
| [DefaultPrefix](CommandConfiguration.DefaultPrefix 'Guilded.Commands.CommandConfiguration.DefaultPrefix') | The prefix that will be used by default if not specified. |
| [DefaultSeparators](CommandConfiguration.DefaultSeparators 'Guilded.Commands.CommandConfiguration.DefaultSeparators') | The default argument separator characters. |
| [DefaultSplitOptions](CommandConfiguration.DefaultSplitOptions 'Guilded.Commands.CommandConfiguration.DefaultSplitOptions') | The default splitting options for command arguments. |

| Properties | |
| :--- | :--- |
| [Prefix](CommandConfiguration.Prefix 'Guilded.Commands.CommandConfiguration.Prefix') | Gets the piece of text with which commands need to start with. |
| [Separators](CommandConfiguration.Separators 'Guilded.Commands.CommandConfiguration.Separators') | Gets the characters that separate command arguments. |
| [SplitOptions](CommandConfiguration.SplitOptions 'Guilded.Commands.CommandConfiguration.SplitOptions') | Gets the splitting options that will be used while splitting command arguments. |

### See Also
- [CommandParent](CommandParent 'Guilded.Commands.CommandParent')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')