---
title: GuildedException(string, string, RestResponse)
layout: references
section: references
tags:
  - references
  - constructor
description: "

Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') from a [response](GuildedException.GuildedException(string,string,RestResponse)#Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse).response')."
---

## GuildedException(string, string, RestResponse) Constructor
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`GuildedException`](GuildedException 'Guilded.Base.GuildedException')

Initializes a new instance of [GuildedException](GuildedException 'Guilded.Base.GuildedException') from a [response](GuildedException.GuildedException(string,string,RestResponse)#Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).response 'Guilded.Base.GuildedException.GuildedException(string, string, RestSharp.RestResponse).response').

```csharp
public GuildedException(string code, string message, RestSharp.RestResponse response);
```
#### Parameters

<a name='Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).code'></a>

`code` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The name of the error from Guilded API

<a name='Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).message'></a>

`message` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')

The description of the error from Guilded API

<a name='Guilded.Base.GuildedException.GuildedException(string,string,RestSharp.RestResponse).response'></a>

`response` [RestSharp.RestResponse](https://docs.microsoft.com/en-us/dotnet/api/RestSharp.RestResponse 'RestSharp.RestResponse')

The response that was received from Guilded API

### See Also
- [GuildedException](GuildedException 'Guilded.Base.GuildedException')
- [GuildedException()](GuildedException.GuildedException() 'Guilded.Base.GuildedException.GuildedException()')
- [GuildedException(string)](GuildedException.GuildedException(string) 'Guilded.Base.GuildedException.GuildedException(string)')
- [GuildedException(string, Exception)](GuildedException.GuildedException(string,Exception) 'Guilded.Base.GuildedException.GuildedException(string, System.Exception)')