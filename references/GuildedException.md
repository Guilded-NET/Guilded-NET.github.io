---
title: GuildedException
layout: references
section: references
tags:
  - references
  - class
description: "

Represents an exception thrown by Guilded API."
---

## GuildedException Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base`](Guilded.Base 'Guilded.Base')

Represents an exception thrown by Guilded API.

```csharp
public class GuildedException : System.Exception
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [System.Exception](https://docs.microsoft.com/en-us/dotnet/api/System.Exception 'System.Exception') &#129106; GuildedException

Derived  
&#8627; [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')  
&#8627; [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')  
&#8627; [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')  
&#8627; [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')  
&#8627; [GuildedTooManyRequestsException](GuildedTooManyRequestsException 'Guilded.Base.GuildedTooManyRequestsException')

### Remarks
  
This should not usually be thrown and instead, children types of [GuildedException](GuildedException 'Guilded.Base.GuildedException') should be thrown instead. If you see it get thrown, this is most likely due to internal server error or some kind of other unknown exception.  
  
If you get internal server error, make sure you are doing everything right as documented or noted.

| Constructors | |
| :--- | :--- |
| [GuildedException()](GuildedException.GuildedException() 'Guilded.Base.GuildedException.GuildedException()') | Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with a default message. |
| [GuildedException(SerializationInfo, StreamingContext)](GuildedException.GuildedException(SerializationInfo,StreamingContext) 'Guilded.Base.GuildedException.GuildedException(SerializationInfo, StreamingContext)') | Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with serialization information. |
| [GuildedException(string, string, RestResponse)](GuildedException.GuildedException(string,string,RestResponse) 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse)') | Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') from a [response](GuildedException.GuildedException(string,string,RestResponse)#Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse).response'). |
| [GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception) 'Guilded.Base.GuildedException.GuildedException(string, System.Exception)') | Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with an [inner](GuildedException.GuildedException(string,Exception)#Guilded.Base.GuildedException.GuildedException(string,System.Exception).inner 'Guilded.Base.GuildedException.GuildedException(string, System.Exception).inner') explaining more. |
| [GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.Base.GuildedException.GuildedException(string)') | Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') with only a [message](GuildedException.GuildedException(string)#Guilded.Base.GuildedException.GuildedException(string).message 'Guilded.Base.GuildedException.GuildedException(string).message'). |

| Properties | |
| :--- | :--- |
| [Code](GuildedException.Code 'Guilded.Base.GuildedException.Code') | Gets the code name of Guilded error. |
| [Response](GuildedException.Response 'Guilded.Base.GuildedException.Response') | Gets the response that was received from Guilded API. |
| [StatusCode](GuildedException.StatusCode 'Guilded.Base.GuildedException.StatusCode') | Gets the HTTP status that was found in the response. |

| Methods | |
| :--- | :--- |
| [ToString()](GuildedException.ToString() 'Guilded.Base.GuildedException.ToString()') | Returns string representation of the exception thrown. |

### See Also
- [GuildedPermissionException](GuildedPermissionException 'Guilded.Base.GuildedPermissionException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedResourceException](GuildedResourceException 'Guilded.Base.GuildedResourceException')
- [GuildedRequestException](GuildedRequestException 'Guilded.Base.GuildedRequestException')
- [GuildedWebsocketException](GuildedWebsocketException 'Guilded.Base.GuildedWebsocketException')