---
title: FilterCommandsByName(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Filters out commands that do not have [name](CommandBase.FilterCommandsByName(string)#Guilded.Commands.CommandBase.FilterCommandsByName(string).name 'Guilded.Commands.CommandBase.FilterCommandsByName(string).name')."
---

## CommandBase.FilterCommandsByName(string) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandBase`](CommandBase 'Guilded.Commands.CommandBase')

Filters out commands that do not have [name](CommandBase.FilterCommandsByName(string)#Guilded.Commands.CommandBase.FilterCommandsByName(string).name 'Guilded.Commands.CommandBase.FilterCommandsByName(string).name').

```csharp
public System.Collections.Generic.IEnumerable<Guilded.Commands.ICommandInfo<MemberInfo>> FilterCommandsByName(string name);
```
#### Parameters

<a name='Guilded.Commands.CommandBase.FilterCommandsByName(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the commands to get

#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[Guilded.Commands.ICommandInfo&lt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[System.Reflection.MemberInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Reflection.MemberInfo 'System.Reflection.MemberInfo')[&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
Filtered commands