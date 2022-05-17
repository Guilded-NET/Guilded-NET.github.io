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
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an exception thrown by Guilded API when a request has invalid parameters.

```csharp
public sealed class GuildedRequestException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.Base.GuildedException') &#129106; GuildedRequestException

### Remarks
  
This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Outdated methods — If you are using newer version of API and older incompatible methods, this can lead to an exception. This would rarely be the case, but still a possibility.  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't changed methods yet.

| Constructors | |
| :--- | :--- |
| [GuildedRequestException()](GuildedRequestException.GuildedRequestException() 'Guilded.Base.GuildedRequestException.GuildedRequestException()') | Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with default message. |
| [GuildedRequestException(string, string, RestResponse)](GuildedRequestException.GuildedRequestException(string,string,RestResponse) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with information from given parameters. |
| [GuildedRequestException(string, Exception)](GuildedRequestException.GuildedRequestException(string,Exception) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException') with an [inner](GuildedRequestException.GuildedRequestException(string,Exception)#Guilded.Base.GuildedRequestException.GuildedRequestException(string,System.Exception).inner 'Guilded.Base.GuildedRequestException.GuildedRequestException(string, System.Exception).inner') explaining more. |
| [GuildedRequestException(string)](GuildedRequestException.GuildedRequestException(string) 'Guilded.Base.GuildedRequestException.GuildedRequestException(string)') | Initializes a new instance of [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException'). |

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')