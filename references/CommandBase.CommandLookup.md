---
title: CommandLookup
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the lookup of [commands or sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name')."
---

## CommandBase.CommandLookup Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandBase`](CommandBase 'Guilded.Commands.CommandBase')

Gets the lookup of [commands or sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name').

```csharp
public ILookup<string,Guilded.Commands.ICommandInfo<MemberInfo>> CommandLookup { get; }
```

#### Property Value
[System.Linq.ILookup](https://docs.microsoft.com/en-us/dotnet/api/System.Linq.ILookup 'System.Linq.ILookup')