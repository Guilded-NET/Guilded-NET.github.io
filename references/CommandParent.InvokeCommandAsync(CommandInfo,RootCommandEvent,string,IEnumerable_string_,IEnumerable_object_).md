---
title: InvokeCommandAsync(CommandInfo, RootCommandEvent, string, IEnumerable<string>, IEnumerable<object>)
layout: references
section: references
tags:
  - references
  - method
description: "

Invokes [command](CommandParent.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_)#Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>).command') as a child of [this command base](CommandParent 'Guilded.Commands.CommandParent')."
---

## CommandParent.InvokeCommandAsync(CommandInfo, RootCommandEvent, string, IEnumerable<string>, IEnumerable<object>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandParent`](CommandParent 'Guilded.Commands.CommandParent')

Invokes [command](CommandParent.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_)#Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>).command') as a child of [this command base](CommandParent 'Guilded.Commands.CommandParent').

```csharp
protected virtual System.Threading.Tasks.Task InvokeCommandAsync(Guilded.Commands.CommandInfo command, Guilded.Commands.RootCommandEvent rootInvokation, string commandName, System.Collections.Generic.IEnumerable<string> rawArguments, System.Collections.Generic.IEnumerable<object?> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command'></a>

`command` [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo')

The [command](CommandAttribute 'Guilded.Commands.CommandAttribute') to invoke

<a name='Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).rootInvokation'></a>

`rootInvokation` [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')

The unnested first-most command that has been invoked

<a name='Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The used name of [command](CommandParent.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_)#Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).command 'Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>).command')

<a name='Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).rawArguments'></a>

`rawArguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The unparsed arguments that were given to the command

<a name='Guilded.Commands.CommandParent.InvokeCommandAsync(Guilded.Commands.CommandInfo,Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,System.Collections.Generic.IEnumerable_object_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The parsed arguments that were given to the command

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')