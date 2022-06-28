---
title: FailedCommandEvent(RootCommandEvent, string, IEnumerable<string>, FallbackType)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')."
---

## FailedCommandEvent(RootCommandEvent, string, IEnumerable<string>, FallbackType) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`FailedCommandEvent`](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')

Initializes a new instance of [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').

```csharp
public FailedCommandEvent(Guilded.Commands.RootCommandEvent context, string commandName, System.Collections.Generic.IEnumerable<string> arguments, Guilded.Commands.FallbackType type);
```
#### Parameters

<a name='Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,Guilded.Commands.FallbackType).context'></a>

`context` [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')

The the root-level command that was used

<a name='Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,Guilded.Commands.FallbackType).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the command that was used

<a name='Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,Guilded.Commands.FallbackType).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The array of string arguments that were given to the command

<a name='Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandEvent,string,System.Collections.Generic.IEnumerable_string_,Guilded.Commands.FallbackType).type'></a>

`type` [FallbackType](FallbackType 'Guilded.Commands.FallbackType')

The type of the event that occurred