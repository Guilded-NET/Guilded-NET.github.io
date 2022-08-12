---
title: Commands
layout: references
section: references
tags:
  - references
  - property
description: "

Gets the list of commands or sub-commands of this command."
---

## CommandParent.Commands Property
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandParent`](CommandParent 'Guilded.Commands.CommandParent')

Gets the list of commands or sub-commands of this command.

```csharp
public System.Collections.Generic.IEnumerable<Guilded.Commands.ICommandInfo<MemberInfo>> Commands { get; set; }
```

#### Property Value
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[Guilded.Commands.ICommandInfo&lt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[System.Reflection.MemberInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.MemberInfo 'System.Reflection.MemberInfo')[&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
Commands

### See Also
- [CommandParent](CommandParent 'Guilded.Commands.CommandParent')
- [CommandLookup](CommandParent.CommandLookup 'Guilded.Commands.CommandParent.CommandLookup')
- [CommandNames](CommandParent.CommandNames 'Guilded.Commands.CommandParent.CommandNames')