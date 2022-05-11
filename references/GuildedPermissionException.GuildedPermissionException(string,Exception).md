---
title: GuildedPermissionException(string, Exception)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with an [inner](GuildedPermissionException.GuildedPermissionException(string,Exception).md#Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,System.Exception).inner 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception).inner') explaining more."
---

## GuildedPermissionException(string, Exception) Constructor
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedPermissionException`](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')

Initializes a new instance of [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException') with an [inner](GuildedPermissionException.GuildedPermissionException(string,Exception).md#Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,System.Exception).inner 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception).inner') explaining more.

```csharp
public GuildedPermissionException(string message, System.Exception inner);
```
#### Parameters

<a name='Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,System.Exception).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,System.Exception).inner'></a>

`inner` [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception')

Inner exception explaining more