---
title: InvokeAnyCommandAsync(RootCommandContext, string, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - method
description: "

Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked."
---

## CommandBase.InvokeAnyCommandAsync(RootCommandContext, string, IEnumerable<string>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandBase`](CommandBase 'Guilded.Commands.CommandBase')

Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked.

```csharp
public System.Threading.Tasks.Task InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext context, string commandName, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandBase.InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).context'></a>

`context` [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext')

The information about the original command

<a name='Guilded.Commands.CommandBase.InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the current command used

<a name='Guilded.Commands.CommandBase.InvokeAnyCommandAsync(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The arguments of the current command used

#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')