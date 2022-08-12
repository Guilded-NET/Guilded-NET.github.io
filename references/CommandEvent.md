---
title: CommandEvent
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an event that occurs once someone invokes a command."
---

## CommandEvent Class
##### **Assembly:** `Guilded.Commands`<br/>**Namespace:** [`Guilded.Commands`](Guilded.Commands 'Guilded.Commands')

Represents an event that occurs once someone invokes a command.

```csharp
public class CommandEvent : Guilded.Base.Events.MessageEvent,
Guilded.Base.IHasParentClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; [Guilded.Base.Events.MessageEvent&lt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent`1')[Message](Message 'Guilded.Base.Content.Message')[&gt;](MessageEvent_T_ 'Guilded.Base.Events.MessageEvent`1') &#129106; [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent') &#129106; CommandEvent

Implements [IHasParentClient](IHasParentClient 'Guilded.Base.IHasParentClient')

Derived  
&#8627; [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')

| Constructors | |
| :--- | :--- |
| [CommandEvent(RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandEvent.CommandEvent(RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)') | Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](MessageEvent 'Guilded.Base.Events.MessageEvent'). |

| Properties | |
| :--- | :--- |
| [Arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') | Gets the enumerable of string arguments that were given to the command. |
| [CommandName](CommandEvent.CommandName 'Guilded.Commands.CommandEvent.CommandName') | Gets the name of that was used in the command. |
| [Prefix](CommandEvent.Prefix 'Guilded.Commands.CommandEvent.Prefix') | Gets the prefix that has been used on the command. |
| [RootArguments](CommandEvent.RootArguments 'Guilded.Commands.CommandEvent.RootArguments') | Gets the enumerable of string arguments that were given to the root-level command in [the message](Message 'Guilded.Base.Content.Message'). |
| [RootCommand](CommandEvent.RootCommand 'Guilded.Commands.CommandEvent.RootCommand') | Getss the most-top command that was invoked. |
| [RootCommandName](CommandEvent.RootCommandName 'Guilded.Commands.CommandEvent.RootCommandName') | Gets the name of the root-level command that was used in [the message](Message 'Guilded.Base.Content.Message'). |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [MessageEvent](MessageEvent 'Guilded.Base.Events.MessageEvent')
- [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')
- [CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')