---
title: BotPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to bots.

```csharp
public enum BotPermissions
```"
---

## BotPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to bots.

```csharp
public enum BotPermissions
```

### Remarks
  
Defines team permissions for flowbots related things.
### Fields

<a name='Guilded.NET.Base.Permissions.BotPermissions.All'></a>

`All` 1

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.BotPermissions.ManageBots'></a>

`ManageBots` 1

Allows you to create and edit bots for automated workflows.  
NOTE: For now, bots do not enforce permissions. Anyone with this permission  
can create bots to work around their role's existing permissions.

<a name='Guilded.NET.Base.Permissions.BotPermissions.None'></a>

`None` 0

No given permissions.