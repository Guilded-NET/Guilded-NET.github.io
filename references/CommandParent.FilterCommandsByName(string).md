---
title: FilterCommandsByName(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Filters out [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') that do not have [name](CommandParent.FilterCommandsByName(string)#Guilded.Commands.CommandParent.FilterCommandsByName(string).name 'Guilded.Commands.CommandParent.FilterCommandsByName(string).name')."
---

## CommandParent.FilterCommandsByName(string) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandParent`](CommandParent 'Guilded.Commands.CommandParent')

Filters out [commands](CommandParent.Commands 'Guilded.Commands.CommandParent.Commands') that do not have [name](CommandParent.FilterCommandsByName(string)#Guilded.Commands.CommandParent.FilterCommandsByName(string).name 'Guilded.Commands.CommandParent.FilterCommandsByName(string).name').

```csharp
public System.Collections.Generic.IEnumerable<Guilded.Commands.ICommandInfo<MemberInfo>> FilterCommandsByName(string name);
```
#### Parameters

<a name='Guilded.Commands.CommandParent.FilterCommandsByName(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the commands to get

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[Guilded.Commands.ICommandInfo&lt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[System.Reflection.MemberInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.MemberInfo 'System.Reflection.MemberInfo')[&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
Filtered commands