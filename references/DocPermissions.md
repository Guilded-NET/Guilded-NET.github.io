---
title: DocPermissions
layout: references
section: references
tags:
  - references
  - enum
description: "

Permissions related to documents."
---

## DocPermissions Enum
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Permissions`](Guilded.Base.Permissions.md 'Guilded.Base.Permissions')

Permissions related to documents.

```csharp
public enum DocPermissions
```

### Remarks
  
Defines channel permissions related to documents.
### Fields

<a name='Guilded.Base.Permissions.DocPermissions.All'></a>

`All` 15

All of the permissions combined.

<a name='Guilded.Base.Permissions.DocPermissions.Basic'></a>

`Basic` 3

A simple permission combination allowing writing permissions and reading permissions.

### Remarks
  
Sets these permissions:  
- [CreateDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.CreateDocs 'Guilded.Base.Permissions.DocPermissions.CreateDocs')  
- [ViewDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.ViewDocs 'Guilded.Base.Permissions.DocPermissions.ViewDocs')

<a name='Guilded.Base.Permissions.DocPermissions.CreateDocs'></a>

`CreateDocs` 1

Allows you to create docs

<a name='Guilded.Base.Permissions.DocPermissions.Manage'></a>

`Manage` 12

All of the manage permissions combined.

### Remarks
  
Sets these permissions:  
- [ManageDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.ManageDocs 'Guilded.Base.Permissions.DocPermissions.ManageDocs')  
- [RemoveDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.RemoveDocs 'Guilded.Base.Permissions.DocPermissions.RemoveDocs')

<a name='Guilded.Base.Permissions.DocPermissions.ManageDocs'></a>

`ManageDocs` 4

Allows you to update docs created by others and move them to other channels

<a name='Guilded.Base.Permissions.DocPermissions.None'></a>

`None` 0

No given permissions.

<a name='Guilded.Base.Permissions.DocPermissions.RemoveDocs'></a>

`RemoveDocs` 8

Allows you to remove docs created by others

<a name='Guilded.Base.Permissions.DocPermissions.ViewDocs'></a>

`ViewDocs` 2

Allows you to view docs