---
title: StreamPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to streaming."
---

## StreamPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to streaming.

```csharp
public enum StreamPermissions
```

### Remarks
  
Defines channel permissions related to streaming channels.
### Fields

<a name='Guilded.Base.Permissions.StreamPermissions.AddStream'></a>

`AddStream` 1

Allows you to add a stream and also talk in the stream channel

<a name='Guilded.Base.Permissions.StreamPermissions.All'></a>

`All` 51

All of the permissions combined.

<a name='Guilded.Base.Permissions.StreamPermissions.Basic'></a>

`Basic` 50

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [ViewStreams](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.ViewStreams 'Guilded.Base.Permissions.StreamPermissions.ViewStreams')  
- [JoinVoice](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.JoinVoice 'Guilded.Base.Permissions.StreamPermissions.JoinVoice')  
- [SendMessages](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.SendMessages 'Guilded.Base.Permissions.StreamPermissions.SendMessages')

<a name='Guilded.Base.Permissions.StreamPermissions.JoinVoice'></a>

`JoinVoice` 16

Allows you to talk in stream channel

<a name='Guilded.Base.Permissions.StreamPermissions.Manage'></a>

`Manage` 0

All of the manage permissions combined.

### Remarks
  
No permissions at this moment.

<a name='Guilded.Base.Permissions.StreamPermissions.SendMessages'></a>

`SendMessages` 32

Allows you to send message in stream channel

<a name='Guilded.Base.Permissions.StreamPermissions.ViewStreams'></a>

`ViewStreams` 2

Allows you to view streams