---
title: RootCommandContext(MessageEvent, string, string, IEnumerable<string>)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext')."
---

## RootCommandContext(MessageEvent, string, string, IEnumerable<string>) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`RootCommandContext`](RootCommandContext 'Guilded.Commands.RootCommandContext')

Initializes a new instance of [RootCommandContext](RootCommandContext 'Guilded.Commands.RootCommandContext').

```csharp
public RootCommandContext(Guilded.Base.Events.MessageEvent messageEvent, string prefix, string commandName, System.Collections.Generic.IEnumerable<string> arguments);
```
#### Parameters

<a name='Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent,string,string,System.Collections.Generic.IEnumerable_string_).messageEvent'></a>

`messageEvent` [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')

The message event that invoked the command

<a name='Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent,string,string,System.Collections.Generic.IEnumerable_string_).prefix'></a>

`prefix` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The prefix that was fetched for the command

<a name='Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent,string,string,System.Collections.Generic.IEnumerable_string_).commandName'></a>

`commandName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the original command that was used

<a name='Guilded.Commands.RootCommandContext.RootCommandContext(Guilded.Base.Events.MessageEvent,string,string,System.Collections.Generic.IEnumerable_string_).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

The given arguments to the original command