---
title: ChatPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to chat.

```csharp
public enum ChatPermissions
```"
---

## ChatPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to chat.

```csharp
public enum ChatPermissions
```

### Remarks
  
Defines channel permissions for chat & text related things.
### Fields

<a name='Guilded.NET.Base.Permissions.ChatPermissions.All'></a>

`All` 119

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.ChatPermissions.Basic'></a>

`Basic` 35

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [SendMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.SendMessages 'Guilded.NET.Base.Permissions.ChatPermissions.SendMessages')  
- [ReadMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ReadMessages 'Guilded.NET.Base.Permissions.ChatPermissions.ReadMessages')  
- [SendThreadMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.SendThreadMessages 'Guilded.NET.Base.Permissions.ChatPermissions.SendThreadMessages')

<a name='Guilded.NET.Base.Permissions.ChatPermissions.CreateThreads'></a>

`CreateThreads` 16

Allows you to create threads in the channel

<a name='Guilded.NET.Base.Permissions.ChatPermissions.Manage'></a>

`Manage` 84

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ManageMessages 'Guilded.NET.Base.Permissions.ChatPermissions.ManageMessages')  
- [CreateThreads](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.CreateThreads 'Guilded.NET.Base.Permissions.ChatPermissions.CreateThreads')  
- [ManageThreads](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ManageThreads 'Guilded.NET.Base.Permissions.ChatPermissions.ManageThreads')

<a name='Guilded.NET.Base.Permissions.ChatPermissions.ManageMessages'></a>

`ManageMessages` 4

Allows you to delete chat messages by other members or pin any message

<a name='Guilded.NET.Base.Permissions.ChatPermissions.ManageThreads'></a>

`ManageThreads` 64

Allows you to archive and restore threads

<a name='Guilded.NET.Base.Permissions.ChatPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.ChatPermissions.ReadMessages'></a>

`ReadMessages` 2

Allows you to read chat messages

<a name='Guilded.NET.Base.Permissions.ChatPermissions.SendMessages'></a>

`SendMessages` 1

Allows you to send chat messages

<a name='Guilded.NET.Base.Permissions.ChatPermissions.SendThreadMessages'></a>

`SendThreadMessages` 32

Allows you to reply to threads in the channel