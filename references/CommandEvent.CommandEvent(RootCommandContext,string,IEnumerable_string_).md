---
title: CommandEvent(RootCommandContext, string, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent')."
---

## CommandEvent(RootCommandContext, string, IEnumerable<string>) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandEvent`](CommandEvent 'Guilded.Commands.CommandEvent')

Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](CommandEvent.MessageEvent 'Guilded.Commands.CommandEvent.MessageEvent').

```csharp
public CommandEvent(Guilded.Commands.RootCommandContext context, string commandName, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).context'></a>

`context` [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext')

The the root-level command that was used

<a name='Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the command that was used

<a name='Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandContext,string,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The array of string arguments that were given to the command