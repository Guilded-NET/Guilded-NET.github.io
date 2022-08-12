---
title: GuildedTooManyRequestsException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an exception thrown by Guilded API when a request has invalid parameters."
---

## GuildedTooManyRequestsException Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an exception thrown by Guilded API when a request has invalid parameters.

```csharp
public sealed class GuildedTooManyRequestsException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.Base.GuildedException') &#129106; GuildedTooManyRequestsException

### Remarks
  
This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Outdated methods — If you are using newer version of API and older incompatible methods, this can lead to an exception. This would rarely be the case, but still a possibility.  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't changed methods yet.

| Constructors | |
| :--- | :--- |
| [GuildedTooManyRequestsException()](GuildedTooManyRequestsException.GuildedTooManyRequestsException() 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException()') | Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with default message. |
| [GuildedTooManyRequestsException(string, string, RestResponse, TimeSpan, bool)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,string,RestResponse,TimeSpan,bool) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string, string, RestSharp.RestResponse, TimeSpan, bool)') | Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with information from given parameters. |
| [GuildedTooManyRequestsException(string, Exception)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,Exception) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string, System.Exception)') | Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with an [inner](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,Exception)#Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,System.Exception).inner 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string, System.Exception).inner') explaining more. |
| [GuildedTooManyRequestsException(string, TimeSpan, bool)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string,TimeSpan,bool) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string, TimeSpan, bool)') | Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') with information from given parameters. |
| [GuildedTooManyRequestsException(string)](GuildedTooManyRequestsException.GuildedTooManyRequestsException(string) 'Guilded.Base.GuildedTooManyRequestsException.GuildedTooManyRequestsException(string)') | Initializes a new instance of [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException'). |

| Properties | |
| :--- | :--- |
| [IsFromSlowmode](GuildedTooManyRequestsException.IsFromSlowmode 'Guilded.Base.GuildedTooManyRequestsException.IsFromSlowmode') | Gets whether [too many request error](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException') was caused by [channel's slowmode settingss](ServerChannel 'Guilded.Base.Servers.ServerChannel'). |
| [TimeLeft](GuildedTooManyRequestsException.TimeLeft 'Guilded.Base.GuildedTooManyRequestsException.TimeLeft') | Gets the time to wait after another request. |

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')