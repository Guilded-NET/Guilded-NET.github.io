---
title: GuildedAuthorizationException
layout: references
section: references
tags:
  - references
  - class
description: "

An authorization exception thrown by Guilded API.

```csharp
public sealed class GuildedAuthorizationException : Guilded.NET.Base.GuildedException
```"
---

## GuildedAuthorizationException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An authorization exception thrown by Guilded API.

```csharp
public sealed class GuildedAuthorizationException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#129106; GuildedAuthorizationException

### Remarks
  
An exception thrown by Guilded API when the request is invalid. This is caused if you are trying to connect to Guilded or do an action with invalid or expired authentication token. The only solution is to create a new auth and use it instead.

| Constructors | |
| :--- | :--- |
| [GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException() 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException()') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with default message. |
| [GuildedAuthorizationException(string, string, RestResponse)](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with information from given parameters. |
| [GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') with inner exception explaining more. |
| [GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string) 'Guilded.NET.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)') | Creates a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')