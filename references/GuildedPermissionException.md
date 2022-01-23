---
title: GuildedPermissionException
layout: references
section: references
tags:
  - references
  - class
description: "

A permission exception thrown by Guilded API.

```csharp
public sealed class GuildedPermissionException : Guilded.NET.Base.GuildedException
```"
---

## GuildedPermissionException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

A permission exception thrown by Guilded API.

```csharp
public sealed class GuildedPermissionException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#129106; GuildedPermissionException

### Remarks
  
An exception thrown by Guilded API when request is invalid. This is caused if you are trying to access or do an action that requires permissions, but you don't have them. This can only be fixed by getting said permissions by a server staff and is usually not controlled by you.

| Constructors | |
| :--- | :--- |
| [GuildedPermissionException()](GuildedPermissionException.GuildedPermissionException() 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException()') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with default message. |
| [GuildedPermissionException(string, string, RestResponse)](GuildedPermissionException.GuildedPermissionException(string,string,RestResponse) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, string, RestSharp.RestResponse)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with information from given parameters. |
| [GuildedPermissionException(string, Exception)](GuildedPermissionException.GuildedPermissionException(string,Exception) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') with inner exception explaining more. |
| [GuildedPermissionException(string)](GuildedPermissionException.GuildedPermissionException(string) 'Guilded.NET.Base.GuildedPermissionException.GuildedPermissionException(string)') | Creates a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')