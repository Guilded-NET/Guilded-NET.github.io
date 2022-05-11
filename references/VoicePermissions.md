---
title: VoicePermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to voice."
---

## VoicePermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to voice.

```csharp
public enum VoicePermissions
```

### Remarks
  
Defines channel permissions related to voice and voice rooms.
### Fields

<a name='Guilded.Base.Permissions.VoicePermissions.AddVoice'></a>

`AddVoice` 1

Allows you to talk in voice chat

<a name='Guilded.Base.Permissions.VoicePermissions.All'></a>

`All` 8179

All of the permissions combined.

<a name='Guilded.Base.Permissions.VoicePermissions.Basic'></a>

`Basic` 6211

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [AddVoice](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.AddVoice 'Guilded.Base.Permissions.VoicePermissions.AddVoice')  
- [HearVoice](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.HearVoice 'Guilded.Base.Permissions.VoicePermissions.HearVoice')  
- [VoiceActivity](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.VoiceActivity 'Guilded.Base.Permissions.VoicePermissions.VoiceActivity')  
- [Whisper](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.Whisper 'Guilded.Base.Permissions.VoicePermissions.Whisper')  
- [SendMessages](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.SendMessages 'Guilded.Base.Permissions.VoicePermissions.SendMessages')

<a name='Guilded.Base.Permissions.VoicePermissions.Broadcast'></a>

`Broadcast` 1024

Allows you to broadcast your voice to rooms lower in hierarchy when speaking in voice chat

<a name='Guilded.Base.Permissions.VoicePermissions.DeafenMembers'></a>

`DeafenMembers` 256

Allows you to deafen members in voice chat

<a name='Guilded.Base.Permissions.VoicePermissions.HearVoice'></a>

`HearVoice` 2

Allows you to listen to voice chat

<a name='Guilded.Base.Permissions.VoicePermissions.Manage'></a>

`Manage` 912

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [MoveMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.MoveMembers 'Guilded.Base.Permissions.VoicePermissions.MoveMembers')  
- [MuteMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.MuteMembers 'Guilded.Base.Permissions.VoicePermissions.MuteMembers')  
- [DeafenMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.DeafenMembers 'Guilded.Base.Permissions.VoicePermissions.DeafenMembers')  
- [ManageVoiceRooms](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.ManageVoiceRooms 'Guilded.Base.Permissions.VoicePermissions.ManageVoiceRooms')

<a name='Guilded.Base.Permissions.VoicePermissions.ManageVoiceRooms'></a>

`ManageVoiceRooms` 512

Allows you to create, rename, and delete voice rooms

<a name='Guilded.Base.Permissions.VoicePermissions.MoveMembers'></a>

`MoveMembers` 16

Allows you to move members to other voice rooms

<a name='Guilded.Base.Permissions.VoicePermissions.MuteMembers'></a>

`MuteMembers` 128

Allows you to mute members in voice chats

<a name='Guilded.Base.Permissions.VoicePermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.VoicePermissions.PrioritySpeaker'></a>

`PrioritySpeaker` 32

Allows you to prioritize your voice when speaking in voice chat

<a name='Guilded.Base.Permissions.VoicePermissions.SendMessages'></a>

`SendMessages` 4096

Allows you to send chat messages in the voice channel

<a name='Guilded.Base.Permissions.VoicePermissions.VoiceActivity'></a>

`VoiceActivity` 64

Allows you to use voice activity input mode from voice chaats

<a name='Guilded.Base.Permissions.VoicePermissions.Whisper'></a>

`Whisper` 2048

Allows you to direct your voice to specific users