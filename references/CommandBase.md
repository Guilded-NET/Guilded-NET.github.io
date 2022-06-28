---
title: CommandBase
layout: references
section: references
tags:
  - references
  - class
description: "

Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute')."
---

## CommandBase Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute').

```csharp
public class CommandBase
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; CommandBase

Derived  
&#8627; [CommandModule](CommandModule 'Guilded.Commands.CommandModule')

### Example
  
The following shows an example of a command with a sub-command:  
  
```csharp  
[Command]  
public class Config : CommandBase  
{  
    [Command]  
    public async Task Prefix(CommandEvent invokation, [CommandParam] string prefix)  
    {  
        // ...  
        await invokation.ReplyAsync($"Set prefix as '{prefix}'");  
    }  
}  
```

| Constructors | |
| :--- | :--- |
| [CommandBase()](CommandBase.CommandBase() 'Guilded.Commands.CommandBase.CommandBase()') | Initializes a new instance of [CommandBase](CommandBase 'Guilded.Commands.CommandBase'). |

| Properties | |
| :--- | :--- |
| [CommandLookup](CommandBase.CommandLookup 'Guilded.Commands.CommandBase.CommandLookup') | Gets the lookup of [commands or sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name'). |
| [Commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') | Gets the list of commands or sub-commands of this command. |
| [FailedCommand](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') | Gets the event for failed command invokation. |

| Methods | |
| :--- | :--- |
| [FilterCommandsByName(string)](CommandBase.FilterCommandsByName(string) 'Guilded.Commands.CommandBase.FilterCommandsByName(string)') | Filters out [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') that do not have [name](CommandBase.FilterCommandsByName(string)#Guilded.Commands.CommandBase.FilterCommandsByName(string).name 'Guilded.Commands.CommandBase.FilterCommandsByName(string).name'). |
| [InvokeAsync(string, RootCommandEvent, IEnumerable&lt;string&gt;)](CommandBase.InvokeAsync(string,RootCommandEvent,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAsync(string, Guilded.Commands.RootCommandEvent, System.Collections.Generic.IEnumerable<string>)') | Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands'). |
| [InvokeCommandAsync(CommandContainerInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)') | Invokes [command](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_)#Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>).command') as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase'). |
| [InvokeCommandAsync(CommandInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;, IEnumerable&lt;object&gt;)](CommandBase.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_) 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>)') | Invokes [command](CommandBase.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_)#Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>).command') as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase'). |
| [InvokeCommandByNameAsync(RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeCommandByNameAsync(RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)') | Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked. |

### See Also
- [CommandModule](CommandModule 'Guilded.Commands.CommandModule')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')
- [CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')