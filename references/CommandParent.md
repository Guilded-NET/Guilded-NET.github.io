---
title: CommandParent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an abstract type that holds commands."
---

## CommandParent Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents an abstract type that holds commands.

```csharp
public abstract class CommandParent
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; CommandParent

Derived  
&#8627; [CommandBase](CommandBase 'Guilded.Commands.CommandBase')  
&#8627; [CommandModule](CommandModule 'Guilded.Commands.CommandModule')

| Constructors | |
| :--- | :--- |
| [CommandParent()](CommandParent.CommandParent() 'Guilded.Commands.CommandParent.CommandParent()') | Initializes a new instance of [CommandParent](CommandParent 'Guilded.Commands.CommandParent'). |

| Properties | |
| :--- | :--- |
| [CommandLookup](CommandParent.CommandLookup 'Guilded.Commands.CommandParent.CommandLookup') | Gets the lookup of [commands or sub-commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name'). |
| [CommandNames](CommandParent.CommandNames 'Guilded.Commands.CommandParent.CommandNames') | Gets the list of the [names](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of all [commands or sub-commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') . |
| [Commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') | Gets the list of commands or sub-commands of this command. |
| [FailedCommand](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') | Gets the event for failed command invokation. |

| Methods | |
| :--- | :--- |
| [FilterCommandsByName(string)](CommandParent.FilterCommandsByName(string) 'Guilded.Commands.CommandParent.FilterCommandsByName(string)') | Filters out [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') that do not have [name](CommandParent.FilterCommandsByName(string)#Guilded.Commands.CommandParent.FilterCommandsByName(string).name 'Guilded.Commands.CommandParent.FilterCommandsByName(string).name'). |
| [InvokeAsync(string, RootCommandEvent, IEnumerable&lt;string&gt;)](CommandParent.InvokeAsync(string,RootCommandEvent,IEnumerable_string_) 'Guilded.Commands.CommandParent.InvokeAsync(string, Guilded.Commands.RootCommandEvent, System.Collections.Generic.IEnumerable<string>)') | Invokes any of the command's [sub-commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands'). |
| [InvokeCommandAsync(CommandContainerInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandParent.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)') | Invokes [command](CommandParent.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_)#Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>).command') as a child of [this command base](CommandParent 'Guilded.Commands.CommandParent'). |
| [InvokeCommandAsync(CommandInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;, IEnumerable&lt;object&gt;)](CommandParent.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_) 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>)') | Invokes [command](CommandParent.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_)#Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>).command') as a child of [this command base](CommandParent 'Guilded.Commands.CommandParent'). |
| [InvokeCommandByNameAsync(RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandParent.InvokeCommandByNameAsync(RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandParent.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)') | Filters [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') is invoked. |

### See Also
- [CommandBase](CommandBase 'Guilded.Commands.CommandBase')
- [CommandModule](CommandModule 'Guilded.Commands.CommandModule')