---
title: GuildedRequestException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an exception thrown by Guilded API when a request has invalid parameters."
---

## GuildedRequestException Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

Represents an exception thrown by Guilded API when a request has invalid parameters.

```csharp
public sealed class GuildedRequestException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') &#129106; GuildedRequestException

### Remarks
  
This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Outdated methods — If you are using newer version of API and older incompatible methods, this can lead to an exception. This would rarely be the case, but still a possibility.  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't changed methods yet.

| Constructors | |
| :--- | :--- |
| [GuildedRequestException()](GuildedRequestException.GuildedRequestException().md 'Guilded.Base.GuildedRequestException.GuildedRequestException()') | Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with default message. |
| [GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with information from given parameters. |
| [GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException') with an [inner](GuildedRequestException.GuildedRequestException(string,Exception).md#Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).inner 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception).inner') explaining more. |
| [GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string).md 'Guilded.Base.GuildedRequestException.GuildedRequestException(string)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException'). |

### See Also
- [GuildedException](GuildedException.md 'Guilded.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')
- [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')