
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## ForumPermissions Enum

Permissions related to forums.
```csharp
public enum ForumPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_ForumPermissions_All'></a>
`All` 123

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_ForumPermissions_Basic'></a>
`Basic` 67

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateTopics](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_CreateTopics 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics')  
- [ReadForums](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_ReadForums 'Guilded.NET.Base.Permissions.ForumPermissions.ReadForums')  
- [CreateTopicReplies](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_CreateTopicReplies 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies')

<a name='Guilded_NET_Base_Permissions_ForumPermissions_CreateTopicReplies'></a>
`CreateTopicReplies` 64

Allows you to create forum topic replies

<a name='Guilded_NET_Base_Permissions_ForumPermissions_CreateTopics'></a>
`CreateTopics` 1

Allows you to create forum topics

<a name='Guilded_NET_Base_Permissions_ForumPermissions_LockTopics'></a>
`LockTopics` 32

Allows you to lock a topic

<a name='Guilded_NET_Base_Permissions_ForumPermissions_Manage'></a>
`Manage` 56

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageTopics](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_ManageTopics 'Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics')  
- [StickyTopics](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_StickyTopics 'Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics')  
- [LockTopics](ForumPermissions#Guilded_NET_Base_Permissions_ForumPermissions_LockTopics 'Guilded.NET.Base.Permissions.ForumPermissions.LockTopics')

<a name='Guilded_NET_Base_Permissions_ForumPermissions_ManageTopics'></a>
`ManageTopics` 8

Allows you to remove topics and replies by others, or move them to other channels

<a name='Guilded_NET_Base_Permissions_ForumPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_ForumPermissions_ReadForums'></a>
`ReadForums` 2

Allows you to read forums

<a name='Guilded_NET_Base_Permissions_ForumPermissions_StickyTopics'></a>
`StickyTopics` 16

Allows you to sticky a topic

### Remarks
  
Defines channel permissions related to forums.