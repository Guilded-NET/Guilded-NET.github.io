---
title: GuildedRequestException
layout: references
section: references
tags:
  - references
  - class
description: "

A bad request exception thrown by Guilded API.

```csharp
public sealed class GuildedRequestException : Guilded.NET.Base.GuildedException
```"
---

## GuildedRequestException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

A bad request exception thrown by Guilded API.

```csharp
public sealed class GuildedRequestException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#129106; GuildedRequestException

### Remarks
  
An exception thrown by Guilded API when the request is invalid/bad. This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Outdated methods — If you are using newer version of API and older incompatible methods, this can lead to an exception. This would rarely be the case, but still a possibility.  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't changed methods yet.

| Constructors | |
| :--- | :--- |
| [GuildedRequestException()](GuildedRequestException.GuildedRequestException() 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException()') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with default message. |
| [GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with information from given parameters. |
| [GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') with inner exception explaining more. |
| [GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string) 'Guilded.NET.Base.GuildedRequestException.GuildedRequestException(string)') | Creates a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')