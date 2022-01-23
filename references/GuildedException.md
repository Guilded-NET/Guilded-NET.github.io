---
title: GuildedException
layout: references
section: references
tags:
  - references
  - class
description: "

An exception thrown by Guilded API.

```csharp
public class GuildedException : System.Exception
```"
---

## GuildedException Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base`](Guilded.NET.Base 'Guilded.NET.Base')

An exception thrown by Guilded API.

```csharp
public class GuildedException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; GuildedException

Derived  
&#8627; [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException')  
&#8627; [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')  
&#8627; [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')  
&#8627; [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')

### Remarks
  
A base exception type for Guilded. This should not usually be thrown and instead, children types of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') should be thrown instead. If you see it get thrown, this is most likely due to internal server error or some kind of other unknown exception.  
  
If you get internal server error, make sure you are doing everything right as documented or noted.

| Constructors | |
| :--- | :--- |
| [GuildedException()](GuildedException.GuildedException() 'Guilded.NET.Base.GuildedException.GuildedException()') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with default message. |
| [GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse) 'Guilded.NET.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with information from given parameters. |
| [GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception) 'Guilded.NET.Base.GuildedException.GuildedException(string, System.Exception)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with inner exception explaining more. |
| [GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.NET.Base.GuildedException.GuildedException(string)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException'). |
| [GuildedException(SerializationInfo, StreamingContext)](GuildedException.GuildedException(SerializationInfo,StreamingContext) 'Guilded.NET.Base.GuildedException.GuildedException(System.Runtime.Serialization.SerializationInfo, System.Runtime.Serialization.StreamingContext)') | Creates a new instance of [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') with serialization information. |

| Properties | |
| :--- | :--- |
| [Code](GuildedException.Code 'Guilded.NET.Base.GuildedException.Code') | The code name of Guilded error. |
| [Response](GuildedException.Response 'Guilded.NET.Base.GuildedException.Response') | The response that was received from Guilded API. |
| [StatusCode](GuildedException.StatusCode 'Guilded.NET.Base.GuildedException.StatusCode') | The HTTP status that was found in the response. |

| Methods | |
| :--- | :--- |
| [ToString()](GuildedException.ToString() 'Guilded.NET.Base.GuildedException.ToString()') | Returns string representation of the exception thrown. |

### See Also
- [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException')
- [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException')