---
title: ForumPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to forums.

```csharp
public enum ForumPermissions
```"
---

## ForumPermissions Enum
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Permissions`](Guilded.NET.Base.Permissions 'Guilded.NET.Base.Permissions')

Permissions related to forums.

```csharp
public enum ForumPermissions
```

### Remarks
  
Defines channel permissions related to forums.
### Fields

<a name='Guilded.NET.Base.Permissions.ForumPermissions.All'></a>

`All` 123

All of the permissions combined.

<a name='Guilded.NET.Base.Permissions.ForumPermissions.Basic'></a>

`Basic` 67

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics')  
- [ReadForums](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.ReadForums 'Guilded.NET.Base.Permissions.ForumPermissions.ReadForums')  
- [CreateTopicReplies](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies')

<a name='Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies'></a>

`CreateTopicReplies` 64

Allows you to create forum topic replies

<a name='Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics'></a>

`CreateTopics` 1

Allows you to create forum topics

<a name='Guilded.NET.Base.Permissions.ForumPermissions.LockTopics'></a>

`LockTopics` 32

Allows you to lock a topic

<a name='Guilded.NET.Base.Permissions.ForumPermissions.Manage'></a>

`Manage` 56

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics 'Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics')  
- [StickyTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics 'Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics')  
- [LockTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.LockTopics 'Guilded.NET.Base.Permissions.ForumPermissions.LockTopics')

<a name='Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics'></a>

`ManageTopics` 8

Allows you to remove topics and replies by others, or move them to other channels

<a name='Guilded.NET.Base.Permissions.ForumPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.NET.Base.Permissions.ForumPermissions.ReadForums'></a>

`ReadForums` 2

Allows you to read forums

<a name='Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics'></a>

`StickyTopics` 16

Allows you to sticky a topic