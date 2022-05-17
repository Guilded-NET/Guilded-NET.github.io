---
title: GetValueFrom(IEnumerable<string>, int)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index."
---

## CommandArgumentInfo.GetValueFrom(IEnumerable<string>, int) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandArgumentInfo`](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo')

Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.

```csharp
public override object GetValueFrom(System.Collections.Generic.IEnumerable<string> arguments, int index);
```
#### Parameters

<a name='Guilded.Commands.CommandArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable_string_,int).arguments'></a>

`arguments` [System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')

[The arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') fetched from [the command invokation](CommandEvent 'Guilded.Commands.CommandEvent')

<a name='Guilded.Commands.CommandArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable_string_,int).index'></a>

`index` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')

The index this argument is at

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
Value