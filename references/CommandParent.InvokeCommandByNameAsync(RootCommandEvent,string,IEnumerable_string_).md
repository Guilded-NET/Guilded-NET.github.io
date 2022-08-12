---
title: InvokeCommandByNameAsync(RootCommandEvent, string, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - method
description: "

Filters [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') is invoked."
---

## CommandParent.InvokeCommandByNameAsync(RootCommandEvent, string, IEnumerable<string>) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandParent`](CommandParent 'Guilded.Commands.CommandParent')

Filters [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandParent.FailedCommand 'Guilded.Commands.CommandParent.FailedCommand') is invoked.

```csharp
protected System.Threading.Tasks.Task<bool> InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent rootInvokation, string commandName, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandParent.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).rootInvokation'></a>

`rootInvokation` [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')

The information about the original command

<a name='Guilded.Commands.CommandParent.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the current command used

<a name='Guilded.Commands.CommandParent.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The arguments of the current command used

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')