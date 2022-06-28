---
title: DoCommandsAsync(MessageEvent, string, CommandConfiguration)
layout: references
section: references
tags:
  - references
  - method
description: "

Checks if any [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') are called in the message and invokes them."
---

## CommandModule.DoCommandsAsync(MessageEvent, string, CommandConfiguration) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandModule`](CommandModule 'Guilded.Commands.CommandModule')

Checks if any [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') are called in the message and invokes them.

```csharp
public virtual System.Threading.Tasks.Task<bool> DoCommandsAsync(Guilded.Base.Events.MessageEvent msgCreated, string prefix, Guilded.Commands.CommandConfiguration config);
```
#### Parameters

<a name='Guilded.Commands.CommandModule.DoCommandsAsync(Guilded.Base.Events.MessageEvent,string,Guilded.Commands.CommandConfiguration).msgCreated'></a>

`msgCreated` [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')

The supposed command message

<a name='Guilded.Commands.CommandModule.DoCommandsAsync(Guilded.Base.Events.MessageEvent,string,Guilded.Commands.CommandConfiguration).prefix'></a>

`prefix` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The current prefix used for the command

<a name='Guilded.Commands.CommandModule.DoCommandsAsync(Guilded.Base.Events.MessageEvent,string,Guilded.Commands.CommandConfiguration).config'></a>

`config` [CommandConfiguration](CommandConfiguration 'Guilded.Commands.CommandConfiguration')

The configuration of client's commands

#### Returns
[System.Threading.Tasks.Task&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task-1 'System.Threading.Tasks.Task`1')  
Any [command](CommandAttribute 'Guilded.Commands.CommandAttribute') has been invoked