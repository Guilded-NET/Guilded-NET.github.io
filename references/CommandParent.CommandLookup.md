---
title: CommandLookup
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the lookup of [commands or sub-commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name')."
---

## CommandParent.CommandLookup Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandParent`](CommandParent 'Guilded.Commands.CommandParent')

Gets the lookup of [commands or sub-commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name').

```csharp
public ILookup<string,Guilded.Commands.ICommandInfo<MemberInfo>> CommandLookup { get; }
```

#### Property Value
[System.Linq.ILookup](https://docs.microsoft.com/en-us/dotnet/api/System.Linq.ILookup 'System.Linq.ILookup')

### See Also
- [CommandParent](CommandParent 'Guilded.Commands.CommandParent')
- [Commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands')
- [CommandNames](CommandParent.CommandNames 'Guilded.Commands.CommandParent.CommandNames')