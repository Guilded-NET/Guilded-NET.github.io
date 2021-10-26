
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## VoicePermissions Enum

Permissions related to voice.
```csharp
public enum VoicePermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_VoicePermissions_AddVoice'></a>
`AddVoice` 1

Allows you to talk in voice chat

<a name='Guilded_NET_Base_Permissions_VoicePermissions_All'></a>
`All` 8179

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_VoicePermissions_Basic'></a>
`Basic` 6211

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [AddVoice](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_AddVoice 'Guilded.NET.Base.Permissions.VoicePermissions.AddVoice')  
- [HearVoice](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_HearVoice 'Guilded.NET.Base.Permissions.VoicePermissions.HearVoice')  
- [VoiceActivity](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_VoiceActivity 'Guilded.NET.Base.Permissions.VoicePermissions.VoiceActivity')  
- [Whisper](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_Whisper 'Guilded.NET.Base.Permissions.VoicePermissions.Whisper')  
- [SendMessages](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_SendMessages 'Guilded.NET.Base.Permissions.VoicePermissions.SendMessages')

<a name='Guilded_NET_Base_Permissions_VoicePermissions_Broadcast'></a>
`Broadcast` 1024

Allows you to broadcast your voice to rooms lower in hierarchy when speaking in voice chat

<a name='Guilded_NET_Base_Permissions_VoicePermissions_DeafenMembers'></a>
`DeafenMembers` 256

Allows you to deafen members in voice chat

<a name='Guilded_NET_Base_Permissions_VoicePermissions_HearVoice'></a>
`HearVoice` 2

Allows you to listen to voice chat

<a name='Guilded_NET_Base_Permissions_VoicePermissions_Manage'></a>
`Manage` 912

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [MoveMembers](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_MoveMembers 'Guilded.NET.Base.Permissions.VoicePermissions.MoveMembers')  
- [MuteMembers](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_MuteMembers 'Guilded.NET.Base.Permissions.VoicePermissions.MuteMembers')  
- [DeafenMembers](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_DeafenMembers 'Guilded.NET.Base.Permissions.VoicePermissions.DeafenMembers')  
- [ManageVoiceRooms](VoicePermissions#Guilded_NET_Base_Permissions_VoicePermissions_ManageVoiceRooms 'Guilded.NET.Base.Permissions.VoicePermissions.ManageVoiceRooms')

<a name='Guilded_NET_Base_Permissions_VoicePermissions_ManageVoiceRooms'></a>
`ManageVoiceRooms` 512

Allows you to create, rename, and delete voice rooms

<a name='Guilded_NET_Base_Permissions_VoicePermissions_MoveMembers'></a>
`MoveMembers` 16

Allows you to move members to other voice rooms

<a name='Guilded_NET_Base_Permissions_VoicePermissions_MuteMembers'></a>
`MuteMembers` 128

Allows you to mute members in voice chats

<a name='Guilded_NET_Base_Permissions_VoicePermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_VoicePermissions_PrioritySpeaker'></a>
`PrioritySpeaker` 32

Allows you to prioritize your voice when speaking in voice chat

<a name='Guilded_NET_Base_Permissions_VoicePermissions_SendMessages'></a>
`SendMessages` 4096

Allows you to send chat messages in the voice channel

<a name='Guilded_NET_Base_Permissions_VoicePermissions_VoiceActivity'></a>
`VoiceActivity` 64

Allows you to use voice activity input mode from voice chaats

<a name='Guilded_NET_Base_Permissions_VoicePermissions_Whisper'></a>
`Whisper` 2048

Allows you to direct your voice to specific users

### Remarks
  
Defines channel permissions related to voice and voice rooms.