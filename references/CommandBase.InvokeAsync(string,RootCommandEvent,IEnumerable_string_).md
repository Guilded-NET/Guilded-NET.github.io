---
title: InvokeAsync(string, RootCommandEvent, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - method
description: "

Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands')."
---

## CommandBase.InvokeAsync(string, RootCommandEvent, IEnumerable<string>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandBase`](CommandBase 'Guilded.Commands.CommandBase')

Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands').

```csharp
public System.Threading.Tasks.Task<bool> InvokeAsync(string usedBaseName, Guilded.Commands.RootCommandEvent context, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandBase.InvokeAsync(string,Guilded.Commands.RootCommandEvent,System.Collections.Generic.IEnumerable_string_).usedBaseName'></a>

`usedBaseName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The specified name of this command

<a name='Guilded.Commands.CommandBase.InvokeAsync(string,Guilded.Commands.RootCommandEvent,System.Collections.Generic.IEnumerable_string_).context'></a>

`context` [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')

The information about the original command

<a name='Guilded.Commands.CommandBase.InvokeAsync(string,Guilded.Commands.RootCommandEvent,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The arguments given to this command

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')