---
title: InvokeCommandAsync(CommandContainerInfo, RootCommandEvent, string, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - method
description: "

Invokes [command](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_)#Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>).command') as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase')."
---

## CommandBase.InvokeCommandAsync(CommandContainerInfo, RootCommandEvent, string, IEnumerable<string>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandBase`](CommandBase 'Guilded.Commands.CommandBase')

Invokes [command](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_)#Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>).command') as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase').

```csharp
protected virtual System.Threading.Tasks.Task InvokeCommandAsync(Guilded.Commands.CommandContainerInfo command, Guilded.Commands.RootCommandEvent rootInvokation, string commandName, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command'></a>

`command` [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo')

The [command](CommandAttribute 'Guilded.Commands.CommandAttribute') to invoke

<a name='Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).rootInvokation'></a>

`rootInvokation` [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')

The unnested first-most command that has been invoked

<a name='Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The used name of [command](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_)#Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).command 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>).command')

<a name='Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The unparsed arguments and sub-command names that were given to the command

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')