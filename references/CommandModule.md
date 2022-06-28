---
title: CommandModule
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient')."
---

## CommandModule Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').

```csharp
public class CommandModule : Guilded.Commands.CommandBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [CommandBase](CommandBase 'Guilded.Commands.CommandBase') &#129106; CommandModule

| Methods | |
| :--- | :--- |
| [AddTo(AbstractGuildedClient, CommandConfiguration)](CommandModule.AddTo(AbstractGuildedClient,CommandConfiguration) 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient, Guilded.Commands.CommandConfiguration)') | Adds the command module to the specified [client](CommandModule.AddTo(AbstractGuildedClient,CommandConfiguration)#Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient,Guilded.Commands.CommandConfiguration).client 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient, Guilded.Commands.CommandConfiguration).client') with the given settings. |
| [DoCommandsAsync(MessageEvent, string, CommandConfiguration)](CommandModule.DoCommandsAsync(MessageEvent,string,CommandConfiguration) 'Guilded.Commands.CommandModule.DoCommandsAsync(Guilded.Base.Events.MessageEvent, string, Guilded.Commands.CommandConfiguration)') | Checks if any [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') are called in the message and invokes them. |
| [Remove()](CommandModule.Remove() 'Guilded.Commands.CommandModule.Remove()') | Removes the command module from the subscribed client. |

### See Also
- [CommandBase](CommandBase 'Guilded.Commands.CommandBase')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')