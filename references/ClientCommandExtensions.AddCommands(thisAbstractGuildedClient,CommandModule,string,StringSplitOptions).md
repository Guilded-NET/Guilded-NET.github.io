---
title: AddCommands(this AbstractGuildedClient, CommandModule, string, StringSplitOptions)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a command module to the client."
---

## ClientCommandExtensions.AddCommands(this AbstractGuildedClient, CommandModule, string, StringSplitOptions) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`ClientCommandExtensions`](ClientCommandExtensions 'Guilded.Commands.ClientCommandExtensions')

Adds a command module to the client.

```csharp
public static Guilded.AbstractGuildedClient AddCommands(this Guilded.AbstractGuildedClient client, Guilded.Commands.CommandModule commandModule, string prefix, StringSplitOptions splitOptions=1);
```
#### Parameters

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,string,StringSplitOptions).client'></a>

`client` [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

The client to add command module to

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,string,StringSplitOptions).commandModule'></a>

`commandModule` [CommandModule](CommandModule 'Guilded.Commands.CommandModule')

The command module to add to the client

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,string,StringSplitOptions).prefix'></a>

`prefix` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The prefix with which all commands should start

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,string,StringSplitOptions).splitOptions'></a>

`splitOptions` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')

The splitting options of the command's arguments

#### Returns
[AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')  
[Guilded client](GuildedBotClient 'Guilded.GuildedBotClient')