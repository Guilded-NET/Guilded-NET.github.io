---
title: HasName(string)
layout: references
section: references
tags:
  - references
  - method
description: "

Gets whether the [name](ICommandInfo_TMember_.HasName(string)#Guilded.Commands.ICommandInfo_TMember_.HasName(string).name 'Guilded.Commands.ICommandInfo<TMember>.HasName(string).name') matches command's [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') or its [aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases')."
---

## ICommandInfo<TMember>.HasName(string) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`ICommandInfo<TMember>`](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')

Gets whether the [name](ICommandInfo_TMember_.HasName(string)#Guilded.Commands.ICommandInfo_TMember_.HasName(string).name 'Guilded.Commands.ICommandInfo<TMember>.HasName(string).name') matches command's [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') or its [aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases').

```csharp
bool HasName(string name);
```
#### Parameters

<a name='Guilded.Commands.ICommandInfo_TMember_.HasName(string).name'></a>

`name` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name to check whether the command contains

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Command has [name](ICommandInfo_TMember_.HasName(string)#Guilded.Commands.ICommandInfo_TMember_.HasName(string).name 'Guilded.Commands.ICommandInfo<TMember>.HasName(string).name')