---
title: GuildedAuthorizationException
layout: references
section: references
tags:
  - references
  - class
description: "

An authorization exception thrown by Guilded API."
---

## GuildedAuthorizationException Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

An authorization exception thrown by Guilded API.

```csharp
public sealed class GuildedAuthorizationException : Guilded.Base.GuildedException
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; [GuildedException](GuildedException 'Guilded.Base.GuildedException') &#129106; GuildedAuthorizationException

### Remarks
  
This is caused if you are trying to connect to Guilded or do an action with invalid or expired authentication token. The only solution is to create a new auth and use it instead.

| Constructors | |
| :--- | :--- |
| [GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException() 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException()') | Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with a [default message](https://docs.microsoft.com/en-us/dotnet/api/System.Exception.Message 'System.Exception.Message'). |
| [GuildedAuthorizationException(string, string, RestResponse)](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') from a [response](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse)#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse).response'). |
| [GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)') | Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with [inner](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception)#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,System.Exception).inner 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception).inner') explaining more. |
| [GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)') | Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') with only a [message](GuildedAuthorizationException.GuildedAuthorizationException(string)#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string).message 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string).message'). |

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')