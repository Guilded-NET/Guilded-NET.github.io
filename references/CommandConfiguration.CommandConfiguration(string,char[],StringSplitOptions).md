---
title: CommandConfiguration(string, char[], StringSplitOptions)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes the configuration of Guilded.NET's commands."
---

## CommandConfiguration(string, char[], StringSplitOptions) Constructor
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`CommandConfiguration`](CommandConfiguration 'Guilded.Commands.CommandConfiguration')

Initializes the configuration of Guilded.NET's commands.

```csharp
public CommandConfiguration(string prefix, char[] separators, StringSplitOptions splitOptions=1);
```
#### Parameters

<a name='Guilded.Commands.CommandConfiguration.CommandConfiguration(string,char[],StringSplitOptions).prefix'></a>

`prefix` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The prefix with which all commands should start

<a name='Guilded.Commands.CommandConfiguration.CommandConfiguration(string,char[],StringSplitOptions).separators'></a>

`separators` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')

The separators that split the command's arguments

<a name='Guilded.Commands.CommandConfiguration.CommandConfiguration(string,char[],StringSplitOptions).splitOptions'></a>

`splitOptions` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')

The splitting options of the command's arguments