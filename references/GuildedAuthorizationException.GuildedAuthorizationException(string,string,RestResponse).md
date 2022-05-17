---
title: GuildedAuthorizationException(string, string, RestResponse)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') from a [response](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse)#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse).response')."
---

## GuildedAuthorizationException(string, string, RestResponse) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedAuthorizationException`](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')

Initializes a new instance of [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException') from a [response](GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestResponse)#Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, string, RestSharp.RestResponse).response').

```csharp
public GuildedAuthorizationException(string code, string message, RestSharp.RestResponse response);
```
#### Parameters

<a name='Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).code'></a>

`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string,string,RestSharp.RestResponse).response'></a>

`response` [RestSharp.RestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse 'RestSharp.RestResponse')

The response that was received from Guilded API

### See Also
- [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.Base.GuildedAuthorizationException')
- [GuildedAuthorizationException()](GuildedAuthorizationException.GuildedAuthorizationException() 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException()')
- [GuildedAuthorizationException(string)](GuildedAuthorizationException.GuildedAuthorizationException(string) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string)')
- [GuildedAuthorizationException(string, Exception)](GuildedAuthorizationException.GuildedAuthorizationException(string,Exception) 'Guilded.Base.GuildedAuthorizationException.GuildedAuthorizationException(string, System.Exception)')