---
title: ForumPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to forums."
---

## ForumPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to forums.

```csharp
public enum ForumPermissions
```

### Remarks
  
Defines channel permissions related to forums.
### Fields

<a name='Guilded.Base.Permissions.ForumPermissions.All'></a>

`All` 123

All of the permissions combined.

<a name='Guilded.Base.Permissions.ForumPermissions.Basic'></a>

`Basic` 67

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.CreateTopics 'Guilded.Base.Permissions.ForumPermissions.CreateTopics')  
- [ReadForums](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.ReadForums 'Guilded.Base.Permissions.ForumPermissions.ReadForums')  
- [CreateTopicReplies](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies 'Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies')

<a name='Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies'></a>

`CreateTopicReplies` 64

Allows you to create forum topic replies

<a name='Guilded.Base.Permissions.ForumPermissions.CreateTopics'></a>

`CreateTopics` 1

Allows you to create forum topics

<a name='Guilded.Base.Permissions.ForumPermissions.LockTopics'></a>

`LockTopics` 32

Allows you to lock a topic

<a name='Guilded.Base.Permissions.ForumPermissions.Manage'></a>

`Manage` 56

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.ManageTopics 'Guilded.Base.Permissions.ForumPermissions.ManageTopics')  
- [StickyTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.StickyTopics 'Guilded.Base.Permissions.ForumPermissions.StickyTopics')  
- [LockTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.LockTopics 'Guilded.Base.Permissions.ForumPermissions.LockTopics')

<a name='Guilded.Base.Permissions.ForumPermissions.ManageTopics'></a>

`ManageTopics` 8

Allows you to remove topics and replies by others, or move them to other channels

<a name='Guilded.Base.Permissions.ForumPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.ForumPermissions.ReadForums'></a>

`ReadForums` 2

Allows you to read forums

<a name='Guilded.Base.Permissions.ForumPermissions.StickyTopics'></a>

`StickyTopics` 16

Allows you to sticky a topic