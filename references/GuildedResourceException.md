---
title: GuildedResourceException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an exception thrown by Guilded API when a request has invalid path."
---

## GuildedResourceException Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base.md 'Guilded.Base')

Represents an exception thrown by Guilded API when a request has invalid path.

```csharp
public sealed class GuildedResourceException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException.md 'Guilded.Base.GuildedException') &#129106; GuildedResourceException

### Remarks
  
This has these leading causes:  
- Invalid/bad parameters — The parameters of given method were invalid or expired  
- Guilded.NET related issue — This could be related to Guilded.NET itself, especially if new breaking update came and Guilded.NET hasn't updated endpoints.

| Constructors | |
| :--- | :--- |
| [GuildedResourceException()](GuildedResourceException.GuildedResourceException().md 'Guilded.Base.GuildedResourceException.GuildedResourceException()') | Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with default message. |
| [GuildedResourceException(string, string, RestResponse)](GuildedResourceException.GuildedResourceException(string,string,RestResponse).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with information from given parameters. |
| [GuildedResourceException(string, Exception)](GuildedResourceException.GuildedResourceException(string,Exception).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception)') | Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException') with an [inner](GuildedResourceException.GuildedResourceException(string,Exception).md#Guilded.Base.GuildedResourceException.GuildedResourceException(string,System.Exception).inner 'Guilded.Base.GuildedResourceException.GuildedResourceException(string, System.Exception).inner') explaining more. |
| [GuildedResourceException(string)](GuildedResourceException.GuildedResourceException(string).md 'Guilded.Base.GuildedResourceException.GuildedResourceException(string)') | Initializes a new instance of [GuildedResourceException](GuildedResourceException.md 'Guilded.Base.GuildedResourceException'). |

### See Also
- [GuildedException](GuildedException.md 'Guilded.Base.GuildedException')
- [GuildedAuthorizationException](GuildedAuthorizationException.md 'Guilded.Base.GuildedAuthorizationException')
- [GuildedPermissionException](GuildedPermissionException.md 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException.md 'Guilded.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException.md 'Guilded.Base.GuildedWebsocketException')