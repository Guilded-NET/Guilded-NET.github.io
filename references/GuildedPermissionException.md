---
title: GuildedPermissionException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an exception thrown by Guilded API when the client has no permission to perform a request."
---

## GuildedPermissionException Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an exception thrown by Guilded API when the client has no permission to perform a request.

```csharp
public sealed class GuildedPermissionException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.Base.GuildedException') &#129106; GuildedPermissionException

### Remarks
  
This is caused if you are trying to access or do an action that requires permissions, but you don't have them. This can only be fixed by getting said permissions by [a server](Server 'Guilded.Base.Servers.Server') staff and is usually not controlled by you.

| Constructors | |
| :--- | :--- |
| [GuildedPermissionException()](GuildedPermissionException.GuildedPermissionException() 'Guilded.Base.GuildedPermissionException.GuildedPermissionException()') | Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with default message. |
| [GuildedPermissionException(string, string, RestResponse)](GuildedPermissionException.GuildedPermissionException(string,string,RestResponse) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with information from given parameters. |
| [GuildedPermissionException(string, Exception)](GuildedPermissionException.GuildedPermissionException(string,Exception) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception)') | Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException') with an [inner](GuildedPermissionException.GuildedPermissionException(string,Exception)#Guilded.Base.GuildedPermissionException.GuildedPermissionException(string,System.Exception).inner 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string, System.Exception).inner') explaining more. |
| [GuildedPermissionException(string)](GuildedPermissionException.GuildedPermissionException(string) 'Guilded.Base.GuildedPermissionException.GuildedPermissionException(string)') | Initializes a new instance of [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')