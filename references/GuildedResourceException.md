---
title: GuildedResourceException
layout: references
section: references
tags:
  - references
  - class
description: "

A resource exception thrown by Guilded API.

```csharp
public sealed class GuildedResourceException : Guilded.NET.Base.GuildedException
```"
---

## GuildedResourceException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

A resource exception thrown by Guilded API.

```csharp
public sealed class GuildedResourceException : Guilded.NET.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') &#129106; GuildedResourceException

### Remarks
  
An exception thrown by Guilded API when the request has invalid path. This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't updated endpoints.

| Constructors | |
| :--- | :--- |
| [GuildedResourceException()](GuildedResourceException.GuildedResourceException() 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException()') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with default message. |
| [GuildedResourceException(string, string, RestResponse)](GuildedResourceException.GuildedResourceException(string,string,RestResponse) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.RestResponse)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with information from given parameters. |
| [GuildedResourceException(string, Exception)](GuildedResourceException.GuildedResourceException(string,Exception) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') with inner exception explaining more. |
| [GuildedResourceException(string)](GuildedResourceException.GuildedResourceException(string) 'Guilded.NET.Base.GuildedResourceException.GuildedResourceException(string)') | Creates a new instance of [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')