
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions')
## DocPermissions Enum

Permissions related to documents.
```csharp
public enum DocPermissions
```
### Fields

<a name='Guilded_NET_Base_Permissions_DocPermissions_All'></a>
`All` 15

All of the permissions combined.

<a name='Guilded_NET_Base_Permissions_DocPermissions_Basic'></a>
`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateDocs](DocPermissions#Guilded_NET_Base_Permissions_DocPermissions_CreateDocs 'Guilded.NET.Base.Permissions.DocPermissions.CreateDocs')  
- [ViewDocs](DocPermissions#Guilded_NET_Base_Permissions_DocPermissions_ViewDocs 'Guilded.NET.Base.Permissions.DocPermissions.ViewDocs')

<a name='Guilded_NET_Base_Permissions_DocPermissions_CreateDocs'></a>
`CreateDocs` 1

Allows you to create docs

<a name='Guilded_NET_Base_Permissions_DocPermissions_Manage'></a>
`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageDocs](DocPermissions#Guilded_NET_Base_Permissions_DocPermissions_ManageDocs 'Guilded.NET.Base.Permissions.DocPermissions.ManageDocs')  
- [RemoveDocs](DocPermissions#Guilded_NET_Base_Permissions_DocPermissions_RemoveDocs 'Guilded.NET.Base.Permissions.DocPermissions.RemoveDocs')

<a name='Guilded_NET_Base_Permissions_DocPermissions_ManageDocs'></a>
`ManageDocs` 4

Allows you to update docs created by others and move them to other channels

<a name='Guilded_NET_Base_Permissions_DocPermissions_None'></a>
`None` 0

No given permissions.

<a name='Guilded_NET_Base_Permissions_DocPermissions_RemoveDocs'></a>
`RemoveDocs` 8

Allows you to remove docs created by others

<a name='Guilded_NET_Base_Permissions_DocPermissions_ViewDocs'></a>
`ViewDocs` 2

Allows you to view docs

### Remarks
  
Defines channel permissions related to documents.