---
title: AddCommands(this AbstractGuildedClient, CommandModule, CommandConfiguration)
layout: references
section: references
tags:
  - references
  - method
description: "

Adds a command module to the client."
---

## ClientCommandExtensions.AddCommands(this AbstractGuildedClient, CommandModule, CommandConfiguration) Method
##### **Assembly:** `Guilded.Commands`<br/>**Type:** [`ClientCommandExtensions`](ClientCommandExtensions 'Guilded.Commands.ClientCommandExtensions')

Adds a command module to the client.

```csharp
public static Guilded.AbstractGuildedClient AddCommands(this Guilded.AbstractGuildedClient client, Guilded.Commands.CommandModule commandModule, Guilded.Commands.CommandConfiguration configuration);
```
#### Parameters

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,Guilded.Commands.CommandConfiguration).client'></a>

`client` [AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')

The client to add command module to

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,Guilded.Commands.CommandConfiguration).commandModule'></a>

`commandModule` [CommandModule](CommandModule 'Guilded.Commands.CommandModule')

The command module to add to the client

<a name='Guilded.Commands.ClientCommandExtensions.AddCommands(thisGuilded.AbstractGuildedClient,Guilded.Commands.CommandModule,Guilded.Commands.CommandConfiguration).configuration'></a>

`configuration` [CommandConfiguration](CommandConfiguration 'Guilded.Commands.CommandConfiguration')

The configuration of the client's commands to use

#### Returns
[AbstractGuildedClient](AbstractGuildedClient 'Guilded.AbstractGuildedClient')  
[Guilded client](GuildedBotClient 'Guilded.GuildedBotClient')